import { TextInput, View, Text, InputModeOptions } from "react-native";

interface Props {
    label: string;
    value?: string;
    placeholder: string;
    onChange?: any;

}
export default function InputPassword(props: Props) {

    return (

        <View className="flex flex-col items-start w-full mt-2">
            <Text className="text-xl text-slate-700 font-semibold mb-1">{props.label}</Text>
            <View className="flex w-full border rounded border-slate-300 shadow-sm p-1">
                <TextInput
                    onChangeText={props.onChange}
                    value={props.value}
                    className="text-lg text-slate-700 font-normal p-2"
                    placeholder={props.placeholder}
                    textContentType="password"

                />

            </View>
            <Text className="text-sm text-slate-700 font-normal mb-1">
                Password should be made up of alphabets and numbers of 8 characters (Acceptable :)
            </Text>
        </View>








    )
}