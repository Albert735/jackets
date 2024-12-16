import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import list from "../../../../assets/Mock/products";

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
      <View className="flex flex-col items-center justify-start gap-5  rounded-t-[4.5rem] absolute bottom-0 w-screen h-[25rem]  bg-black/40 opacity-80 p-3 blur-xl">
        <View className="flex flex-col items-center justify-center gap-2">
          <Text
            style={{ fontFamily: "Modak" }}
            className="text-white text-[2rem]  font-bold "
          >
            {item.name}
          </Text>
          <Text className="text-white text-[0.9rem] Tantor font-bold">
            {item.description}
          </Text>
          <Text
            style={{ fontFamily: "Modak" }}
            className="text-white text-[2.5rem] Tantor font-bold"
          >
            ${item.price}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-center w-[80%] gap-5 ">
          <Text className="text-black text-[1.2rem] font-bold bg-white/30 rounded-full p-5 w-[4rem] h-[4rem] text-center">
            XS
          </Text>
          <Text className="text-black text-[1.2rem] font-bold bg-white/30 rounded-full p-5 w-[4rem] h-[4rem] text-center">
            S
          </Text>
          <Text className="text-black text-[1.2rem] font-bold bg-white/30 rounded-full p-5 w-[4rem] h-[4rem] text-center">
            M
          </Text>
          <Text className="text-black text-[1.2rem] font-bold bg-white/30 rounded-full p-5 w-[4rem] h-[4rem] text-center">
            L
          </Text>
        </View>
      </View>
    </View>
  );
}
