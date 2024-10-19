import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function AlreadyHaveAccount() {
  return (
    <View className="flex flex-row items-center justify-center w-full p-1 mt-5">
      <Text className="text-slate-200 text-center text-lg p-2">
        Already have an account?
      </Text>
      <Link href={"/otp"} className="text-xl font-semibold text-shika-yellow">
        Login
      </Link>
    </View>
  );
}
