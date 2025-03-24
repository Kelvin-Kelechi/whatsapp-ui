import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#007AFF",
    fontSize: 17,
    // marginLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -60,
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  separator: { marginTop: 40 },
  warningContainer: {
    backgroundColor: "#F7F7F7",
    padding: 16,
    alignItems: "center",
  },
  warningText: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#007AFF",
    textAlign: "center",
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 13,
    color: "#8E8E93",
    paddingHorizontal: 16,
    // paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7CC",
  },
  listText: {
    fontSize: 17,
    color: "#000",
  },
  noteText: {
    fontSize: 17,
    color: "#8E8E93",
  },
  subText: {
    fontSize: 13,
    color: "#8E8E93",
    marginHorizontal: 16,
  },
  resetButton: {
    padding: 16,
    alignItems: "center",
  },
  resetText: {
    fontSize: 17,
    color: "#FF3B30",
  },
});
