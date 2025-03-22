import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const colors = ["#FF7F7F", "#FFB74D", "#4CAF50", "#64B5F6", "#9C27B0"];

const StatusScreen = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState(colors[0]);
  const router = useRouter();
  const changeColor = () => {
    const nextColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
    setBgColor(nextColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar style="light" />

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}
      >
        <Ionicons name="close" size={24} color="#fff" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type a status"
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={text}
        onChangeText={setText}
      />

      <View style={styles.toolbar}>
        <TouchableOpacity>
          <Text style={styles.textButton}>T</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeColor}>
          <Ionicons name="color-palette-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  input: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    width: "100%",
  },
  toolbar: {
    position: "absolute",
    top: 50,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textButton: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default StatusScreen;
