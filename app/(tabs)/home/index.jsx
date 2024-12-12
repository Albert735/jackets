import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
// import { useFonts } from "expo-font";

export default function Home() {
  //   const [loaded] = useFonts({
  //     Tantor: require("../../../assets/fonts/Tantor.ttf"),
  //     Modak: require("../../../assets/fonts/Modak-Regular.ttf"),
  //   });
  //   if (!loaded) {
  //     return null;
  //   }

  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
      <View className="flex flex-col justify-start w-screen h-full px-3 pt-2 gap-5">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text
              //   style={{ fontFamily: "Tantor" }}
              className="text-white text-[1.5rem] Tantor font-bold"
            >
              Browse Collection
            </Text>
          </View>
          <View className="flex flex-row items-center justify-center">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="28" // Set width and height for the SVG
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="white"
              className="size-6"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </Svg>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between bg-[#7e9b53] w-full h-[16rem] rounded-2xl pl-4">
          <View className="">
            <Text
              style={{ fontFamily: "Modak" }}
              className="text-[#bbde82] text-[3rem] Tantor"
            >
              Weekend
            </Text>
            <Text
              style={{ fontFamily: "Modak" }}
              className="text-[#bbde82] text-[3rem] Tantor"
            >
              Vibes
            </Text>
          </View>
          <View className="h-[16rem] w-full">
            <Image
              source={require("../../../assets/images/Digital Fashion Background Removed.png")}
              className="w-[14rem] h-[16rem] "
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
