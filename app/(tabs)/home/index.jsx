import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-400">
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
