import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function _layout() {
  const [loaded] = useFonts({
    Tantor: require("../assets/fonts/Tantor.ttf"),
    Modak: require("../assets/fonts/Modak-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "index" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="home/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
