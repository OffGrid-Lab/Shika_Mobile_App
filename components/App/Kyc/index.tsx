"use client";

import { shika } from "@/shikawallet/shika";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { WebView } from "react-native-webview";
import { View, Text } from "react-native";

//todo webview access to url
export default function Kyc() {
  const [hasPermission, setHasPermission] = useState(false);

  //user-id from your backend to identify the user
  const link = shika.sumsubApi("user-id-here", "en").GetKYCLink();
  console.log(link);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return (
      <View className="flex flex-col p-5">
        <Text>No access to camera</Text>
      </View>
    );
  }
  if (hasPermission) {
    return (
      <WebView
        className="flex-1"
        useWebKit
        bounces={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={["*"]}
        source={{ uri: link }}
      />
    );
  }
}
