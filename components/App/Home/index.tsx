import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import BalanceCard from "../Wallet/BalanceCard";
import Menu from "./Menu";

import Footer from "./Footer";

export default function Home() {
  return (
    <View className="flex-1 h-screen bg-gray-900">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />
        <Menu />
        <Footer />
      </ScrollView>
    </View>
  );
}
