import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const NotificationsScreen = () => {
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [groupNotifications, setGroupNotifications] = useState(true);
  const [preview, setPreview] = useState(true);
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
            <Text style={styles.backText}>Notifications</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chats</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              WARNING: Push Notifications are disabled. To enable visit:
            </Text>
            <Text style={styles.linkText}>
              iPhone Settings &gt; Notifications &gt; WhatsApp
            </Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.sectionHeader}>MESSAGE NOTIFICATIONS</Text>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Show Notifications</Text>
            <Switch
              value={messageNotifications}
              onValueChange={setMessageNotifications}
            />
          </View>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Sound</Text>
            <Text style={styles.noteText}>Note</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <Text style={styles.sectionHeader}>GROUP NOTIFICATIONS</Text>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Show Notifications</Text>
            <Switch
              value={groupNotifications}
              onValueChange={setGroupNotifications}
            />
          </View>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Sound</Text>
            <Text style={styles.noteText}>Note</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.listItem}>
            <View>
              <Text style={styles.listText}>In-App Notifications</Text>
              <Text style={styles.subText}>Banners, Sounds, Vibrate</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <View style={styles.listItem}>
            <View>
              <Text style={styles.listText}>Show Preview</Text>
            </View>
            <Switch value={preview} onValueChange={setPreview} />
          </View>
          <Text style={styles.subText}>
            Preview message text inside new message notifications.
          </Text>

          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Notification Settings</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#007AFF",
    fontSize: 17,
    // marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -60,
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  separator: { marginTop: 40 },
  warningContainer: {
    backgroundColor: "#F7F7F7",
    padding: 16,
    alignItems: "center",
  },
  warningText: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#007AFF",
    textAlign: "center",
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 13,
    color: "#8E8E93",
    paddingHorizontal: 16,
    // paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7CC",
  },
  listText: {
    fontSize: 17,
    color: "#000",
  },
  noteText: {
    fontSize: 17,
    color: "#8E8E93",
  },
  subText: {
    fontSize: 13,
    color: "#8E8E93",
    marginHorizontal: 16,
  },
  resetButton: {
    padding: 16,
    alignItems: "center",
  },
  resetText: {
    fontSize: 17,
    color: "#FF3B30",
  },
});

export default NotificationsScreen;
