import { StoreProvider } from "@/shikawallet/redux/StoreProvider";
import { shika } from "@/shikawallet/shika";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { screens } from "./_screens";

export default function RootLayout() {
  return (
    <StoreProvider>
      <SafeAreaView className="flex-1 ">
        <Stack
          screenOptions={{
            headerShadowVisible: false,

            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            statusBarStyle: "light",
            statusBarColor: "#000",
          }}
        >
          {screens.map((item) => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              options={{
                title: item.title,
                headerShown: item.headerShow,
              }}
            />
          ))}

          <Stack.Screen
            name="+not-found"
            options={{
              title: shika.name,
            }}
          />
        </Stack>
      </SafeAreaView>
    </StoreProvider>
  );
}
