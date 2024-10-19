import { View, Text } from "react-native";
import React from "react";
import TxIcon from "./TxIcon";
interface Props {
  txType: "received" | "sent";
  date: string;
  value: string;
}
export default function TxCard(props: Props) {
  function getValue() {
    switch (props.txType) {
      case "received":
        return "+" + props.value;
      case "sent":
        return "-" + props.value;
      default:
        break;
    }
  }
  function capitalizeFirstLetter(value: string) {
    if (value) return value.charAt(0).toUpperCase() + value.slice(1);
    return "";
  }
  return (
    <View className="bg-gray-700 rounded-2xl p-5 h-20 my-1">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center justify-center">
          <TxIcon icon={props.txType} />
          <View className="flex flex-col mx-5">
            <Text className="text-slate-50 font-semibold text-lg">
              {capitalizeFirstLetter(props.txType)}
            </Text>
            <Text className="text-slate-400">{props.date}</Text>
          </View>
        </View>

        <Text className="text-slate-100 font-semibold text-lg">
          {getValue()} USDC
        </Text>
      </View>
    </View>
  );
}
