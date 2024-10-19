import { View, Text } from "react-native";
import React from "react";
import ShikaIcon from "@/components/common/ShikaIcon";

import { shika } from "@/shikawallet/shika";

export default function Footer() {
  return (
    <View className="flex flex-col p-3 items-center justify-center bg-gray-800">
      <ShikaIcon />
      <View className="flex flex-row p-1 items-center">
        <Text className="text-slate-200"> {shika.version}</Text>
      </View>
    </View>
  );
}
