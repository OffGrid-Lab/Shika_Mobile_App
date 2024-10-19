import { View, Text, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { shika } from "@/shikawallet/shika";
import {
  selectOTPcode,
  setOTPcode,
} from "@/shikawallet/redux/features/oneTimeCode";
interface Params {
  index: number; //from 1 to n
}

function InputCodeItem(params: Params) {
  const dispatch = shika.useRedux().dispatch;
  function onInputChange(value: string) {
    // Allow only a single digit
    if (value.length === 1) {
      console.log(value);

      dispatch(
        setOTPcode({
          index: params.index,
          value: value,
        })
      );
    }
  }
  return (
    <View className="h-14 w-14 border-2 rounded-md border-slate-200 shadow-sm bg-slate-300 items-center justify-center mx-2">
      <TextInput
        onChangeText={onInputChange}
        className="text-2xl font-bold text-slate-800 text-center  h-14 w-14 rounded-md "
        inputMode="numeric"
        textContentType="oneTimeCode"
        placeholder={"-"}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
}

export default function InputCode() {
  return (
    <View className="flex flex-col items-center justify-center p-1 my-2">
      <View className="flex flex-row ">
        <InputCodeItem index={1} />
        <InputCodeItem index={2} />
        <InputCodeItem index={3} />
        <InputCodeItem index={4} />
      </View>
    </View>
  );
}
