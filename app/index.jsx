import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-400">
      <View>
        <Text>index</Text>
        <Link href="/favorite" asChild>
          <Button title="Press me" />
        </Link>
      </View>
    </SafeAreaView>
  );
}
