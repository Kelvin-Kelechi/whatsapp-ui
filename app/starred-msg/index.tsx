import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
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


