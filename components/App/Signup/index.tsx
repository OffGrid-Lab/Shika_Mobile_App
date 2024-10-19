import Input from "@/components/common/Input";
import InputPassword from "@/components/common/InputPassword";
import InputPhone from "@/components/common/InputPhone";
import ShikaIcon from "@/components/common/ShikaIcon";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import CreateAccount from "./createAccount";
import AlreadyHaveAccount from "./alreadyHaveAccount";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [firstname, onChangeFName] = useState("");
  const [countryCode, setCountryCode] = useState("+212");

  return (
    <View className="flex-1 h-screen bg-gray-900">
      <ScrollView>
        <View className="flex flex-col items-center justify-center p-1 mt-9">
          <ShikaIcon />
          <Text className="text-3xl font-bold text-center p-2 text-slate-100">
            Save Together, Grow Stronger.
          </Text>
        </View>
        <View className="flex flex-col w-full px-5 py-3">
          <Input
            label={"First Name"}
            mode={"text"}
            placeholder={"e.g Nakamoto"}
            value={firstname}
            onChange={onChangeFName}
          />
          <Input
            label={"Last Name"}
            mode={"text"}
            placeholder={"e.g Satoshi"}
          />
          <Input
            label={"Email (Optional)"}
            mode={"text"}
            placeholder={"e.g email@example.com"}
          />
          <InputPhone label={"Phone Number"} placeholder={"e.g 060000000"} />

          <CreateAccount />
          <AlreadyHaveAccount />
        </View>
      </ScrollView>
    </View>
  );
}
