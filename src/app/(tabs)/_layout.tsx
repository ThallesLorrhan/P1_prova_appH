import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <>
      {/* Força os ícones e texto da barra do iOS/Android a ficarem brancos */}
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "#1C1C1E",
            height: 60,
            paddingBottom: 25,
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
      </Tabs>
    </>
  );
}
