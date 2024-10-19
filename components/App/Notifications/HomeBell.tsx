import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, { BounceIn, FadeInDown } from "react-native-reanimated";

export default function HomeBellRing() {
  let isNotifed = false;
  const defaultColor = "bg-slate-700";
  const isNotifiedColor = "bg-shika-red";

  function getNotifedColor() {
    if (isNotifed) return isNotifiedColor;
    return defaultColor;
  }
  function isNotifedAnimatedView() {
    if (isNotifed) {
      return (
        <Animated.View entering={BounceIn.duration(500).springify().delay(200)}>
          <Ionicons name="notifications" size={25} color="white" />
        </Animated.View>
      );
    }
    return <Ionicons name="notifications" size={25} color="white" />;
  }

  return (
    <Link href="/notifications" asChild>
      <TouchableOpacity className="p-1 ">
        <View
          className={
            "flex rounded-full w-11 h-11 justify-center items-center " +
            getNotifedColor()
          }
        >
          {isNotifedAnimatedView()}
        </View>
      </TouchableOpacity>
    </Link>
  );
}
