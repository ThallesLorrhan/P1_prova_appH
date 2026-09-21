import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Tenta ler o objeto 'petData' enviado via parâmetro da Home ou insere um padrão
  const pet = params.petData
    ? JSON.parse(params.petData as string)
    : {
        nome: "Bolinha",
        idade: 2,
        verificado: true,
        imagem: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
        bio: "Sou um doguinho resgatado apaixonado por caminhadas, carinho e tirar um cochilo ao sol.",
        interesses: ["Passeios", "Bolinhas", "Praia", "Soneca"],
      };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGEM E BOTÃO VOLTAR */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: pet.imagem }} style={styles.petImage} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
        </View>

        {/* CONTEÚDO DOS DETALHES */}
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.petName}>
              {pet.nome}, {pet.idade}
            </Text>
            {pet.verificado && <Text style={styles.verifiedIcon}>✓</Text>}
          </View>

          <Text style={styles.locationText}>
            📍 ONG Patas Carentes • Maricá, RJ
          </Text>

          {/* TAGS DE SAÚDE E TEMPERAMENTO */}
          <View style={styles.tagGrid}>
            <View style={styles.tagChip}>
              <Text style={styles.tagText}>💉 Vacinado</Text>
            </View>
            <View style={styles.tagChip}>
              <Text style={styles.tagText}>✂️ Castrado</Text>
            </View>
            <View style={styles.tagChip}>
              <Text style={styles.tagText}>🐕 Porte Médio</Text>
            </View>
          </View>

          {/* BIO DO ANIMAL */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.bioText}>{pet.bio}</Text>
          </View>

          {/* INTERESSES E HÁBITOS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interesses</Text>
            <View style={styles.interestsRow}>
              {(pet.interesses || ["Brincar", "Passear"]).map(
                (item: string, index: number) => (
                  <View key={index} style={styles.interestPill}>
                    <Text style={styles.interestText}>{item}</Text>
                  </View>
                ),
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BARRA DE AÇÃO FIXA INFERIOR */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.matchButton}
          onPress={() => {
            alert(`Você demonstrou interesse em ${pet.nome}!`);
            router.push({
              pathname: "/chat-details",
              params: { nome: pet.nome, imagem: pet.imagem },
            });
          }}
        >
          <Text style={styles.matchButtonText}>Dar Match com {pet.nome} ♥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 380,
  },
  petImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 28,
    marginTop: -4,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  petName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  verifiedIcon: {
    fontSize: 14,
    color: "#FFFFFF",
    backgroundColor: "#22D3EE",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  locationText: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 4,
  },
  tagGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 16,
  },
  tagChip: {
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2C2C2E",
  },
  tagText: {
    color: "#D1D5DB",
    fontSize: 12,
    fontWeight: "500",
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bioText: {
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 22,
  },
  interestsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  interestPill: {
    backgroundColor: "#2C2C2E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  interestText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1C1C1E",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#2C2C2E",
  },
  matchButton: {
    backgroundColor: "#FF4458",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },
  matchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
