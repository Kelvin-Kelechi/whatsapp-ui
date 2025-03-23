import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,

} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { callsData } from "@/data";
import { styles } from "./styles";
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


