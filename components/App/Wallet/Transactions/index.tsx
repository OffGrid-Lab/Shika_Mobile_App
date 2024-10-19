import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import TxCard from "./Card";

const transactions: any[] = [
  {
    id: 0,
    txType: "sent",
    value: "10",
  },
  {
    id: 1,
    txType: "received",
    value: "6.8",
  },
  {
    id: 2,
    txType: "sent",
    value: "9.30",
  },
  {
    id: 3,
    txType: "sent",
    value: "6.36",
  },
  {
    id: 4,
    txType: "received",
    value: "5.36",
  },
];
export default function Transactions() {
  return (
    <View className="flex flex-col px-2 py-2">
      <Text className="text-3xl font-bold text-slate-200 px-5">
        Transactions
      </Text>
      <Animated.View
        className="p-3"
        entering={FadeInDown.duration(500).springify().delay(200)}
      >
        {transactions.map((item) => (
          <TxCard
            key={item.id}
            txType={item.txType}
            date={"date-here"}
            value={item.value}
          />
        ))}
      </Animated.View>
    </View>
  );
}
