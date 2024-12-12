import { View, Text, StatusBar, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Button } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const backgroundImage = require("../assets/images/blujacket Background Removed.png");

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-[#02196F]">
      <Text
        style={{ fontFamily: "Modak" }}
        className="text-[#3666AB] text-[12rem] leading-tight absolute top-20 right-10 Tantor"
      >
        Puff
      </Text>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        className="flex-1 "
      >
        <View className="flex flex-col justify-between w-screen h-full">
          <View className="flex flex-col items-start justify-start px-4">
            <Text
              style={{ fontFamily: "Modak" }}
              className="flex text-[#b4caea] mix-blend-multiply text-[2.5rem] Tantor text-right absolute top-40 right-5 font-bold"
            >
              Jackets
            </Text>
          </View>

          <View className="flex items-start justify-start gap-9 px-5 ">
            <View className="flex flex-col items-start justify-start gap-4">
              <Text className="text-white text-[1.5rem] Tantor font-bold">
                Elevate your style
              </Text>
              <Text className="text-white text-[1.2rem] Tantor leading-relaxed font-light">
                Discover innovative,padded leather jacketsfor ultimate comfort
                and style
              </Text>
            </View>
            <View className="w-full">
              <Link href="/home" asChild>
                <TouchableOpacity className="text-white bg-[#3666AB] rounded-full text-[1.5rem]  Tantor w-full">
                  <Text className="text-center text-[#ccdcf4] text-[1.5rem] Tantor font-bold py-7">
                    Quick Shop Access
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
