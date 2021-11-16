import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: (
      <Icon
        type="font-awesome"
        color="black"
        name="car"
        size={46}
        style={tw`my-2 pt-2`}
      />
    ),
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: (
      <Icon
        type="font-awesome"
        color="black"
        name="cutlery"
        size={46}
        style={tw`my-2 pt-2`}
      />
    ),
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pt-6 pb-8 pt-4 bg-gray-300 rounded-xl m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View>
            <View style={styles.image}>{item.image}</View>
            <Text style={tw`mt-2 text-lg text-center font-semibold`}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
