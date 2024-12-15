import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import list from "../../../assets/Mock/products";

export default function DetailsPage() {
  const { id } = useLocalSearchParams();

  const item = list.find((item) => item.id == id);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View>
        <Image
          source={item.image}
          className="w-screen h-screen"
          resizeMode="cover"
        />
      </View>
      {/* <Text className="text-white text-[1.2rem] Tantor leading-relaxed font-normal text-justify">
        Product ID: {id}
      </Text> */}
    </View>
  );
}
