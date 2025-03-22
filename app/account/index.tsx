import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "@/components/ScreenWrapper";

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F7" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 7,
    paddingVertical: 10,
    // backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginLeft: -60 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  separator: { marginTop: 40 },
  menuText: { fontSize: 16 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 17,
    color: "#007AFF",
    // marginLeft: 5,
  },
});

export default AccountScreen;
