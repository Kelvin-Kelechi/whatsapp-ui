import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { paddingHorizontal: 16, paddingBottom: 10, backgroundColor: "#fff" },
  doneButton: {},
  doneText: { color: "#007AFF", fontSize: 17, fontWeight: "600" },
  headerTitle: { fontSize: 32, fontWeight: "bold", marginTop: 20 },
  chatItem: {
    flexDirection: "row",
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
  swipeActions: { flexDirection: "row", alignItems: "center" },
  moreButton: {
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  archiveButton: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  actionText: { color: "#fff", fontWeight: "bold" },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  modalOption: {
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalText: { fontSize: 18, color: "#007AFF" },
  destructiveText: { color: "red" },
  cancelButton: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 8,
    borderRadius: 12,
  },
  cancelText: { fontSize: 18, color: "#007AFF", fontWeight: "bold" },
});