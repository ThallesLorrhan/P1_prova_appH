import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: "#000000" },
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "#1C1C1E",
            height: 80, // Aumentado de 60 para 80 para comportar o paddingBottom extra
            paddingBottom: 24, // Aumentado de 15 para 24 para afastar os ícones da base
            paddingTop: 8,
          },
          tabBarActiveTintColor: "#FF4458",
          tabBarInactiveTintColor: "#8E8E93",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>🔥</Text>,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explorar",
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>🔍</Text>,
          }}
        />
        <Tabs.Screen
          name="likes"
          options={{
            title: "Curtidas",
            tabBarIcon: () => (
              <View style={{ position: "relative" }}>
                <Text style={{ fontSize: 20 }}>⭐</Text>
                <View
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -10,
                    backgroundColor: "#F59E0B",
                    borderRadius: 6,
                    paddingHorizontal: 3,
                  }}
                >
                  <Text
                    style={{ color: "#000", fontSize: 8, fontWeight: "bold" }}
                  >
                    99+
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>💬</Text>,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>👤</Text>,
          }}
        />
        <Tabs.Screen name="my-pets" options={{ href: null }} />
        <Tabs.Screen name="chat-details" options={{ href: null }} />
        <Tabs.Screen name="details" options={{ href: null }} />
      </Tabs>
    </>
  );
}
