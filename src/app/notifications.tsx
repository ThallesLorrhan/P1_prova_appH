import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface NotificationItem {
  id: string;
  type: "match" | "message" | "system";
  title: string;
  description: string;
  time: string;
  read: boolean;
  avatar?: string;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "match",
    title: "Novo Match! 🔥",
    description: "Você e o tutor do Thor deram deu match. Digam olá!",
    time: "Há 10 min",
    read: false,
    avatar: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  },
  {
    id: "2",
    type: "message",
    title: "Nova Mensagem 💬",
    description: "Luna: 'Au au! Olá, tudo bem? Fiquei muito feliz...'",
    time: "Há 1 hora",
    read: false,
    avatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  },
  {
    id: "3",
    type: "system",
    title: "Perfil Verificado 🛡️",
    description: "Parabéns! Sua conta e documentos de tutor foram aprovados.",
    time: "Ontem",
    read: true,
  },
  {
    id: "4",
    type: "match",
    title: "Novo Match! 🔥",
    description: "Você e a Mel deram match! Que tal enviar uma mensagem?",
    time: "Há 2 dias",
    read: true,
    avatar: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
        <TouchableOpacity onPress={markAllAsRead}>
          <Text style={styles.readAllText}>Ler tudo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContainer,
          { paddingBottom: insets.bottom + 20 },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.notifCard, !item.read && styles.unreadCard]}
            onPress={() => {
              setNotifications((prev) =>
                prev.map((notification) =>
                  notification.id === item.id
                    ? { ...notification, read: true }
                    : notification,
                ),
              );
              if (item.type === "message" || item.type === "match") {
                router.push("/(tabs)/chats");
              }
            }}
          >
            {item.avatar ? (
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.iconContainer}>
                <Text style={{ fontSize: 20 }}>📢</Text>
              </View>
            )}
            <View style={styles.notifContent}>
              <View style={styles.cardTopRow}>
                <Text style={styles.notifTitle}>{item.title}</Text>
                <Text style={styles.notifTime}>{item.time}</Text>
              </View>
              <Text style={styles.notifDesc} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
            {!item.read && <View style={styles.unreadBadge} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000000" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#1C1C1E",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  backBtn: { paddingRight: 12 },
  backBtnText: { color: "#FF4458", fontSize: 36, lineHeight: 36 },
  headerTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
  readAllText: { color: "#FF4458", fontSize: 13, fontWeight: "600" },
  listContainer: { padding: 16 },
  notifCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2C2C2E",
  },
  unreadCard: { borderColor: "#FF4458", backgroundColor: "#25181A" },
  avatar: { width: 46, height: 46, borderRadius: 23, marginRight: 12 },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#2C2C2E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notifContent: { flex: 1 },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  notifTitle: { color: "#FFFFFF", fontSize: 15, fontWeight: "bold" },
  notifTime: { color: "#8E8E93", fontSize: 11 },
  notifDesc: { color: "#D1D5DB", fontSize: 13, lineHeight: 18 },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4458",
    marginLeft: 8,
  },
});
