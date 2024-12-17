import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
// import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AllCollections() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#000000] text-white px-2 gap-5 pt-20">
      <View className="flex flex-col justify-start w-screen  px-3  gap-5">
        <View className="flex flex-row items-center justify-between px-2">
          <View className="flex flex-row items-center justify-center">
            <Octicons
              name="arrow-left"
              size={26}
              color={"#ffffff"}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View>
            <Link href="/home/details/AllCollections">
              <Text className="text-white text-[1.5rem] Tantor font-bold">
                All Collection
              </Text>
            </Link>
          </View>
        </View>
        {/* //Browse Card */}
        <LinearGradient
          colors={["#bbde82", "#7e9b53"]}
          start={{ x: 1, y: 1.5 }}
          end={{ x: 0, y: 0 }}
          style={{ borderRadius: 20 }}
        >
          <View className="flex flex-row items-center justify-between w-full h-[14rem] rounded-[1.8rem] pl-4">
            <View>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#bbde82] text-[2.5rem] Tantor"
              >
                Weekend
              </Text>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#bbde82] text-[2.5rem] Tantor"
              >
                Vibes
              </Text>
            </View>
            <View className="h-[16rem]">
              <Image
                source={require("../../../../assets/images/Digital Fashion Background Removed.png")}
                className="w-[14rem] h-[15rem]"
                resizeMode="cover"
              />
            </View>
          </View>
        </LinearGradient>

        {/* urban collection  */}
        <LinearGradient
          colors={["#2BC0E4", "#3d72b4"]}
          start={{ x: 1, y: 1.5 }}
          end={{ x: 0, y: 0 }}
          style={{ borderRadius: 20 }}
        >
          <View className="flex flex-row items-center justify-between w-full h-[14rem] rounded-[1.8rem] pr-4">
            <View className="h-[16rem] ">
              <Image
                source={require("../../../../assets/images/urban3.png")}
                style={Style.image}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#b1eaf8] text-[2.5rem] Tantor"
              >
                Urban
              </Text>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#b1eaf8] text-[2.5rem] Tantor"
              >
                Collection
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* summer collection  */}
        <LinearGradient
          colors={["#FF512F", "#F09819"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1.5 }}
          style={{ borderRadius: 20 }}
        >
          <View className="flex flex-row items-center justify-between w-full h-[14rem] rounded-[1.8rem] pl-4">
            <View>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#ffc375] text-[2.5rem] Tantor"
              >
                Summer
              </Text>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#ffc375] text-[2.5rem] Tantor"
              >
                Collection
              </Text>
            </View>
            <View className="h-[16rem]">
              <Image
                style={Style.image}
                source={require("../../../../assets/images/orangepuff1.png")}
                // resizeMode="cover"
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  image: {
    width: 170,
    height: 210,
    resizeMode: "contain",
  },
});
