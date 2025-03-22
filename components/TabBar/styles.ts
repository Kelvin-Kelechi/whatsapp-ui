import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5F8F9",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 35,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabItem: {
    borderColor: "#00DEC4",
  },
  tabText: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  activeTabText: {
    color: "#00DEC4",
  },
});
export default styles;
