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
import { styles } from "./styles";
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



export default WhatsAppChatsSettings;
