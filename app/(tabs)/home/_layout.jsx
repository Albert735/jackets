import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // This points to the folder "(tabs)"
      />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false }} // Dynamic route for specific home items
      />
    </Stack>
  );
}
