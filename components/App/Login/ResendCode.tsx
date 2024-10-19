import { View, Text, Pressable } from "react-native";
import React from "react";
import { getBtnClass } from "@/components/ui/Button";

export default function ResendCode() {
  const btnClass = getBtnClass({
    size: "xl",
    rounded: "none",
    variant: "link",
    color: "",
    gap: "",
    children: undefined,
  });

  function onPressResendCode() {
    console.log("resend request");
  }
  return (
    <View className="flex flex-col items-center justify-center p-1">
      <Text className="text-slate-200 text-lg">Didn't get OTP Code ?</Text>
      <Pressable
        onPress={onPressResendCode}
        style={{
          borderRadius: btnClass.borderRadius,
        }}
        className={btnClass.value}
        android_ripple={{ color: "lightgrey" }}
      >
        <Text className="text-xl text-shika-yellow">Resend Code</Text>
      </Pressable>
    </View>
  );
}
