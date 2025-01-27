import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function _layout() {
  const [loaded] = useFonts({
    Tantor: require("../assets/fonts/Tantor.ttf"),
    Modak: require("../assets/fonts/Modak-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "index" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="[id]" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
