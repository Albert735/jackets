import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import { Octicons, Feather } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons = {
    Home: (props) => <Octicons name="home" size={24} {...props} />,
    Cart: (props) => <Feather name="shopping-cart" size={24} {...props} />,
    Search: (props) => <Octicons name="search" size={24} {...props} />,
    Favorite: (props) => <Octicons name="heart" size={24} {...props} />,
  };

  return (
    <BlurView intensity={90} tint="light" style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const handlePress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const handleLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconColor = isFocused ? "white" : "black";

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={handlePress}
            onLongPress={handleLongPress}
            style={[styles.tabItem, isFocused && styles.activeTab]}
          >
            {icons[route.name] && icons[route.name]({ color: iconColor })}
            <Text style={[styles.tabLabel, { color: iconColor }]}>{label}</Text>
          </PlatformPressable>
        );
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 32,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default TabBar;
