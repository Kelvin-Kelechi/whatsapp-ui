import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  privacyText: {
    fontSize: 16,
    color: "#007AFF",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: -60,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingVertical: 15,
    marginTop: 20,
  },
  statusInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addIcon: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  statusText: {
    marginLeft: 12,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  cameraButton: {
    backgroundColor: "#EDEDFF",
    padding: 6,
    borderRadius: 50,
  },
  noUpdates: {
    textAlign: "center",
    color: "gray",
    marginTop: 40,
    fontSize: 14,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
});
