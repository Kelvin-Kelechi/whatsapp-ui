import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useLocalSearchParams, useRouter } from "expo-router";
type MaterialIconNames = "image" | "star" | "search";
const ContactInfoScreen = () => {
  const { contact } = useLocalSearchParams();
  const router = useRouter();
  const contactString = Array.isArray(contact) ? contact[0] : contact;
  const contactData = contactString
    ? JSON.parse(decodeURIComponent(contactString))
    : null;
  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            borderBottomWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={22} color="#007AFF" />
            <Text style={{ color: "#007AFF", fontSize: 18 }}>
              {contactData.name}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Contact Info
          </Text>
          <TouchableOpacity
            onPress={() =>
              router.push(
                `/edit-contact?contact=${encodeURIComponent(
                  JSON.stringify(contactData)
                )}`
              )
            }
          >
            <Text style={{ color: "#007AFF", fontSize: 18 }}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: contactData.image }}
          style={{ width: "100%", height: 300 }}
        />

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {contactData.name}
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                {contactData.phone}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#F2F4F6",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <FontAwesome name="comment" size={20} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#F2F4F6",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <FontAwesome name="video-camera" size={20} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#F2F4F6",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <FontAwesome name="phone" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ fontSize: 16, marginTop: 10 }}>
            Design adds value faster, than it adds cost
          </Text>

          <Text style={{ fontSize: 14, color: "gray", marginTop: 5 }}>
            {contactData?.date || "Dec 18, 2018"}
          </Text>
        </View>

        <View style={{ borderTopWidth: 1, borderColor: "#ddd" }}>
          <OptionRow
            icon="image"
            text="Media, Links, and Docs"
            iconBgColor="#3396FD"
            detail="12"
          />
          <OptionRow
            icon="star"
            text="Starred Messages"
            iconBgColor="#FBB500"
            detail="None"
          />
          <OptionRow icon="search" text="Chat Search" iconBgColor="#FE8D35" />
          <OptionRow icon="volume-mute" text="Mute" iconBgColor="#4BD763" />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const OptionRow = ({
  icon,
  text,
  detail,
  iconBgColor = "#007AFF", // Default icon background color
}: {
  icon: MaterialIconNames;
  text: string;
  detail?: string;
  iconBgColor?: string;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 1,
      borderColor: "#ddd",
    }}
  >
    <View
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: iconBgColor,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
      }}
    >
      <MaterialIcons name={icon} size={20} color="#fff" />
    </View>

    <Text style={{ flex: 1, fontSize: 16 }}>{text}</Text>
    {detail && <Text style={{ fontSize: 16, color: "gray" }}>{detail}</Text>}
  </View>
);

export default ContactInfoScreen;
