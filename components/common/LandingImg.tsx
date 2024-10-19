import { View, Image } from "react-native";
import React from 'react'


export default function LandingImg() {
    return (
        <View className="p-2 w-full justify-center items-center">
            <Image
                source={require("@/assets/shika/landing2.png")}
                style={{
                    width: 350,
                    height: 350,
                }}
            />
        </View>
    )
}

