import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AddPetScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [tipo, setTipo] = useState<"Cães" | "Gatos" | "Outros">("Cães");
  const [bio, setBio] = useState("");
  const [imagem, setImagem] = useState("");
  const [interessesInput, setInteressesInput] = useState("");

  const handleSave = () => {
    if (!nome.trim() || !idade.trim()) {
      alert("Por favor, preencha o nome e a idade do pet.");
      return;
    }
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastrar Novo Pet</Text>
        <View style={{ width: 30 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.formContainer, { paddingBottom: insets.bottom + 24 }]}
      >
        <Text style={styles.label}>Tipo de Animal</Text>
        <View style={styles.typeSelector}>
          {(["Cães", "Gatos", "Outros"] as const).map((animalType) => (
            <TouchableOpacity
              key={animalType}
              style={[styles.typeButton, tipo === animalType && styles.typeButtonActive]}
              onPress={() => setTipo(animalType)}
            >
              <Text style={[styles.typeButtonText, tipo === animalType && styles.typeButtonTextActive]}>
                {animalType}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Nome do Pet *</Text>
        <TextInput style={styles.input} placeholder="Ex: Tobey" placeholderTextColor="#8E8E93" value={nome} onChangeText={setNome} />
        <Text style={styles.label}>Idade (anos ou meses) *</Text>
        <TextInput style={styles.input} placeholder="Ex: 2 anos" placeholderTextColor="#8E8E93" value={idade} onChangeText={setIdade} />
        <Text style={styles.label}>URL da Foto do Pet</Text>
        <TextInput style={styles.input} placeholder="https://..." placeholderTextColor="#8E8E93" value={imagem} onChangeText={setImagem} autoCapitalize="none" />
        <Text style={styles.label}>História / Biografia</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Conte um pouco sobre a personalidade, vacinas ou história do pet..."
          placeholderTextColor="#8E8E93"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={bio}
          onChangeText={setBio}
        />
        <Text style={styles.label}>Interesses (separados por vírgula)</Text>
        <TextInput style={styles.input} placeholder="Ex: Brincalhão, Castrado, Dócil, Vacinado" placeholderTextColor="#8E8E93" value={interessesInput} onChangeText={setInteressesInput} />
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Salvar e Publicar Pet</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000000" },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 16, paddingBottom: 12, backgroundColor: "#1C1C1E",
    borderBottomWidth: 1, borderBottomColor: "#2C2C2E",
  },
  backBtn: { paddingRight: 12 },
  backBtnText: { color: "#FF4458", fontSize: 36, lineHeight: 36 },
  headerTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
  formContainer: { padding: 20 },
  label: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold", marginTop: 16, marginBottom: 8 },
  input: { backgroundColor: "#1C1C1E", color: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 15, borderWidth: 1, borderColor: "#2C2C2E" },
  textArea: { height: 100 },
  typeSelector: { flexDirection: "row", gap: 10 },
  typeButton: { flex: 1, paddingVertical: 12, backgroundColor: "#1C1C1E", borderRadius: 12, alignItems: "center", borderWidth: 1, borderColor: "#2C2C2E" },
  typeButtonActive: { backgroundColor: "#FF4458", borderColor: "#FF4458" },
  typeButtonText: { color: "#8E8E93", fontWeight: "bold" },
  typeButtonTextActive: { color: "#FFFFFF" },
  saveBtn: { backgroundColor: "#FF4458", borderRadius: 14, paddingVertical: 16, alignItems: "center", marginTop: 28 },
  saveBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
