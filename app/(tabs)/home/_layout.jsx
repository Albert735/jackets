import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} // This points to the folder "(tabs)"
      />
      <Stack.Screen
        name="home/[id]"
        options={{ headerShown: true }} // Dynamic route for specific home items
      />
    </Stack>
  );
}
