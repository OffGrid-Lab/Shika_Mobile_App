import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Href, Link } from "expo-router";
interface Props {
    value: string;
    link: Href;
    txtClassName?: string;
    btnClassName?: string;
}
export default function BtnLink(props: Props) {
    return (
        <Link href={props.link} asChild>
            <Pressable className={props.btnClassName} android_ripple={{ color: 'lightgrey' }}>
                <Text className={props.txtClassName}>{props.value}</Text>
            </Pressable>
        </Link >
    )
}