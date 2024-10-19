import { View, Text, ScrollView } from "react-native";
import React from "react";
import BalanceCard from "./BalanceCard";
import Transactions from "./Transactions";

export default function Wallet() {
  return (
    <View className="flex-1 h-screen bg-gray-900">
      <BalanceCard />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Transactions />
      </ScrollView>
    </View>
  );
}
