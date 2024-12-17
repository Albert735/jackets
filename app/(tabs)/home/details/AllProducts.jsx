import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList, Image } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import list from "../../../../assets/Mock/products";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function AllProducts() {
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <View className="flex flex-row items-center justify-between w-screen  px-5 pt-2 gap-5">
        <Octicons
          name="arrow-left"
          size={26}
          color={"#ffffff"}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{ fontFamily: "Modak" }}
          className="text-white text-[1.5rem]  font-bold"
        >
          Popular Products
        </Text>

        <Link href="/cart">
          <View>
            <Feather name="shopping-cart" size={26} color={"#ffffff"} />
            <View className="w-[1.2rem] h-[1.2rem] p-1 bg-red-500 rounded-full absolute -top-1 -right-2">
              <Text className="text-white text-[0.7rem] font-bold text-center">
                1
              </Text>
            </View>
          </View>
        </Link>
      </View>
    );
  };

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
