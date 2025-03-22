import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";

const WhatsAppChatsSettings = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={22} color="#007AFF" />
            <Text style={styles.backText}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chats</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView>
          <View style={styles.separator} />
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Change Wallpaper</Text>
              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />

          <View style={styles.optionContainer}>
            <View style={styles.optionRow}>
              <Text style={styles.optionText}>Save to Camera Roll</Text>
              <Switch value={false} />
            </View>
          </View>
          <Text style={styles.subText}>
            Automatically save photos and videos you receive to your iPhone’s
            Camera Roll.
          </Text>
          <View style={styles.separator} />

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Chat Backup</Text>
              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />

          <View style={styles.actionsContainer}>
            <TouchableOpacity>
              <Text style={styles.archiveText}>Archive All Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.clearText}>Clear All Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.deleteText}>Delete All Chats</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#007AFF",
    fontSize: 17,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -60,
  },
  optionContainer: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  subText: {
    fontSize: 13,
    color: "gray",
    marginTop: 5,
    marginHorizontal: 15,
  },
  separator: { marginTop: 40 },
  actionsContainer: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 20,
  },
  archiveText: {
    color: "#007AFF",
    fontSize: 16,
    marginBottom: 10,
  },
  clearText: {
    color: "#FF3B30",
    fontSize: 16,
    marginBottom: 10,
  },
  deleteText: {
    color: "#FF3B30",
    fontSize: 16,
  },
});

export default WhatsAppChatsSettings;
