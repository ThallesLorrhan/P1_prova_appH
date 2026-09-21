import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />

      {/* CABEÇALHO DO PERFIL */}
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../../../assets/images/perfil.jpeg")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editBadge}>
            <Text style={{ fontSize: 12 }}>✏️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Thalles Lorrhan</Text>
        <Text style={styles.userLocation}>📍 Maricá, Rio de Janeiro</Text>
        <Text style={styles.userBio}>
          Apoiador da causa animal, tutor de 2 cães e voluntário em abrigos.
        </Text>
      </View>

      {/* ESTATÍSTICAS DO TUTOR */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>14</Text>
          <Text style={styles.statLabel}>Matches</Text>
        </View>
        <View style={[styles.statBox, styles.statBorder]}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Adotados</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5.0 ★</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
      </View>

      {/* SEÇÃO MEUS PETS CADASTRADOS */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus Pets Cadastrados</Text>
          <TouchableOpacity onPress={() => router.push("/my-pets")}>
            <Text style={styles.seeAllText}>Ver Todos</Text>
          </TouchableOpacity>
        </View>

        {/* Card do Pet Cadastrado */}
        <TouchableOpacity
          style={styles.myPetCard}
          onPress={() => router.push("/my-pets")}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95",
            }}
            style={styles.myPetImage}
          />
          <View style={styles.myPetInfo}>
            <Text style={styles.myPetName}>Rex 🐕</Text>
            <Text style={styles.myPetMeta}>Pastor Alemão • 2 anos</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Disponível para Adoção</Text>
            </View>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>
      </View>

      {/* MENU DE OPÇÕES DA CONTA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <Text style={styles.menuText}>Preferências de Match</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🛡️</Text>
          <Text style={styles.menuText}>Segurança e Privacidade</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuText}>Ajuda e Suporte</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={styles.menuIcon}>🚪</Text>
          <Text style={[styles.menuText, { color: "#FF4458" }]}>
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: "#FF4458",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2C2C2E",
    padding: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#48484A",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userLocation: {
    color: "#8E8E93",
    fontSize: 13,
    marginTop: 2,
  },
  userBio: {
    color: "#D1D5DB",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 18,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 14,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#2C2C2E",
  },
  statNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#8E8E93",
    fontSize: 11,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#FF4458",
    fontSize: 13,
    fontWeight: "600",
  },
  myPetCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 14,
    padding: 12,
  },
  myPetImage: {
    width: 54,
    height: 54,
    borderRadius: 10,
  },
  myPetInfo: {
    flex: 1,
    marginLeft: 12,
  },
  myPetName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  myPetMeta: {
    color: "#8E8E93",
    fontSize: 12,
    marginTop: 2,
  },
  statusBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 6,
  },
  statusText: {
    color: "#10B981",
    fontSize: 10,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
  },
  arrowIcon: {
    color: "#8E8E93",
    fontSize: 20,
  },
});
