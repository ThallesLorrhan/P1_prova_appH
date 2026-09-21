import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // Habilita o gesto de deslizar a partir do canto da tela no iOS
        gestureEnabled: true,
        gestureDirection: "horizontal",
        // Aplica a animação nativa do iOS (desliza da direita para a esquerda)
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#000000" },
      }}
    >
      {/* Abas Principais */}
      <Stack.Screen name="(tabs)" />

      {/* Telas secundárias que abrem em cima e aceitam o gesto de voltar */}
      <Stack.Screen
        name="details"
        options={{
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="chat-details"
        options={{
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="my-pets"
        options={{
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}
