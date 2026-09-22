import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [nome, setNome] = useState("Thalles Lorrhan");
  const [cidade, setCidade] = useState("Maricá, Rio de Janeiro");
  const [bio, setBio] = useState(
    "Apoiador da causa animal, tutor de 2 cães e voluntário em abrigos.",
  );
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  );
  const handleSave = () => router.back();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveHeaderText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.formContainer,
          { paddingBottom: insets.bottom + 24 },
        ]}
      >
        <View style={styles.avatarWrapper}>
          <Image
            source={require("./../../assets/images/perfil.jpeg")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.changePhotoBtn}>
            <Text style={styles.changePhotoText}>Alterar Foto de Perfil</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#8E8E93"
        />
        <Text style={styles.label}>Cidade / Estado</Text>
        <TextInput
          style={styles.input}
          value={cidade}
          onChangeText={setCidade}
          placeholderTextColor="#8E8E93"
        />
        <Text style={styles.label}>Link da Foto (URL)</Text>
        <TextInput
          style={styles.input}
          value={avatar}
          onChangeText={setAvatar}
          placeholderTextColor="#8E8E93"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Sua Biografia</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={bio}
          onChangeText={setBio}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholderTextColor="#8E8E93"
        />
        <TouchableOpacity style={styles.confirmBtn} onPress={handleSave}>
          <Text style={styles.confirmBtnText}>Atualizar Perfil</Text>
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
  saveHeaderText: { color: "#FF4458", fontSize: 16, fontWeight: "bold" },
  formContainer: { padding: 20 },
  avatarWrapper: { alignItems: "center", marginVertical: 12 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FF4458",
    marginBottom: 12,
  },
  changePhotoBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#1C1C1E",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2C2C2E",
  },
  changePhotoText: { color: "#FF4458", fontSize: 13, fontWeight: "600" },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#1C1C1E",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#2C2C2E",
  },
  textArea: { height: 100 },
  confirmBtn: {
    backgroundColor: "#FF4458",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 28,
  },
  confirmBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
