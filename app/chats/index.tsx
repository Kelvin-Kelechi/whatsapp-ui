import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ScreenWrapper from "@/components/ScreenWrapper";
import { StackScreenProps } from "@react-navigation/stack";
import { chatData } from "@/data";
import Feather from "@expo/vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import ActionSheet from "react-native-actions-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

type ChatItemType = {
  id: string;
  name: string;
  message: string;
  date: string;
  image: string;
};
type ActionSheetRef = {
  show: () => void;
  hide: () => void;
};
type RootStackParamList = {
  ChatList: undefined;
};

type ChatListScreenProps = StackScreenProps<RootStackParamList, "ChatList">;
const CustomCheckBox = ({
  isChecked,
  onPress,
}: {
  isChecked: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    <Icon
      name={isChecked ? "checkmark-circle" : "ellipse-outline"}
      size={30}
      color={isChecked ? "#007AFF" : "#999"}
    />
  </TouchableOpacity>
);
const ChatItem = ({
  item,
  isEditing,
  selectedChats,
  toggleSelectChat,
}: {
  item: ChatItemType;
  isEditing: boolean;
  selectedChats: string[];
  toggleSelectChat: (id: string) => void;
}) => {
  const actionSheetRef = useRef<ActionSheetRef | null>(null);
  const handleOpen = () => {
    actionSheetRef.current?.show();
  };

  const handleClose = () => {
    actionSheetRef.current?.hide();
  };
  const router = useRouter();
  const isSelected = selectedChats.includes(item.id);
  const handlePress = () => {
    if (isEditing) {
      toggleSelectChat(item.id);
    } else {
      router.push({
        pathname: "/chat-details",
        params: { chat: JSON.stringify(item) },
      });
    }
  };

  const renderRightActions = () => (
    <View style={styles.rightActions}>
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: "#C4C4C4" }]}
        onPress={handleOpen}
      >
        <Feather name="more-horizontal" size={30} color="#fff" />
        <Text style={styles.actionText}>More</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: "#3A70B2" }]}
      >
        <FontAwesome name="archive" size={24} color="#fff" />
        <Text style={styles.actionText}>Archive</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity style={styles.chatItem} onPress={handlePress}>
          {isEditing && (
            <CustomCheckBox
              isChecked={selectedChats.includes(item.id)}
              onPress={() => toggleSelectChat(item.id)}
            />
          )}
          <Image source={{ uri: item.image }} style={styles.avatar} />
          <View style={styles.chatDetails}>
            <View style={styles.chatHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        </TouchableOpacity>
      </Swipeable>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{ marginHorizontal: 10, marginBottom: 10 }}
      >
        <View style={styles.actionSheet}>
          <TouchableOpacity style={styles.sheetItem}>
            <Text style={styles.sheetText}>Mute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetItem}>
            <Text style={styles.sheetText}>Contact Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetItem}>
            <Text style={styles.sheetText}>Export Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetItem}>
            <Text style={styles.sheetText}>Clear Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetItem}>
            <Text style={[styles.sheetText, styles.deleteText]}>
              Delete Chat
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </ActionSheet>
    </>
  );
};
const ChatList: React.FC<ChatListScreenProps> = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedChats, setSelectedChats] = useState<string[]>([]);

  const toggleSelectChat = (id: string) => {
    setSelectedChats((prev) =>
      prev.includes(id) ? prev.filter((chatId) => chatId !== id) : [...prev, id]
    );
  };

  return (
    <ScreenWrapper>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Text style={styles.editText}>{isEditing ? "Done" : "Edit"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chats</Text>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <FlatList
            data={chatData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ChatItem
                item={item}
                isEditing={isEditing}
                selectedChats={selectedChats}
                toggleSelectChat={toggleSelectChat}
              />
            )}
          />
        </View>
      </GestureHandlerRootView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F6F6F6",
  },
  editText: {
    color: "#007AFF",
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  chatDetails: { flex: 1 },
  chatHeader: { flexDirection: "row", justifyContent: "space-between" },
  name: { fontSize: 16, fontWeight: "bold" },
  date: { fontSize: 12, color: "#666" },
  message: { fontSize: 14, color: "#444", marginTop: 3 },
  checkboxContainer: {
    marginRight: 10,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
  actionSheet: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  sheetItem: {
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  sheetText: {
    fontSize: 16,
    color: "#007AFF",
  },
  deleteText: {
    color: "red",
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 10,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cancelText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
});

export default ChatList;
