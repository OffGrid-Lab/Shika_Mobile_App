import { View, Text } from "react-native";
import React from "react";
import Svg from "@/components/common/svg";
import { MaterialIcons } from "@expo/vector-icons";
interface Props {
  icon: "received" | "sent";
}
export default function TxIcon(props: Props) {
  function getIcon() {
    if (props.icon === "sent")
      return <MaterialIcons name="call-made" size={17} color="white" />;
    if (props.icon === "received")
      return <MaterialIcons name="call-received" size={17} color="white" />;
  }

  return (
    <View className="flex flex-row items-end">
      <Svg name="Usdc" size={50} />
      <View className="items-center justify-center rounded-full w-6 h-6 bg-gray-700 -mx-4 -my-1">
        {getIcon()}
      </View>
    </View>
  );
}
