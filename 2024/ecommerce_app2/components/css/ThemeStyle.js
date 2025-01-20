import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { StyleSheet } from "react-native";

const ThemeStyle = StyleSheet.create({
  // aditya css
  container: {
    flex: 1,
    backgroundColor: "#F8F8F9",
  },
  imageHero: {
    width: "100%",
    height: vh(60),
  },
  GetStartedWrap: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  GetStartedBox: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
    display: "flex",
    alignItems: "center",
  },
  GSmainHeading: {
    fontSize: 28,
    fontWeight: 800,
    color: "#192639",
    width: 200,
    textAlign: "center",
    fontFamily: "Hind-Bold",
  },
  GSmainDesc: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    color: "#576C7B",
    marginTop: 15,
    lineHeight: 18,
    fontFamily: "Hind-Light",
  },
  GsMainButton: {
    backgroundColor: "#192639",
    marginTop: 15,
    color: "#fff",
    borderRadius: 5,
    paddingVertical: 4,
  },
  GsMainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Hind-Bold",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 250,
    textAlign: "center",
  },
  LSmainButton: {
    width: "100%",
  },
  LightBgButton: {
    color: "#192639",
    backgroundColor: "#fff",
  },
  LightBgButtonText: {
    color: "#192639",
  },
  mt_100: {
    marginTop: 100,
  },
  loginWrapper: {
    backgroundColor: "#fff",
    // paddingVertical: 15,
    // paddingHorizontal: 25,
    height: "100%",
    width: "100%",
  },
  forGotWrapper: {
    backgroundColor: "#fff",
    height: "100%",
  },
  forGotBox: {
    marginTop: 60,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  LSheading: {
    color: "#192639",
    fontSize: 32,
    fontFamily: "Hind-Bold",
    textAlign: "center",
  },
  LSdesc: {
    color: "#576C7B",
    fontSize: 16,
    fontFamily: "Hind-Light",
    textAlign: "center",
  },
  testLeft: {
    textAlign: "left",
  },
  formBox: {
    marginTop: 10,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  formLabel: {
    position: "relative",
    marginTop: 15,
    width: "100%",
  },
  labeltext: {
    fontSize: 14,
    position: "absolute",
    top: -15,
    left: 10,
    backgroundColor: "#fff",
    zIndex: 99,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#576C7B",
    fontFamily: "Hind-Light",
  },
  inputField: {
    width: "100%",
    borderColor: "#EAEDF4",
    borderWidth: 1,
    borderStyle: "solid",
    height: 55,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: "#576C7B",
    fontSize: 14,
    fontFamily: "Hind-Light",
  },
  forGotText: {
    width: "100%",
    textAlign: "right",
    fontSize: 16,
    color: "#192639",
    fontFamily: "Hind-Light",
  },
  dhaLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dhaLabelText: {
    // display:'inline',
    fontSize: 14,
    color: "#576C7B",
  },
  dhaLabelLightText: {
    color: "#192639",
  },
  d_flex: {
    display: "flex",
    flexDirection: "column",
  },
  MessageScreenWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 25,
    height: "100%",
    width: "100%",
  },
  iconHero: {
    width: 100,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  MessageScreenHdng: {
    color: "#192639",
    fontSize: 22,
    fontWeight: 600,
    fontFamily: "Hind-Bold",
    textAlign: "center",
    width: 200,
    lineHeight: 28,
    marginBottom: 10,
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
  formLabelOTP: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputFieldOTP: {
    width: "19%",
    textAlign: "center",
  },
  voucherFormBox: {
    marginTop: 10,
  },
  bgWhite: {
    backgroundColor: "#ffffff",
  },
  ProfileContainer: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    marginBottom: 50,
  },
  ProfileImage: {
    position: "relative",
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconEditProfile: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 40,
    height: 40,
  },
  ProfileName: {
    fontSize: 20,
    fontWeight: 800,
    color: "#192639",
    textAlign: "center",
    fontFamily: "Hind-Bold",
  },
  ProfileEmail: {
    fontSize: 14,
    fontWeight: 400,
    color: "#576C7B",
    textAlign: "center",
    fontFamily: "Hind-Light",
  },
  ProfileMenuListing: {
    width: "100%",
    marginTop: 30,
  },
  ProfileMenuItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#EAEDF4",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  border_0: {
    borderBottomWidth: 0,
  },
  ProfileMenuIcon: {
    width: "20%",
    height: 50,
    objectFit: "contain",
    marginTop: 10,
    marginBottom: 10,
  },
  ProfileMenuText: {
    width: "70%",
    color: "#192639",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Hind-Normal",
    marginTop: 10,
    marginBottom: 10,
  },
  ProfileMenuArrow: {
    width: "10%",
    height: 15,
    objectFit: "contain",
    marginTop: 10,
    marginBottom: 10,
  },
  SignOutPopUp: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SignOutPopUpBox: {
    backgroundColor: "#fff",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 7,
  },
  SignOutPopHeading: {
    color: "#192639",
    fontSize: 22,
    fontWeight: 600,
    fontFamily: "Hind-Normal",
    marginTop: 0,
    marginBottom: 10,
    textAlign: "center",
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoutButtonsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  spacingBet: {
    marginLeft: 5,
    marginRight: 5,
  },
  m0: {
    marginTop: 0,
  },
  loaderScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 100,
  },
  ErrorMsg: {
    width: "100%",
    backgroundColor: "#f8d7da",
    paddingHorizontal: 15,
    paddingVertical: 8,
    position: "relative",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#f5c6cb",
    color: "#721c24",
    fontSize: 13,
    fontFamily: "DMSans-SemiBold",
  },
});

export default ThemeStyle;
