import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CHATS = [
  {
    id: "1",
    nome: "Bolinha",
    ultimaMensagem: "Au au! Vamos passear no parque?",
    tempo: "12:30",
    imagem: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    online: true,
  },
  {
    id: "2",
    nome: "Luna",
    ultimaMensagem: "Miau, gostei de você!",
    tempo: "Ontem",
    imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    online: false,
  },
];

export default function ChatsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagens e Matches</Text>

      <FlatList
        data={CHATS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatCard}
            onPress={() =>
              router.push({
                pathname: "/chat-details",
                params: { id: item.id, nome: item.nome, imagem: item.imagem },
              })
            }
          >
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.imagem }} style={styles.avatar} />
              {item.online && <View style={styles.onlineDot} />}
            </View>

            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.nome}</Text>
                <Text style={styles.chatTime}>{item.tempo}</Text>
              </View>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {item.ultimaMensagem}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#1C1C1E",
    padding: 12,
    borderRadius: 12,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#10B981",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: "#000",
  },
  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  chatTime: {
    color: "#8E8E93",
    fontSize: 12,
  },
  lastMessage: {
    color: "#8E8E93",
    marginTop: 4,
    fontSize: 14,
  },
});
