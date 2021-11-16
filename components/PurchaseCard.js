import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectCost,
  selectOrigin,
  seletedDestination,
  selectTravelTimeInformation,
} from "../slices/navSlice";
import { selectName } from "../slices/userSlice";
import { useNavigation } from "@react-navigation/core";

const PurchaseCard = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(seletedDestination);
  const cost = useSelector(selectCost);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const name = useSelector(selectName);
  const navigation = useNavigation();
  console.log(cost);

  const showAlert = () =>
    Alert.alert(
      "Congrats " + name.name + "!",
      "Clicking Return Will Return You To The Dashboard",
      [
        {
          text: "Return",
          onPress: () => navigation.navigate("HomeScreen"),
        },
      ]
    );

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <Text style={tw`text-center pt-6 text-2xl`}>Your Upcoming Ride</Text>
      <View
        style={{
          borderWidth: 0.75,
          borderColor: "black",
          marginTop: 8,
          marginHorizontal: 70,
        }}
      ></View>
      <View style={tw`flex justify-evenly px-4 h-1/2 py-2 my-6 `}>
        <Text style={tw`font-semibold text-lg`}>
          Origin:
          <Text style={tw`font-normal text-base`}> {origin.description}</Text>
        </Text>
        <Text style={tw`font-semibold text-lg`}>
          Destination:
          <Text style={tw`font-normal text-base`}>
            {" "}
            {destination.description}
          </Text>
        </Text>
        <Text style={tw`font-semibold text-lg`}>
          Cost:<Text style={tw`font-normal text-base`}> {cost.cost}</Text>{" "}
        </Text>
        <Text style={tw`font-semibold text-lg`}>
          Distance:{" "}
          <Text style={tw`font-normal text-base`}>
            {" "}
            {travelTimeInformation?.distance.text}
          </Text>{" "}
        </Text>
      </View>
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity style={tw`bg-black py-3 mb-3 `} onPress={showAlert}>
          <Text style={tw`text-center text-white text-xl`}>Order Ride</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PurchaseCard;
