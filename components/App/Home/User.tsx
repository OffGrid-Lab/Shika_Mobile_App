import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated'
import BtnLink from '@/components/common/BtnLink'
import KycBadge from '@/components/common/KycBadge'

export default function UserCard() {
    return (
        <Animated.View
            className="mt-1"
            entering={FadeInLeft.duration(500).springify().delay(200)}
        >
            <View className="flex flex-col min-h-20 p-3 rounded shadow bg-slate-800">
                <View className="flex flex-row p-1 justify-start items-center">
                    <View className="rounded-full bg-slate-300">
                        <Image
                            className="rounded-full"
                            source={require("@/assets/img/user.png")}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </View>
                    <View className="flex flex-col items-start justify-start ml-2 p-2">
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-xl text-slate-100 font-semibold mr-1">Satoshi Nakamoto</Text>
                            <KycBadge isVerified={true} />
                        </View>

                        <Text className="text-lg text-slate-100 font-semibold">@Satoshi</Text>
                        <Text className="text-md text-slate-100 font-semibold">+212631986086</Text>
                        <Text className="text-xs text-slate-300 font-semibold">Joined Aug 14, 2024</Text>
                    </View>

                </View>
                <BtnLink value="Edit Profile" link={"/login"} txtClassName="text-xl text-white" btnClassName="items-center justify-center border-2 border-slate-100 rounded-sm w-full h-10 mb-2" />


            </View>


        </Animated.View>

    )
}