import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "@/components/ScreenWrapper";
import { styles } from "./styles";
const menuItems = [
  { text: "Privacy", route: "/privacy" },
  { text: "Security", route: "/security" },
  { text: "Two-Step Verification", route: "/two-step-verification" },
  { text: "Change Number", route: "/change-number" },
  { text: "Request Account Info", route: "/request-info" },
  { text: "Delete My Account", route: "/delete-account" },
];

const AccountScreen = () => {
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
          <Text style={styles.headerTitle}>Account</Text>
          <View style={{ width: 24 }} />
        </View>

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              index === 3 && styles.separator,
              index === 0 && styles.separator,
            ]}
            //   onPress={() => router.push(item.route)}
          >
            <Text style={styles.menuText}>{item.text}</Text>
            <Ionicons name="chevron-forward" size={18} color="#777" />
          </TouchableOpacity>
        ))}
      </View>
    </ScreenWrapper>
  );
};



export default AccountScreen;
