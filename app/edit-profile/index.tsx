import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const EditProfile = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState("Sabohiddin");
  const [phone] = useState("+998 90 943 32 00");
  const [about, setAbout] = useState("Digital goodies designer - Pixsellz");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={22} color="#007AFF" />
            <Text style={styles.backText}>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
            <Image
              source={{
                uri:
                  profileImage ||
                  "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={styles.profileImage}
            />
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.textWrapper}>
            <Text style={styles.subText}>
              Enter your name and add an optional profile picture
            </Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <Text style={styles.label}>PHONE NUMBER</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.staticInput}>{phone}</Text>
        </View>

        <Text style={styles.label}>ABOUT</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={about}
            onChangeText={setAbout}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backText: {
    color: "#007AFF",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: -60,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  imageWrapper: {
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editText: {
    color: "#007AFF",
    fontSize: 16,
    marginTop: 4,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  inputContainer: {
    backgroundColor: "#F6F6F6",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  staticInput: {
    fontSize: 16,
    color: "#000",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    marginTop: 12,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F6F6F6",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 32,
  },
  tabItem: { alignItems: "center" },
  tabText: { fontSize: 12, color: "#000", marginTop: 4 },
  activeTabText: { color: "#007AFF", fontWeight: "bold" },
});
