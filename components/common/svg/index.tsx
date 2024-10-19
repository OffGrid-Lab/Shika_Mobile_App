import { View, Text } from "react-native";
import React from "react";
import LucideShell from "./LucideShell";
import Usdc from "./Usdc";
import ShikaLogo from "./ShikaLogo";
export type SvgIcons = "LucideShell" | "Usdc" | "ShikaLogo";
export interface Props {
  name?: SvgIcons;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}
export default function Svg(props: Props) {
  let width = props.width;
  let height = props.height;
  if (props.size != null) {
    width = props.size;
    height = props.size;
  }
  //console.log(props);
  switch (props.name) {
    case "ShikaLogo":
      return <ShikaLogo width={width} height={height} color={props.color} />;
    case "LucideShell":
      return <LucideShell width={width} height={height} color={props.color} />;
    case "Usdc":
      return <Usdc width={width} height={height} color={props.color} />;
    default:
      return (
        <View>
          <Text>Svg</Text>
        </View>
      );
  }
  return <></>;
}
