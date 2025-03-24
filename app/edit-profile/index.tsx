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
import { styles } from "./styles";
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


