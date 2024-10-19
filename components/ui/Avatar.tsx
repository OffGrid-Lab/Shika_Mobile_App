import { View, Text, Image } from "react-native";
import React from "react";
import UserAvatar from "react-native-user-avatar";

interface Props {
  name: string;
  size: number;
  source?: string;
}
export default function Avatar(props: Props) {
  return (
    <View>
      <UserAvatar size={props.size} name={props.name} src={props.source} />
    </View>
  );
}
