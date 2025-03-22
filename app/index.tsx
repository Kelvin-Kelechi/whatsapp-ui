import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const countryOptions = [
  { label: "United States", value: "+1", length: 10 },
  { label: "Canada", value: "+1", length: 10 },
  { label: "United Kingdom", value: "+44", length: 10 },
  { label: "India", value: "+91", length: 10 },
];

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [country, setCountry] = useState("United States");
  const [maxLength, setMaxLength] = useState(10);
  const router = useRouter();
  const handleCountryChange = (value: string) => {
    const selectedCountry = countryOptions.find((c) => c.value === value);
    if (selectedCountry) {
      setCountryCode(selectedCountry.value);
      setCountry(selectedCountry.label);
      setMaxLength(selectedCountry.length);
      setPhoneNumber("");
    }
  };

  const isPhoneNumberValid = phoneNumber.length === maxLength;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Phone number</Text>
          <TouchableOpacity style={styles.doneButton} activeOpacity={1}>
            <Text
              style={[
                styles.doneText,
                { color: isPhoneNumberValid ? "#007AFF" : "#D1D1D6" },
              ]}
              disabled={!isPhoneNumberValid}
              onPress={() => router.push("/chats")}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Please confirm your country code and enter your phone number
        </Text>

        <TouchableOpacity style={styles.countrySelector}>
          <RNPickerSelect
            onValueChange={handleCountryChange}
            items={countryOptions.map(({ label, value }) => ({
              label,
              value,
            }))}
            placeholder={{ label: country, value: countryCode }}
            style={pickerSelectStyles}
          />
        </TouchableOpacity>

      
        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>{countryCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={maxLength}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 5,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  doneButton: {
    position: "absolute",
    right: 0,
    fontSize: 16,
  },
  doneText: {
    // color: "#007AFF",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginTop: 10,
  },
  countrySelector: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  countryCode: {
    fontSize: 30,
    marginRight: 10,
  },
  phoneInput: {
    fontSize: 30,
    flex: 1,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    color: "#007AFF",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    color: "#007AFF",
  },
};

export default PhoneNumberScreen;
