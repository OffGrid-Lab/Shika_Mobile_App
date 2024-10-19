import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BtnLink from "./BtnLink";
interface Props {
  isVerified: boolean;
}
export default function KycBadge(props: Props) {
  if (props.isVerified) {
    return <MaterialIcons name="verified" size={24} color="white" />;
  }
  return (
    <BtnLink
      value={"verify"}
      link={"/kyc"}
      txtClassName="text-xs text-black"
      btnClassName="items-center justify-center border-2 rounded w-10 h-7 bg-shika-yellow"
    />
  );
}
