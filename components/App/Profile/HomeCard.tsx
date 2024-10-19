import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import KycBadge from "@/components/common/KycBadge";
import Avatar from "@/components/ui/Avatar";

export default function ProfileHomeCard() {
  return (
    <View className="flex flex-row items-center justify-start">
      <Link href={"/profile"} asChild>
        <Pressable android_ripple={{ color: "lightgrey" }}>
          <Avatar
            name="Satoshi Nakamoto"
            size={60}
            source="https://github.com/MegaBytee.png"
          />
        </Pressable>
      </Link>

      <View className="flex flex-col items-start px-2">
        <View className=" flex flex-row items-center">
          <Text className="text-lg font-semibold text-slate-100 px-1">
            Satoshi
          </Text>
          <KycBadge isVerified={false} />
        </View>
        <Text className="text-lg font-semibold text-slate-200">
          +212631986086
        </Text>
      </View>
    </View>
  );
}
