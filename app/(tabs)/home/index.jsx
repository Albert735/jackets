import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import list from "../../../assets/Mock/products";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="flex flex-col justify-start w-screen h-full px-3 pt-2 gap-5">
          {/* //Browse Collection */}
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="text-white text-[1.5rem] Tantor font-bold">
                Browse Collection
              </Text>
            </View>
            <Link href="/favorite">
              <View className="flex flex-row items-center justify-center bg-white/30 rounded-full p-3 opacity-80 bg blur-lg">
                <Octicons name="heart" size={20} color={"#ffffff"} />
              </View>
            </Link>
          </View>
          {/* //Browse Card */}
          <LinearGradient
            colors={["#bbde82", "#7e9b53"]}
            start={{ x: 1, y: 1.5 }}
            end={{ x: 0, y: 0 }}
            style={{ borderRadius: 20 }}
            // className="flex flex-row items-center justify-between w-full h-[16rem] rounded-[1.8rem] pl-4"
          >
            <View className="flex flex-row items-center justify-between w-full h-[16rem] rounded-[1.8rem] pl-4">
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
          </LinearGradient>

          <View className="flex flex-col gap-3">
            {/* list V iew */}
            <View className="flex flex-row items-center justify-between">
              <Text className="text-white text-[1.5rem] Tantor font-bold">
                Popular
              </Text>
              <Text className="text-white text-[1.2rem] Tantor leading-relaxed font-normal text-justify">
                Show All
              </Text>
            </View>

            <FlatList
              data={list}
              numColumns={2}
              // vertical // Enables horizontal scrolling
              keyExtractor={(item, index) => index.toString()} // Unique key for each item
              contentContainerStyle={styles.contentContainer} // Styles for list items
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 20,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: " rgba(255, 255, 255, 0.3)",
    margin: 8,
    marginHorizontal: 15,
    borderRadius: 16,
  },
  image: {
    width: 170,
    height: 220,
    resizeMode: "cover",
    borderRadius: 16,
  },
});
