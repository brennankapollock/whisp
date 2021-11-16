import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { Icon } from "react-native-elements/dist/icons/Icon";
import NavFavorites from "../components/NavFavorites";
import {
  selectEmail,
  selectName,
  selectPassword,
  setEmail,
  setName,
  setPassword,
} from "../slices/userSlice";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const name = useSelector(selectName);
  console.log(name);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View style={tw``}>
          <TouchableOpacity
            style={tw`absolute top-6 right-2 z-50 bg-black p-3 rounded-full shadow-lg`}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Icon name="menu" color="white" />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
            }}
          />
        </View>
        <Animated.Text
          style={tw`text-center mb-4 -mt-3 font-semibold text-2xl `}
        >
          Hello {name.name}!
        </Animated.Text>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "#DDDDDF",
            },
          }}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder={`Where from?`}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  greeting: {
    height: 100,
    width: 100,
  },
});
