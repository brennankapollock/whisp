import { View, Text } from "react-native";
import React, { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import {
  selectOrigin,
  seletedDestination,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(seletedDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  //will run when the origin reloads
  useEffect(() => {
    if (!origin || !destination) return "there is no coords";

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  //fetches the distance and duration from google matrix and dispatches to the redux store.
  useEffect(() => {
    if (!origin || !destination) return "there is no coords";

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWisth={3}
          strokeColoe="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
