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
      <View className="flex flex-col items-center justify-center  rounded-t-[4.5rem] absolute bottom-0 w-screen h-[25rem]  bg-white p-3   blur-lg">
        <Text
          style={{ fontFamily: "Modak" }}
          className="text-black text-[2rem]  font-bold "
        >
          {item.name}
        </Text>
        <Text className="text-black text-[0.9rem] Tantor font-bold">
          {item.description}
        </Text>
        <Text
          style={{ fontFamily: "Modak" }}
          className="text-black text-[2.5rem] Tantor font-bold"
        >
          ${item.price}
        </Text>
      </View>
    </View>
  );
}
