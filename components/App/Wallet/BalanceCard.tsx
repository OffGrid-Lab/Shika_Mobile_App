import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

import Svg from "@/components/common/svg";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import Button from "@/components/ui/Button";
import { Link } from "expo-router";

export default function BalanceCard() {
  return (
    <View className="bg-shika-yellow rounded-3xl p-5 mx-3 my-1">
      <ImageBackground
        source={require("@/assets/shika/dots.png")}
        resizeMode="cover"
      >
        <Link href={"/wallet"} asChild>
          <TouchableOpacity>
            <View className="flex flex-row p-1 items-center justify-start">
              <Svg name="Usdc" size={37} />
              <Text className="text-4xl px-1 font-black">13,369.00</Text>
            </View>

            <View className="flex flex-row p-1 items-center">
              <Text className="text-lg font-semibold text-slate-700 px-1">
                Wallet (USDC)
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
        <View className="flex flex-row justify-between items-center p-2">
          <Button
            class="w-1/2 gap-1"
            variant={"solid"}
            link={"/wallet/deposit"}
            rounded="md"
            size={"2xl"}
            color="gray-800"
            children={
              <View className="flex flex-row items-center">
                <MaterialIcons name="call-received" size={24} color="white" />
                <Text className="text-lg font-semibold text-slate-100 px-1">
                  Deposit
                </Text>
              </View>
            }
          />
          <Button
            class="w-1/2 gap-1"
            variant={"solid"}
            link={"/wallet/send"}
            rounded="md"
            size={"2xl"}
            color="gray-800"
            children={
              <View className="flex flex-row items-center">
                <MaterialIcons name="call-made" size={24} color="white" />
                <Text className="text-lg font-semibold text-slate-100 px-1">
                  Send
                </Text>
              </View>
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}
