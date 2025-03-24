import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backText: {
    color: "#007AFF",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: -60,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  imageWrapper: {
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editText: {
    color: "#007AFF",
    fontSize: 16,
    marginTop: 4,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  inputContainer: {
    backgroundColor: "#F6F6F6",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  staticInput: {
    fontSize: 16,
    color: "#000",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    marginTop: 12,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F6F6F6",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 32,
  },
  tabItem: { alignItems: "center" },
  tabText: { fontSize: 12, color: "#000", marginTop: 4 },
  activeTabText: { color: "#007AFF", fontWeight: "bold" },
});
