import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LIKES_MOCK = [
  {
    id: "1",
    nome: "Thor, 3 anos",
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  },
  {
    id: "2",
    nome: "Mel, 1 ano",
    img: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
  },
  {
    id: "3",
    nome: "Mingau, 2 anos",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  },
];

export default function LikesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Interessados em Você ⭐</Text>
      <Text style={styles.subtitle}>Estes pets deram match no seu perfil!</Text>

      <FlatList
        data={LIKES_MOCK}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Match!</Text>
            </View>
            <Text style={styles.name}>{item.nome}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 12 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
  subtitle: { color: "#8E8E93", marginBottom: 16, marginTop: 4 },
  card: {
    flex: 1,
    height: 200,
    margin: 6,
    borderRadius: 12,
    backgroundColor: "#1C1C1E",
    padding: 8,
    alignItems: "center",
  },
  image: { width: "100%", height: "80%", borderRadius: 8 },
  badge: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "#10B981",
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  badgeText: { color: "#FFF", fontSize: 10, fontWeight: "bold" },
  name: { color: "#FFF", fontWeight: "bold", marginTop: 6 },
});
