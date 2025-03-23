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
import { styles } from "./styles";
const DataStorageScreen = () => {
  const [lowDataUsage, setLowDataUsage] = useState(false);
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
          <Text style={styles.headerTitle}>Data and Storage Usage</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={styles.content}>
          <Text style={styles.sectionHeader}>MEDIA AUTO-DOWNLOAD</Text>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Photos</Text>
            <Text style={styles.valueText}>Wi-Fi and Cellular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Audio</Text>
            <Text style={styles.valueText}>Wi-Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Videos</Text>
            <Text style={styles.valueText}>Wi-Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Documents</Text>
            <Text style={styles.valueText}>Wi-Fi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Auto-Download Settings</Text>
          </TouchableOpacity>

          <View style={styles.grayBox}>
            <Text style={styles.grayText}>
              Voice Messages are always automatically downloaded for the best
              communication experience.
            </Text>
          </View>

          <Text style={styles.sectionHeader}>CALL SETTINGS</Text>
          <View style={styles.listItem}>
            <View>
              <Text style={styles.listText}>Low Data Usage</Text>
            </View>
            <Switch value={lowDataUsage} onValueChange={setLowDataUsage} />
          </View>
          <Text style={styles.subText}>
            Lower the amount of data used during a WhatsApp call on cellular.
          </Text>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Network Usage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Storage Usage</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};



export default DataStorageScreen;
