import { Pressable, Text, View } from "react-native";
import { shika } from "@/shikawallet/shika";
import { selectDemo, setDemo } from "@/shikawallet/redux/features/demo";
import Logo from "@/components/common/Logo";
import BtnLink from "@/components/common/BtnLink";
import LandingImg from "@/components/common/LandingImg";
import Button, { getBtnClass } from "@/components/ui/Button";

export default function Index() {
  const router = shika.useRouter();
  shika.useRedux().dispatch(setDemo("mb"));
  const demo = shika.useSelect()(selectDemo);
  console.log(demo);
  const btnNextClass = getBtnClass({
    size: "xl",
    rounded: "full",
    variant: "outline",
    width: "full",
    color: "",
    gap: "mb-2 mt-3",
    children: undefined,
  });

  function onPressGetStarted() {
    console.log("getstarted");
    //check sqlite db if the use already setup an accound with pin code auth to access
    //if yes : go to auth page
    //else: go to login page with otp
    router.replace("/otp");
  }

  return (
    <View className="flex flex-col items-center justify-center p-5 h-screen w-full bg-shika-yellow">
      <Logo />
      <LandingImg />

      <Text className="text-3xl flex-wrap font-semibold p-3 text-center">
        Save Together, Grow Stronger.
      </Text>

      <Pressable
        onPress={onPressGetStarted}
        style={{
          borderRadius: btnNextClass.borderRadius,
        }}
        className={btnNextClass.value}
        android_ripple={{ color: "lightgray" }}
      >
        <Text className="text-xl text-slate-900">Get Started</Text>
      </Pressable>
    </View>
  );
}
