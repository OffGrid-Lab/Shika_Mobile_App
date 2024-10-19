import { TextInput, View, Text, InputModeOptions } from "react-native";

interface Props {
  label: string;
  value?: string;
  mode: InputModeOptions;
  placeholder: string;
  onChange?: any;
}
export default function Input(props: Props) {
  return (
    <View className="flex flex-col items-start w-full mt-2">
      <Text className="text-xl text-slate-200 font-semibold mb-1">
        {props.label}
      </Text>
      <View className="flex w-full border rounded border-slate-200 bg-slate-300 shadow-sm p-1">
        <TextInput
          onChangeText={props.onChange}
          value={props.value}
          className="text-lg text-slate-800 font-normal p-2"
          inputMode={props.mode}
          placeholder={props.placeholder}
          textContentType="none"
        />
      </View>
    </View>
  );
}
