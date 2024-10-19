import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

import { Href, Link } from "expo-router";
export type menuItem = {
  id: string;
  name: string;
  about: string;
  link: Href;
  icon: ReactNode;
};

export default function ItemCard(props: menuItem) {
  return (
    <Link href={props.link} asChild>
      <TouchableOpacity className="p-2">
        <View className="rounded-2xl p-3 bg-slate-800">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-3xl text-slate-200 mb-1">{props.name}</Text>
            {props.icon}
          </View>

          <Text className="text-md text-slate-300">{props.about}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
