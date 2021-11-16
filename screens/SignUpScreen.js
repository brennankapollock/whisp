import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect, useMemo, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmail,
  selectName,
  selectPassword,
  setEmail,
  setName,
  setPassword,
} from "../slices/userSlice";

const SignUpScreen = () => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [inputPassword, setInputPassword] = useState("");
  const [inputName, setInputName] = useState("");

  const name = useSelector(selectName);
  // const email = useSelector(selectEmail);
  // const password = useSelector(selectPassword);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch(setName({ name: inputName }));
    // dispatch(setEmail({ email: inputEmail }));
    // dispatch(setPassword({ password: inputPassword }));
    navigation.navigate("HomeScreen");

    console.log(name);
  };

  return (
    <SafeAreaView style={tw`h-full flex justify-center  `}>
      <View style={tw`p-5`}>
        <Image
          style={{
            height: 150,
            width: 150,
            resizeMode: "contain",
            marginLeft: 102,
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <Text style={tw`text-center font-semibold -mt-6  text-lg`}>
          What's Your Name?
        </Text>
        <TextInput
          style={tw` h-11 my-4 p-2 bg-gray-300 font-semibold text-center`}
          placeholder="enter your name for some personalization!"
          onChangeText={(inputName) => setInputName(inputName)}
          value={inputName}
        />
        {/* <TextInput
          style={tw` h-11 my-4 p-2 border-black border-2 `}
          placeholder="email"
          onChangeText={(email) => setInputEmail(email)}
          value={inputEmail}
        />
        <TextInput
          style={tw` h-11 my-4 p-2 border-black border-2  `}
          placeholder="password"
          onChangeText={(password) => setInputPassword(password)}
          value={inputPassword}
          secureTextEntry={true}
        /> */}
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly  border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black justify-center items-center w-32 h-14 px-4  rounded-full`}
          onPress={onSignUp}
        >
          <Text style={tw`text-white text-center font-semibold`}>
            Let's Go!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
