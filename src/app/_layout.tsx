import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.globalContainer}>
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
        <Stack.Screen name="chat-details" options={{ gestureEnabled: true }} />
        <Stack.Screen name="my-pets" options={{ gestureEnabled: true }} />
        <Stack.Screen name="add-pet" options={{ gestureEnabled: true }} />
        <Stack.Screen name="notifications" options={{ gestureEnabled: true }} />
        <Stack.Screen name="settings" options={{ gestureEnabled: true }} />
        <Stack.Screen name="edit-profile" options={{ gestureEnabled: true }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 40, // Margem superior fixa (Notch/Status Bar) // Margem lateral geral
    paddingBottom: 16, // Margem inferior geral
  },
});
