import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Message {
  id: string;
  sender: "user" | "pet";
  text: string;
  time: string;
}

export default function ChatDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Dados recebidos da navegação
  const petName = (params.nome as string) || "Pet";
  const petImage =
    (params.imagem as string) ||
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1";

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "pet",
      text: `Au au! Olá, tudo bem? Fiquei muito feliz com o nosso match! 🐾`,
      time: "12:30",
    },
  ]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    // Simula uma resposta automática do pet após 1.5s
    setTimeout(() => {
      const petMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "pet",
        text: "Que legal! Vamos marcar de passear no parque qualquer dia desses?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, petMsg]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="light" />

      {/* 1. HEADER DO CHAT */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>

        <Image source={{ uri: petImage }} style={styles.avatar} />

        <View style={styles.headerInfo}>
          <Text style={styles.petName}>{petName}</Text>
          <Text style={styles.statusText}>Online agora</Text>
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Text style={{ fontSize: 18 }}>📞</Text>
        </TouchableOpacity>
      </View>

      {/* 2. LISTA DE MENSAGENS */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) => {
          const isUser = item.sender === "user";
          return (
            <View
              style={[
                styles.messageBubbleContainer,
                isUser ? styles.userContainer : styles.petContainer,
              ]}
            >
              <View
                style={[
                  styles.messageBubble,
                  isUser ? styles.userBubble : styles.petBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          );
        }}
      />

      {/* 3. CAMPO DE ENTRADA DE TEXTO */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={`Enviar mensagem para ${petName}...`}
          placeholderTextColor="#8E8E93"
          value={inputMessage}
          onChangeText={setInputMessage}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity
          style={[
            styles.sendBtn,
            !inputMessage.trim() && styles.sendBtnDisabled,
          ]}
          onPress={handleSendMessage}
          disabled={!inputMessage.trim()}
        >
          <Text style={styles.sendBtnText}>➔</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: "#1C1C1E",
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  backBtn: {
    paddingRight: 12,
  },
  backBtnText: {
    color: "#FF4458",
    fontSize: 36,
    lineHeight: 36,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  petName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusText: {
    color: "#10B981",
    fontSize: 12,
  },
  iconBtn: {
    padding: 6,
  },

  /* MENSAGENS */
  messageList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageBubbleContainer: {
    marginBottom: 12,
    flexDirection: "row",
  },
  userContainer: {
    justifyContent: "flex-end",
  },
  petContainer: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "78%",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  userBubble: {
    backgroundColor: "#FF4458",
    borderBottomRightRadius: 4,
  },
  petBubble: {
    backgroundColor: "#2C2C2E",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 20,
  },
  timeText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 10,
    alignSelf: "flex-end",
    marginTop: 4,
  },

  /* INPUT */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#1C1C1E",
    borderTopWidth: 1,
    borderTopColor: "#2C2C2E",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#2C2C2E",
    color: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    maxHeight: 100,
  },
  sendBtn: {
    marginLeft: 8,
    backgroundColor: "#FF4458",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtnDisabled: {
    backgroundColor: "#48484A",
  },
  sendBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
