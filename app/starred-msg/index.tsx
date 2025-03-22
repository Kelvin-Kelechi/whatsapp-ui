import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";

const StarredMessages = () => {
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
          <Text style={styles.headerTitle}>Starred Messages</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/Oval.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.noMessages}>No Starred Messages</Text>
          <Text style={styles.description}>
            Tap and hold on any message to star it, so you can easily find it
            later.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default StarredMessages;

const styles = StyleSheet.create({
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
    marginLeft: -40,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 16,
    paddingVertical: 12,
  },
  settingsText: {
    color: "#007AFF",
    fontSize: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#EAEAEA",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  noMessages: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
