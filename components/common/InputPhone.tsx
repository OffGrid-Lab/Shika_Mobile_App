import {
  selectCountryCode,
  setCountryCode,
  setPhoneNumber,
} from "@/shikawallet/redux/features/oneTimeCode";
import { shika } from "@/shikawallet/shika";
import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  InputModeOptions,
  TouchableOpacity,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";

interface Props {
  label: string;
  placeholder: string;
}
export default function InputPhone(props: Props) {
  const dispatch = shika.useRedux().dispatch;
  const countryCode = shika.useSelect()(selectCountryCode);
  const [show, setShow] = useState(false);

  function onChangeInputPhone(value: string) {
    console.log("input phone change", value);
    dispatch(setPhoneNumber(value));
  }
  return (
    <View className="flex flex-col items-start">
      <Text className="text-xl text-slate-200 font-semibold py-2">
        {props.label}
      </Text>

      <View className="flex flex-row w-full border-2 rounded-md border-slate-200 shadow-sm bg-slate-300">
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text className="text-center items-center justify-center text-lg font-semibold text-slate-200 bg-slate-800 p-2">
            {countryCode}
          </Text>
        </TouchableOpacity>

        <TextInput
          onChangeText={onChangeInputPhone}
          className="text-lg text-slate-800 font-normal px-2"
          inputMode="numeric"
          textContentType="telephoneNumber"
          placeholder={props.placeholder}
          keyboardType="numeric"
        />
      </View>

      <CountryPicker
        style={{
          modal: {
            height: "50%",
          },
        }}
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          dispatch(setCountryCode(item.dial_code));
          setShow(false);
        }}
        lang={"en"}
      />
    </View>
  );
}
