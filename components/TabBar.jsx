import { View, Platform, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import Octicons from "@expo/vector-icons/Octicons";
// import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    home: (props) => <Octicons name="home" size={26} {...props} />,
    cart: (props) => <Feather name="shopping-cart" size={26} {...props} />,
    favorite: (props) => <Octicons name="heart" size={26} {...props} />,
    search: (props) => <Octicons name="search" size={26} {...props} />,
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const normalizedRouteName = route.name.replace("/index", ""); // ✅ Added normalization for `/index`
        const IconComponent = icons[normalizedRouteName];

        if (!IconComponent) {
          console.warn(`No icon defined for route: ${route.name}`); // ✅ Added warning for undefined icons
        }

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, isFocused && styles.activeTab]}
          >
            {IconComponent ? (
              IconComponent({
                color: isFocused ? "#000000" : "#DBE1E3",
              })
            ) : (
              <Text style={{ color: "red" }}>Icon Missing</Text> // ✅ Fallback for missing icons
            )}
            {/* <Text style={{ color: isFocused ? "#DBE1E3" : "#02196F" }}>
              {label}
            </Text> */}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  tabBar: {
    // display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white
    elevation: 5, // Adds depth on Android
    shadowOpacity: 0.1, // Subtle shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    width: "80%",
    height: 80,
    alignSelf: "center",
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "transparent",
    width: 50, // Consistent width
    height: 50, // Consistent height
  },

  activeTab: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Visual difference
    elevation: 5,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    // No dimension changes!
  },
});
