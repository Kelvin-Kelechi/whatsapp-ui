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
import { styles } from "./styles";
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



export default ChatList;
