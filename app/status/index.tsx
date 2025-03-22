import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const StatusScreen = () => {
  const router = useRouter();

const openCamera = async () => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (!permissionResult.granted) {
    alert("Camera access is required to take photos.");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,  
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    console.log("Image URI:", result.assets[0].uri);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.privacyText}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Status</Text>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.statusInfo}>
          <View style={styles.profileWrapper}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.addIcon}>
              <Icon name="add-circle" size={22} color="#007AFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.statusText}>
            <Text style={styles.statusTitle}>My Status</Text>
            <Text style={styles.statusSubtitle}>Add to my status</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
            <Icon name="camera" size={24} color="#007AFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => router.push("/status-text")}
          >
            <MaterialCommunityIcons name="pencil" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.noUpdates}>No recent updates to show right now.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  privacyText: {
    fontSize: 16,
    color: "#007AFF",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: -60,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingVertical: 15,
    marginTop: 20,
  },
  statusInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addIcon: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  statusText: {
    marginLeft: 12,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  cameraButton: {
    backgroundColor: "#EDEDFF",
    padding: 6,
    borderRadius: 50,
  },
  noUpdates: {
    textAlign: "center",
    color: "gray",
    marginTop: 40,
    fontSize: 14,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
});

export default StatusScreen;
