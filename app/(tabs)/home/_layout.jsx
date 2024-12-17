import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // This points to the folder "(tabs)"
      />
      <Stack.Screen
        name="details/[id]"
        options={{ headerShown: false }} // Dynamic route for specific home items
      />
      <Stack.Screen
        name="details/AllProducts"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }} // This points to the folder "(tabs)"
      />
      <Stack.Screen
        name="details/AllCollections"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }} // This points to the folder "(tabs)"
      />
    </Stack>
  );
}
