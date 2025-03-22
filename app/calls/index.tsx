import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { callsData } from "@/data";

interface CallItem {
  id: string;
  name: string;
  avatar: string;
  type: "incoming" | "outgoing" | "missed";
  date: string;
}

const CallItem: React.FC<{ item: CallItem }> = ({ item }) => (
  <View style={styles.callItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />

    <View style={styles.callDetails}>
      <Text style={[styles.name, item.type === "missed" && styles.missedCall]}>
        {item.name}
      </Text>

      <View style={styles.callTypeContainer}>
        <MaterialCommunityIcons
          name={
            item.type === "incoming"
              ? "phone-incoming"
              : item.type === "outgoing"
              ? "phone-outgoing"
              : "phone-missed"
          }
          size={16}
          color={item.type === "missed" ? "red" : "#555"}
          style={styles.callIcon}
        />
        <Text style={styles.callType}>
          {item.type === "incoming"
            ? "Incoming"
            : item.type === "outgoing"
            ? "Outgoing"
            : "Missed"}
        </Text>
      </View>
    </View>

    <Text style={styles.date}>{item.date}</Text>

    <TouchableOpacity>
      <Ionicons name="information-circle-outline" size={20} color="#007AFF" />
    </TouchableOpacity>
  </View>
);

const CallsScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"All" | "Missed">("All");

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.toggle}>
            <TouchableOpacity
              onPress={() => setSelectedTab("All")}
              style={[
                styles.toggleButton,
                selectedTab === "All" && styles.activeToggle,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  selectedTab === "All" && styles.activeText,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab("Missed")}
              style={[
                styles.toggleButton,
                selectedTab === "Missed" && styles.activeToggle,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  selectedTab === "Missed" && styles.activeText,
                ]}
              >
                Missed
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="phone-plus-outline"
              size={28}
              color="#007AFF"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={
            selectedTab === "All"
              ? callsData
              : callsData.filter((c) => c.type === "missed")
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CallItem item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default CallsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  editText: { color: "#007AFF", fontSize: 16 },
  toggle: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
  },
  toggleButton: { padding: 6, paddingHorizontal: 15 },
  activeToggle: { backgroundColor: "#007AFF", borderRadius: 6 },
  toggleText: { fontSize: 14, color: "#007AFF" },
  activeText: { color: "#fff", fontWeight: "bold" },

  // Call list styles
  // callItem: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 10,
  //   borderBottomWidth: 1,
  //   borderColor: "#ddd",
  // },
  // avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  // callDetails: { flex: 1 },
  // name: { fontSize: 16, fontWeight: "bold" },
  // missedCall: { color: "red" },
  // callType: { color: "#777" },
  // date: { color: "#777", marginRight: 10 },

  // Tab Bar styles
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F6F6F6",
  },
  tabItem: { alignItems: "center" },
  tabLabel: { fontSize: 12, color: "#777", marginTop: 4 },
  activeTabLabel: { color: "#007AFF", fontWeight: "bold" },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  callDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  missedCall: {
    color: "red",
  },
  callTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callIcon: {
    marginRight: 5,
  },
  callType: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
});
