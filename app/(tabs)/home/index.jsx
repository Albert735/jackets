import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import list from "../../../assets/Mock/products";

export default function Home() {
  const router = useRouter();

  // Header component for FlatList
  const renderHeader = () => (
    <View className="flex flex-col justify-start w-screen  px-3 pt-2 gap-5">
      {/* //Browse Collection */}
      <View className="flex flex-row items-center justify-between">
        <View>
          <Link href="/home/details/AllCollections">
            <Text className="text-white text-[1.5rem] Tantor font-bold">
              Browse Collection
            </Text>
          </Link>
        </View>
        <Link href="/favorite">
          <View className="flex flex-row items-center justify-center bg-white/30 rounded-full p-3 opacity-80 bg blur-lg">
            <Octicons name="heart" size={20} color={"#ffffff"} />
          </View>
        </Link>
      </View>
      {/* //Browse Card */}
      <Link href="/home/details/AllCollections">
        <LinearGradient
          colors={["#bbde82", "#7e9b53"]}
          start={{ x: 1, y: 1.5 }}
          end={{ x: 0, y: 0 }}
          style={{ borderRadius: 20 }}
        >
          <View className="flex flex-row items-center justify-between w-full h-[16rem] rounded-[1.8rem] pl-4">
            <View>
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
                className="w-[14rem] h-[16rem]"
                resizeMode="cover"
              />
            </View>
          </View>
        </LinearGradient>
      </Link>
      <View className="flex flex-col gap-3">
        {/* list View */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-[1.5rem] Tantor font-bold">
            Popular
          </Text>

          <Link href="/home/details/AllProducts">
            <Text className="text-white text-[1.2rem] Tantor leading-relaxed font-normal text-justify">
              Show All
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 h-full text-white bg-[#000000] pt-16 ">
      <FlatList
        data={list}
        numColumns={2}
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        contentContainerStyle={styles.contentContainer} // Styles for list items
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Link href={`home/details/${item.id}`}>
              <Image
                source={item.image}
                style={styles.image}
                onError={() => console.log("Image failed to load")}
              />
            </Link>

            <Octicons
              name="heart"
              size={20}
              color={"#ffffff"}
              className="absolute top-2 right-2 bg-white/30 rounded-full p-3 opacity-80 bg blur-lg"
            />

            <View className="flex flex-col gap-2 p-2">
              <Text className="text-white text-[1.2rem] font-bold leading-relaxed Tantor">
                {item.name}
              </Text>
              <Text className="text-white text-[0.9rem] font-semibold Tantor">
                {item.description}
              </Text>
              <Text
                style={{ fontFamily: "Modak" }}
                className="text-[#bbde82] text-[1.5rem] Tantor"
              >
                ${item.price}
              </Text>
            </View>
          </View>
        )}
        ListHeaderComponent={renderHeader} // Use the header component
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: 20,
    marginBottom: 90,
    paddingBottom: 90,
  },
  itemContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 10,
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
