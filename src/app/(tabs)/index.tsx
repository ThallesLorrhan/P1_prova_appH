import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ALL_PETS = [
  {
    id: "1",
    nome: "Bolinha",
    idade: 2,
    tipo: "Cães",
    verificado: true,
    ativo: true,
    bio: "Sou um doguinho resgatado apaixonado por caminhadas e bolinhas.",
    imagem: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    interesses: ["Passeios", "Bolinhas", "Praia", "Carinho"],
  },
  {
    id: "2",
    nome: "Luna",
    idade: 1,
    tipo: "Gatos",
    verificado: true,
    ativo: true,
    bio: "Gatinha dócil, adora um carinho e brincar com arranhadores.",
    imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    interesses: ["Soneca", "Arranhador", "Sachê"],
  },
  {
    id: "3",
    nome: "Thor",
    idade: 3,
    tipo: "Cães",
    verificado: false,
    ativo: true,
    bio: "Golden Retriever cheio de energia pronto para novas aventuras!",
    imagem: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    interesses: ["Natação", "Corrida", "Brinquedos"],
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTopTab, setActiveTopTab] = useState("Para Você");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtra os pets com base no botão selecionado
  const filteredPets = useMemo(() => {
    if (activeTopTab === "Cães")
      return ALL_PETS.filter((p) => p.tipo === "Cães");
    if (activeTopTab === "Gatos")
      return ALL_PETS.filter((p) => p.tipo === "Gatos");
    return ALL_PETS;
  }, [activeTopTab]);

  const pet = filteredPets[currentIndex % filteredPets.length];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* 1. HEADER COM LOGO PETMATCH E FILTROS */}
      <View style={styles.topHeader}>
        <View style={styles.brandRow}>
          <Text style={styles.logoText}>🐾 Petmatch</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Text style={{ fontSize: 18 }}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Text style={{ fontSize: 18 }}>🎛️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Abas Filtro (Para Você / Cães / Gatos) */}
        <View style={styles.pillsContainer}>
          {["Para Você", "Cães", "Gatos"].map((tab) => {
            const isActive = activeTopTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.pill, isActive && styles.pillActive]}
                onPress={() => {
                  setActiveTopTab(tab);
                  setCurrentIndex(0); // Reseta o índice ao trocar de filtro
                }}
              >
                <Text
                  style={[styles.pillText, isActive && styles.pillTextActive]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* 2. CARD DO PET */}
      {pet ? (
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            activeOpacity={0.92}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { petData: JSON.stringify(pet) },
              })
            }
          >
            <Image source={{ uri: pet.imagem }} style={styles.cardImage} />

            {/* Status Ativo */}
            {pet.ativo && (
              <View style={styles.activeBadge}>
                <View style={styles.activeDot} />
                <Text style={styles.activeText}>Ativo hoje</Text>
              </View>
            )}

            {/* Informações na Imagem */}
            <View style={styles.cardOverlay}>
              <View style={styles.nameRow}>
                <Text style={styles.petName}>
                  {pet.nome}, {pet.idade}
                </Text>
                {pet.verificado && <Text style={styles.verifiedIcon}>✓</Text>}
              </View>

              <Text style={styles.petBio} numberOfLines={2}>
                {pet.bio}
              </Text>
            </View>

            <View style={styles.infoBtnContainer}>
              <Text style={styles.infoBtnText}>i</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={{ color: "#FFF", fontSize: 16 }}>
            Nenhum pet nesta categoria.
          </Text>
        </View>
      )}

      {/* 3. BOTÕES FLUTUANTES ESTILO TINDER */}
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{ color: "#F59E0B", fontSize: 20 }}>↺</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLarge} onPress={handleNext}>
          <Text style={{ color: "#FF4458", fontSize: 26, fontWeight: "bold" }}>
            ✕
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{ color: "#22D3EE", fontSize: 20 }}>★</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLarge}
          onPress={() => {
            alert(`Você deu Match com ${pet.nome}!`);
            handleNext();
          }}
        >
          <Text style={{ color: "#10B981", fontSize: 26, fontWeight: "bold" }}>
            ♥
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSmall}>
          <Text style={{ color: "#A855F7", fontSize: 20 }}>⚡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "space-between",
  },
  topHeader: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4458",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  pillsContainer: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    borderRadius: 20,
    padding: 3,
    gap: 4,
  },
  pill: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 16,
    alignItems: "center",
  },
  pillActive: {
    backgroundColor: "#2C2C2E",
  },
  pillText: {
    color: "#8E8E93",
    fontSize: 12,
    fontWeight: "600",
  },
  pillTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cardWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#1C1C1E",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  activeBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 6,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#10B981",
  },
  activeText: {
    color: "#FFF",
    fontSize: 11,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  petName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
  },
  verifiedIcon: {
    fontSize: 14,
    color: "#FFF",
    backgroundColor: "#22D3EE",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  petBio: {
    color: "#D1D5DB",
    fontSize: 13,
    marginTop: 4,
  },
  infoBtnContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBtnText: {
    fontWeight: "bold",
    color: "#000",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
  },
  btnSmall: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLarge: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
});
