import { StyleSheet } from "react-native";

export const VikasStyle = StyleSheet.create({
  MessageScreenWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  MessageScreenBox: {
    width: "100%",
  },
  MessageScreenHdng: {
    color: "#192639",
    fontSize: 22,
    fontWeight: 600,
    fontFamily: "Hind-Bold",
    textAlign: "center",
    width: 200,
    lineHeight: 28,
    // marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  MessageScreenDesc: {
    color: "#576C7B",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Hind-Light",
    textAlign: "center",
  },
  iconHero: {
    width: 100,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 40,
  },
  timelineContainer: {
    marginTop: 20,
    width: "100%",
    // flex: 1,
  },
  stepContainer: {
    width: 250,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 0,
    paddingHorizontal: 25,
  },
  circleContainer: {
    alignItems: "center",
    marginTop: 2,
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#EAEDF4",
    backgroundColor: "white",
    elevation: 1,
  },
  activeCircle: {
    width: 20,
    height: 20,
    borderColor: "#EAEDF4",
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 5,
    // elevation: 5,
  },
  line: {
    width: 2,
    height: 45,
    backgroundColor: "#D3D3D3",
    marginTop: 0,
  },
  title: {
    color: "#192639",
    fontSize: 16,
    fontFamily: "Hind-Bold",
  },
  description: {
    color: "#576C7B",
    fontSize: 14,
    fontFamily: "Hind-Light",
  },
  inputFieldWrap: {
    width: "90%",
  },
  ProfileMenuHead: {
    color: "#192639",
    fontSize: 18,
    fontFamily: "Hind-Bold",
  },
  ProfileMenuText: {
    color: "#576C7B",
    fontSize: 14,
    fontFamily: "Hind-Light",
  },
  BothSideText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
});
