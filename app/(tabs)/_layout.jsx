import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarLabel: "Cart",
          headerTitle: "Cart",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorite/index"
        options={{
          tabBarLabel: "Favorite",
          headerTitle: "Favorite",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarLabel: "Search",
          headerTitle: "Search",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}