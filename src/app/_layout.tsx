import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            animation: "slide_from_right",
            contentStyle: { backgroundColor: "#000000" },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details" options={{ gestureEnabled: true }} />
          <Stack.Screen
            name="chat-details"
            options={{ gestureEnabled: true }}
          />
          <Stack.Screen name="my-pets" options={{ gestureEnabled: true }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
