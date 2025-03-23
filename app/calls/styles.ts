import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  editText: { color: "#007AFF", fontSize: 16 },
  toggle: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#007AFF",
    borderWidth: 1,
  },
  toggleButton: { padding: 6, paddingHorizontal: 15 },
  activeToggle: { backgroundColor: "#007AFF", borderRadius: 6 },
  toggleText: { fontSize: 14, color: "#007AFF" },
  activeText: { color: "#fff", fontWeight: "bold" },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F6F6F6",
  },
  tabItem: { alignItems: "center" },
  tabLabel: { fontSize: 12, color: "#777", marginTop: 4 },
  activeTabLabel: { color: "#007AFF", fontWeight: "bold" },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  callDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  missedCall: {
    color: "red",
  },
  callTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callIcon: {
    marginRight: 5,
  },
  callType: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
});