import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
// import { Swipeable } from "react-native-gesture-handler";

export default function Cart() {
  const navigation = useNavigation();
  // const renderAction = () => {
  //   return (
  //     <View>
  //       <TouchableOpacity>
  //         <Octicons name="trash" size={20} color={"#ffffff"} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  return (
    <View className="flex-1 bg-[#000000] text-white pt-16">
      {/* header  */}
      <View className="flex flex-row items-center justify-between px-5">
        <Octicons
          name="arrow-left"
          size={26}
          color={"#ffffff"}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{ fontFamily: "Modak" }}
          className="text-[1.5rem] font-bold text-white"
        >
          Cart
        </Text>
        <Octicons name="trash" size={20} color={"#ffffff"} />
      </View>

      {/* cart items */}
      <View className="flex flex-row items-center justify-start px-5 mt-5">
        <Text className="text-[1.5rem] font-semibold text-white">Checkout</Text>
        {/* <Text className="text-[1.2rem] font-bold text-white">Total</Text> */}
      </View>

      <View className="p-3 flex flex-row items-start justify-even gap-5">
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../../../assets/images/orangepuff.png")}
        />

        <View className="flex flex-col items-start justify-between h-[190]  w-[60%]">
          <View>
            <Text className="text-[1.2rem] font-bold text-white">Nike</Text>
            <Text className="text-[1.2rem] font-light text-white mt-2">
              Weekend Vibes
            </Text>
            <Text
              style={{ fontFamily: "Modak" }}
              className="text-[1.5rem] font-bold text-[#bbde82] mt-2"
            >
              $ 200.00
            </Text>
          </View>

          <TouchableOpacity className="flex flex-row items-center  justify-center w-full bg-white/30 rounded-full p-3 opacity-80 bg blur-lg mt-5">
            <Octicons name="trash" size={20} color={"#fca5a5"} />
            <Text className="text-[1.2rem] font-bold text-red-300 ml-2">
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 190,
    resizeMode: "cover",
    borderRadius: 16,
  },
});
