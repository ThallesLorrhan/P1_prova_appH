import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const switchProps = {
    trackColor: { false: "#3A3A3C", true: "#FF4458" },
    thumbColor: "#FFFFFF",
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={{ width: 30 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 24 },
        ]}
      >
        <Text style={styles.sectionTitle}>Conta</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => router.push("/edit-profile")}
          >
            <Text style={styles.rowLabel}>Editar Dados do Perfil</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowLabel}>Verificação de Tutor</Text>
            <Text style={styles.statusBadgeText}>Verificado ✓</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Preferências do App</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Notificações Push</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              {...switchProps}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Serviço de Localização</Text>
            <Switch
              value={locationServices}
              onValueChange={setLocationServices}
              {...switchProps}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Modo Escuro Forçado</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              {...switchProps}
            />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Sobre e Suporte</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowLabel}>Termos de Uso e Adoção</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowLabel}>Política de Privacidade</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Versão do App</Text>
            <Text style={styles.versionText}>v1.0.4 (Build 42)</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutBtnText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
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
  content: { padding: 16 },
  sectionTitle: {
    color: "#8E8E93",
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 18,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#1C1C1E",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2C2C2E",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowLabel: { color: "#FFFFFF", fontSize: 15 },
  divider: { height: 1, backgroundColor: "#2C2C2E" },
  arrowIcon: { color: "#8E8E93", fontSize: 20 },
  statusBadgeText: { color: "#10B981", fontSize: 13, fontWeight: "bold" },
  versionText: { color: "#8E8E93", fontSize: 13 },
  logoutBtn: {
    marginTop: 32,
    backgroundColor: "#1C1C1E",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EF4444",
  },
  logoutBtnText: { color: "#EF4444", fontSize: 15, fontWeight: "bold" },
});
