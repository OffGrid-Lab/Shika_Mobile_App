import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";

//check input information and validate it
//then create slice state in redux
//go phone verification
export default function CreateAccount() {
  return (
    <View className="flex flex-col items-center w-full p-1 mt-3">
      <Pressable
        className="items-center justify-center border-2 border-slate-400 rounded-full px-7 h-12 w-full bg-gray-800"
        android_ripple={{ color: "lightgrey" }}
      >
        <Text className="text-xl text-slate-100">Create Account </Text>
      </Pressable>
      <Text className="text-slate-200 text-center text-base p-2">
        By creating an account, you agree to our
      </Text>

      <View className="flex flex-row w-full items-center justify-center">
        <Link href={"/"} className="text-lg text-shika-yellow">
          Terms of use
        </Link>
        <Text className="text-slate-200 text-lg"> and </Text>
        <Link href={"/"} className="text-lg text-shika-yellow">
          {" "}
          Privacy policy
        </Link>
      </View>
    </View>
  );
}
