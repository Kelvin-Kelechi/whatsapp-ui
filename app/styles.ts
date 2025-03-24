import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
