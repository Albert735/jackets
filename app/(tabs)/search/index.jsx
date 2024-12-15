import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
      <View className="flex-1 bg-[#000000] p-4">
        <TextInput
          accessibilityLabel="Search Input"
          accessibilityHint="Enter your search query here"
          placeholder="Search for your Jackets"
          placeholderTextColor="#ffffff80" // Subtle placeholder color
          className="text-white bg-white/20 opacity-50 bg-blur-xl rounded-full py-5 px-5 shadow-lg  mb-4"
        />
      </View>
    </SafeAreaView>
  );
}
