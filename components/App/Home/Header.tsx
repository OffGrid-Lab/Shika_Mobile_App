import { View, Text } from "react-native";
import React from "react";
import ProfileHomeCard from "../Profile/HomeCard";
import HomeBellRing from "../Notifications/HomeBell";

export default function Header() {
  return (
    <View className="flex flex-row justify-between items-center px-3 py-4">
      <ProfileHomeCard />
      <HomeBellRing />
    </View>
  );
}
