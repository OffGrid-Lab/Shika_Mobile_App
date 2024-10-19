import { View, Text, Pressable } from "react-native";
import React from "react";
import { getBtnClass } from "@/components/ui/Button";
import {
  selectCountryCode,
  selectPhoneNumber,
  selectOTPcode,
} from "@/shikawallet/redux/features/oneTimeCode";
import { shika } from "@/shikawallet/shika";

export default function VerifyButton() {
  const router = shika.useRouter();
  const countryCode = shika.useSelect()(selectCountryCode);
  const phoneNumber = shika.useSelect()(selectPhoneNumber);
  const otpCode = shika.useSelect()(selectOTPcode);
  const OptCodeVerified = true;
  const btnClass = getBtnClass({
    size: "xl",
    rounded: "full",
    variant: "solid",
    width: "full",
    color: "slate-300",
    gap: "mt-9",
    children: undefined,
  });

  function onPressVerify() {
    //verify the otp code from server data todo in redux
    console.log("otpCode=", otpCode);
    console.log("phone=", countryCode + phoneNumber);
    //the go to home page when verification is success

    //check if user have a registred account or not.
    //if new user go to account create > then kyc screen
    //if user already have an account on server go to dashboard
    if (OptCodeVerified) {
      router.replace("/dashboard");
    }
  }
  return (
    <View className="flex flex-col items-center justify-center p-2 mx-3 my-9">
      <Pressable
        onPress={onPressVerify}
        style={{
          borderRadius: btnClass.borderRadius,
        }}
        className={btnClass.value}
        android_ripple={{ color: "lightgrey" }}
      >
        <Text className="text-xl text-slate-700">Verify</Text>
      </Pressable>
    </View>
  );
}
