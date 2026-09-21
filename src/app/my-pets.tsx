import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MEUS_PETS = [
  {
    id: "101",
    nome: "Rex",
    especie: "Cão",
    raca: "Pastor Alemão",
    imagem: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95",
  },
];

export default function MyPetsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Meus Pets Cadastrados</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MEUS_PETS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Image source={{ uri: item.imagem }} style={styles.petThumb} />
            <View style={styles.petDetails}>
              <Text style={styles.petName}>{item.nome}</Text>
              <Text style={styles.petMeta}>
                {item.especie} • {item.raca}
              </Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>Editar</Text>
            </TouchableOpacity>
          </View>
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: "#FF4458",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  addBtnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  petCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  petThumb: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  petDetails: {
    flex: 1,
    marginLeft: 12,
  },
  petName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  petMeta: {
    color: "#8E8E93",
    fontSize: 13,
    marginTop: 2,
  },
  editBtn: {
    borderWidth: 1,
    borderColor: "#48484A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editBtnText: {
    color: "#FFF",
    fontSize: 12,
  },
});
