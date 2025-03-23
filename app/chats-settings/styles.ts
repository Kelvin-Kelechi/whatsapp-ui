import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#007AFF",
    fontSize: 17,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -60,
  },
  optionContainer: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  subText: {
    fontSize: 13,
    color: "gray",
    marginTop: 5,
    marginHorizontal: 15,
  },
  separator: { marginTop: 40 },
  actionsContainer: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 20,
  },
  archiveText: {
    color: "#007AFF",
    fontSize: 16,
    marginBottom: 10,
  },
  clearText: {
    color: "#FF3B30",
    fontSize: 16,
    marginBottom: 10,
  },
  deleteText: {
    color: "#FF3B30",
    fontSize: 16,
  },
});
