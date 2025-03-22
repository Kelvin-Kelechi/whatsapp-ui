import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const EditContactScreen = () => {
  const { contact } = useLocalSearchParams();
  const router = useRouter();
  const contactString = Array.isArray(contact) ? contact[0] : contact;
  const contactData = contactString
    ? JSON.parse(decodeURIComponent(contactString))
    : null;
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            // borderBottomWidth: 1,
            // borderColor: "#ddd",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ color: "#007AFF", fontSize: 18 }}>Cancel</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Edit Contact</Text>
          <TouchableOpacity>
            <Text style={{ color: "#ccc", fontSize: 18 }}>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 5 }}>
              Name
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#ddd",
                paddingBottom: 10,
              }}
            >
              <TextInput
                style={{ fontSize: 18, paddingVertical: 8 }}
                placeholder="First Name"
                value={`${contactData?.fullName?.first}`}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#ddd",
                paddingBottom: 10,
                marginTop: 10,
              }}
            >
              <TextInput
                style={{ fontSize: 18, paddingVertical: 8 }}
                placeholder="Last Name"
                value={`${contactData?.fullName?.last}`}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 5 }}>
              Phone
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}>New Zealand</Text>
              <MaterialIcons name="chevron-right" size={22} color="gray" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "#007AFF" }}>mobile</Text>
              <MaterialIcons name="chevron-right" size={22} color="gray" />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#ddd",
                paddingBottom: 10,
                marginTop: 10,
              }}
            >
              <TextInput
                style={{ fontSize: 18, paddingVertical: 8 }}
                placeholder="Phone Number"
                value={`${contactData?.phone}`}
              />
            </View>
          </View>

          <TouchableOpacity style={{ padding: 15 }}>
            <Text style={{ color: "#007AFF", fontSize: 18 }}>more fields</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 15 }}>
            <Text style={{ color: "red", fontSize: 18 }}>Delete Contact</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditContactScreen;
