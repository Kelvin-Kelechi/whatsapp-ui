import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F7" },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  profileInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  status: { fontSize: 14, color: "#777" },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  menuText: { flex: 1, fontSize: 16 },
  section: { marginBottom: 15 },
  sectionMargin: { marginBottom: 15 },
  footer: { textAlign: "center", color: "#777", marginVertical: 20 },
});
const profile = {
  name: "Sabohiddin",
  status: "Digital goodies designer - Pixsellz",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg", 
};

const sections = [
  {
    items: [
      {
        icon: "star",
        text: "Starred Messages",
        color: "#FFC107",
        router: "/starred-msg",
      },
      {
        icon: "laptop",
        text: "WhatsApp Web/Desktop",
        color: "#4CAF50",
        router: "/starred-msg",
        style: styles.sectionMargin,
      },
    ],
  },
  {
    items: [
      {
        icon: "key",
        text: "Account",
        color: "#1E88E5",
        router: "/account",
      },
      {
        icon: "whatsapp",
        text: "Chats",
        color: "#25D366",
        type: "FontAwesome",
        router: "/chats-settings",
      },
      {
        icon: "notifications",
        text: "Notifications",
        color: "#F44336",
        router: "/notifications",
      },
      {
        icon: "sync",
        text: "Data and Storage Usage",
        color: "#4CAF50",
        router: "/data-storage",
        style: styles.sectionMargin,
      },
    ],
  },
  {
    items: [
      {
        icon: "information-circle",
        text: "Help",
        color: "#1E88E5",
        router: "/starred-msg",
      },
      {
        icon: "heart",
        text: "Tell a Friend",
        color: "#E91E63",
        router: "/starred-msg",
      },
    ],
  },
];

const SettingsScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>

        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => router.push("/edit-profile")}
        >
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.status}>{profile.status}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#777" />
        </TouchableOpacity>

        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            {section.items.map((item) => (
              <TouchableOpacity
                key={item.text}
                style={[styles.menuItem, item.style]}
                onPress={() => {
                  if (
                    item.text !== "WhatsApp Web/Desktop" &&
                    item.text !== "Help" &&
                    item.text !== "Tell a Friend"
                  ) {
                    router.push(item.router as any); 
                  }
                }}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: item.color },
                  ]}
                >
                  {item.type === "FontAwesome" ? (
                    <FontAwesome name={item.icon} size={18} color="#fff" />
                  ) : (
                    <Ionicons name={item.icon} size={18} color="#fff" />
                  )}
                </View>
                <Text style={styles.menuText}>{item.text}</Text>
                <Ionicons name="chevron-forward" size={20} color="#777" />
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <Text style={styles.footer}>WhatsApp from Facebook</Text>
      </View>
    </ScreenWrapper>
  );
};

export default SettingsScreen;
