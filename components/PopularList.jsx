import { View, Text, StyleSheet } from "react-native";
import React from "react";
import list from "../assets/Mock/products";
import { Link } from "expo-router";
import { FlatList, Image } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function PopularList() {

  return (
    <View>
      <FlatList
        data={list}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()} // Unique key for each item
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 20,
    marginBottom: 90,
  },
  itemContainer: {
    // flex: 1,
    alignItems: "start",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 15,
  },
  image: {
    width: 170,
    height: 220,
    resizeMode: "cover",
    borderRadius: 16,
  },
});
