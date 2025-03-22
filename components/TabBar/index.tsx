import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useCameraPermissions } from "expo-camera";

type IconName =
  | "sync-circle-outline"
  | "call-outline"
  | "camera-outline"
  | "chatbubbles"
  | "settings-outline";

const TabBar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("chats");
  const [permission, requestPermission] = useCameraPermissions(); // Use the correct permission hook

const tabs: {
  name: string;
  iconOutlined: keyof typeof Ionicons.glyphMap;
  iconFilled: keyof typeof Ionicons.glyphMap;
  label: string;
}[] = [
  {
    name: "status",
    iconOutlined: "sync-circle-outline",
    iconFilled: "sync-circle",
    label: "Status",
  },
  {
    name: "calls",
    iconOutlined: "call-outline",
    iconFilled: "call",
    label: "Calls",
  },
  {
    name: "camera",
    iconOutlined: "camera-outline",
    iconFilled: "camera",
    label: "Camera",
  },
  {
    name: "chats",
    iconOutlined: "chatbubbles-outline",
    iconFilled: "chatbubbles",
    label: "Chats",
  },
  {
    name: "settings",
    iconOutlined: "settings-outline",
    iconFilled: "settings",
    label: "Settings",
  },
];
  const handleTabPress = async (tabName: string) => {
    if (tabName === "camera") {
      if (!permission || permission.status !== "granted") {
        const response = await requestPermission();
        if (!response.granted) {
          Alert.alert("Permission Denied", "You need to allow camera access.");
          return;
        }
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        console.log("Image Captured: ", result.assets[0].uri);
      }
      return;
    }

    setActiveTab(tabName);
    router.push(`/${tabName}` as any);
  };

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => handleTabPress(tab.name)}
          style={[
            styles.tabItem,
            activeTab === tab.name && styles.activeTabItem,
          ]}
        >
          <Ionicons
            name={activeTab === tab.name ? tab.iconFilled : tab.iconOutlined as IconName}
            size={30}
            color={activeTab === tab.name ? "#007AFF" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === tab.name && styles.activeTabText,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F6F6F6",
    paddingVertical: 0,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 32,
  },
  tabItem: {
    alignItems: "center",
    paddingVertical: 5,
  },
  activeTabItem: {},
  tabText: {
    fontSize: 12,
    color: "#000",
    marginTop: 4,
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});
