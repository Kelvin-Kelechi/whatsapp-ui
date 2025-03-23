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
    // paddingHorizontal: 16,
    paddingVertical: 12,
  },
  separator: { marginTop: 40 },
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
    // marginLeft: -60,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 13,
    color: "#8E8E93",
    paddingHorizontal: 16,
    paddingTop: 16,
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
  valueText: {
    fontSize: 17,
    color: "#8E8E93",
  },
  subText: {
    fontSize: 13,
    color: "#8E8E93",
    paddingHorizontal: 16,
  },
  resetButton: {
    backgroundColor: "#FFF",
    padding: 16,
    // alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7CC",
  },
  resetText: {
    fontSize: 17,
    color: "#3C3C4399",
  },
  grayBox: {
    backgroundColor: "#F7F7F7",
    padding: 16,
    alignItems: "center",
  },
  grayText: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
});
