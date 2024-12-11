import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "index" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false  }} />
    </Stack>
  );
}
