import InputPhone from "@/components/common/InputPhone";
import ShikaIcon from "@/components/common/ShikaIcon";
import Button, { getBtnClass } from "@/components/ui/Button";
import {
  selectCountryCode,
  selectOTPcode,
  selectPhoneNumber,
} from "@/shikawallet/redux/features/oneTimeCode";
import { shika } from "@/shikawallet/shika";

import { Pressable, ScrollView, Text, View } from "react-native";

export default function Login() {
  const countryCode = shika.useSelect()(selectCountryCode);
  const phoneNumber = shika.useSelect()(selectPhoneNumber);
  const router = shika.useRouter();

  const btnClass = getBtnClass({
    size: "xl",
    rounded: "full",
    variant: "solid",
    width: "full",
    color: "slate-300",
    gap: "mt-9",
    children: undefined,
  });

  function onPressNext() {
    console.log("check for correct phone number then go to verifcation page");
    //dispatch(setPhoneNumber("245465680000"));
    console.log(countryCode + phoneNumber);
    if (phoneNumber)
      //valid then go to verification page
      router.replace("/otp/verify");
  }
  return (
    <View className="flex-1 h-screen bg-gray-900">
      <ScrollView>
        <View className="flex flex-col items-center justify-center p-1 mt-9">
          <ShikaIcon />
          <Text className="text-3xl font-bold text-center p-2 text-slate-100">
            Hi! welcome back to Shika.
          </Text>
        </View>
        <View className="flex flex-col  px-5">
          <InputPhone
            label={"Enter your Phone Number"}
            placeholder={"e.g 060000000"}
          />

          <Pressable
            onPress={onPressNext}
            style={{
              borderRadius: btnClass.borderRadius,
            }}
            className={btnClass.value}
            android_ripple={{ color: "lightgrey" }}
          >
            <Text className="text-xl text-slate-700">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
