import { View, Text, ScrollView } from "react-native";
import React from "react";
import ShikaIcon from "@/components/common/ShikaIcon";
import InputCode from "./InputCode";
import ResendCode from "./ResendCode";
import VerifyButton from "./VerifyButton";
import { shika } from "@/shikawallet/shika";
import {
  selectCountryCode,
  selectOTPcode,
  selectPhoneNumber,
} from "@/shikawallet/redux/features/oneTimeCode";

export default function PhoneOTP() {
  const countryCode = shika.useSelect()(selectCountryCode);
  const phoneNumber = shika.useSelect()(selectPhoneNumber);
  const otpCode = shika.useSelect()(selectOTPcode);

  return (
    <View className="flex flex-col justify-between h-screen  bg-gray-800">
      <View className="flex flex-col items-center justify-center p-1 mt-9">
        <ShikaIcon />
        <Text className="text-2xl font-bold text-center p-2 text-slate-200">
          Verify Phone
        </Text>
        <Text className="text-xl font-semibold text-center p-2 text-slate-100">
          Code has been sent to {countryCode + phoneNumber}
        </Text>
      </View>

      <InputCode />
      <ResendCode />
      <VerifyButton />
    </View>
  );
}
