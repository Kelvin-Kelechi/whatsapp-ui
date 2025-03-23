import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F6F6F6",
  },
  editText: {
    color: "#007AFF",
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  chatDetails: { flex: 1 },
  chatHeader: { flexDirection: "row", justifyContent: "space-between" },
  name: { fontSize: 16, fontWeight: "bold" },
  date: { fontSize: 12, color: "#666" },
  message: { fontSize: 14, color: "#444", marginTop: 3 },
  checkboxContainer: {
    marginRight: 10,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
  actionSheet: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  sheetItem: {
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  sheetText: {
    fontSize: 16,
    color: "#007AFF",
  },
  deleteText: {
    color: "red",
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 10,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cancelText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
});