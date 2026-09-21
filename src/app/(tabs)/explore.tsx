import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIAS = [
  {
    id: "1",
    titulo: "Cães de Porte Grande",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  },
  {
    id: "2",
    titulo: "Filhotes Fofos",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
  },
  {
    id: "3",
    titulo: "Gatos Brincantes",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  },
  {
    id: "4",
    titulo: "Prontos para Adoção",
    img: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
  },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Explorar Categorias 🔍</Text>

      <FlatList
        data={CATEGORIAS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 12 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFF", marginBottom: 16 },
  card: {
    flex: 1,
    height: 180,
    margin: 6,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  cardTitle: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
});
