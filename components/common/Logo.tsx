import { View } from 'react-native'
import React from 'react'
import Svg from './svg'

export default function Logo() {
    return (
        <View className="mx-auto justify-center items-center">
            <Svg name='ShikaLogo' width={220} height={70} />
        </View>
    )
}

