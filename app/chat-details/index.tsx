import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
interface ChatItem {
  id: string;
  type: "sent" | "received" | "date";
  text: string;
  time?: string;
}
const chatData: ChatItem[] = [
  { id: "1", type: "date", text: "Fri, Jul 26" },
  { id: "2", type: "sent", text: "Good morning!", time: "10:10" },
  {
    id: "3",
    type: "received",
    text: "Do you know what time it is?",
    time: "11:40",
  },
  { id: "4", type: "sent", text: "It's morning in Tokyo 😎", time: "11:43" },
  {
    id: "5",
    type: "received",
    text: "What is the most popular meal in Japan?",
    time: "11:45",
  },
  { id: "6", type: "received", text: "Do you like it?", time: "11:45" },
  { id: "7", type: "sent", text: "I think top two are:", time: "11:50" },
];

const ChatScreen = () => {
  const router = useRouter();
  const { chat } = useLocalSearchParams();
  const parsedChatData =
    chat && typeof chat === "string" ? JSON.parse(chat) : [];
  const renderItem = ({ item }: { item: ChatItem }) => {
    if (item.type === "date") {
      return <Text style={styles.dateSeparator}>{item.text}</Text>;
    }

    return (
      <View
        style={[
          styles.messageContainer,
          item.type === "sent" ? styles.sent : styles.received,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        {item.time && <Text style={styles.messageTime}>{item.time}</Text>}
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color="#007AFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() =>
              router.push(
                `/contact-info?contact=${encodeURIComponent(
                  JSON.stringify(parsedChatData)
                )}`
              )
            }
          >
            <Image
              source={{ uri: parsedChatData.image }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.contactName}>{parsedChatData.name}</Text>
              <Text style={styles.contactSubtitle}>
                tap here for contact info
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.actionsContainer}>
            <TouchableOpacity>
              <Icon name="videocam-outline" size={24} color="#007AFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="call-outline" size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={parsedChatData.length ? parsedChatData : chatData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ padding: 10 }}
        />

        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon name="add" size={24} color="#007AFF" />
          </TouchableOpacity>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Type a message" />
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="sticker-outline"
                size={24}
                color="#007AFF"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Icon name="camera-outline" size={24} color="#007AFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="mic-outline" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E5DDD5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  contactSubtitle: {
    fontSize: 12,
    color: "#888",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 15,
  },

  dateSeparator: {
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: "#DDD",
    padding: 5,
    borderRadius: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingBottom: 40,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sent: { backgroundColor: "#DCF8C6", alignSelf: "flex-end" },
  received: { backgroundColor: "#fff", alignSelf: "flex-start" },
  messageText: { fontSize: 16 },
  messageTime: { fontSize: 12, color: "gray", alignSelf: "flex-end" },
});

export default ChatScreen;
