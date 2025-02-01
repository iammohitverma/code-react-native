import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { StyleSheet } from "react-native";

export const mvStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  screenWrapper: {
    flex: 1,
    padding: 15,
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  splashWrapper: {
    flex: 1,
    backgroundColor: "#eaedf4",
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  aic: {
    alignItems: "center",
  },
  space_between: {
    justifyContent: "space-between",
  },
  p_15: {
    padding: 15,
  },
  p_20: {
    padding: 20,
  },
  br_10: {
    borderRadius: 10,
  },
  headerWrap: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    backgroundColor: "#fff",
  },
  banner: {
    minHeight: 250,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#EBF2FF",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  adBanner: {
    minHeight: 100,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#EBF2FF",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  primaryColor: {
    color: "#192639",
  },
  pt_40: {
    paddingTop: 40,
  },
  pb_40: {
    paddingBottom: 40,
  },
  py_40: {
    paddingVertical: 40,
  },
  pt_20: {
    paddingTop: 20,
  },
  pb_20: {
    paddingBottom: 20,
  },
  pt_40: {
    paddingTop: 40,
  },
  pb_40: {
    paddingBottom: 40,
  },
  py_20: {
    paddingVertical: 20,
  },
  px_20: {
    paddingHorizontal: 20,
  },
  px_10: {
    paddingHorizontal: 10,
  },
  mb_0: {
    marginBottom: 0,
  },
  mt_10: {
    marginTop: 10,
  },
  mb_10: {
    marginBottom: 10,
  },
  mt_15: {
    marginTop: 15,
  },
  mb_15: {
    marginBottom: 15,
  },
  mb_20: {
    marginBottom: 20,
  },
  mb_40: {
    marginBottom: 40,
  },
  mr_10: {
    marginRight: 10,
  },
  mr_15: {
    marginRight: 15,
  },
  fs_14_400: {
    fontSize: 14,
    color: "#192639",
    fontFamily: "Hind-Regular",
    marginBottom: 5,
  },
  fs_16_400: {
    fontSize: 16,
    color: "#192639",
    fontFamily: "Hind-Regular",
    marginBottom: 5,
  },
  fw_600: {
    fontFamily: "Hind-SemiBold",
  },
  fs_18_600: {
    fontSize: 18,
    color: "#192639",
    fontFamily: "Hind-SemiBold",
    marginBottom: 5,
  },
  fs_22_600: {
    fontSize: 22,
    color: "#192639",
    fontFamily: "Hind-SemiBold",
    marginBottom: 5,
  },
  textCenter: {
    textAlign: "center",
  },
  textWhite: {
    color: "#ffffff",
  },
  whiteBtn: {
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    color: "#192639",
    marginTop: 5,
    fontFamily: "Hind-SemiBold",
    borderRadius: 6,
  },
  categoriesWrap: {
    paddingHorizontal: 20,
  },
  imageBox: {
    backgroundColor: "#F6F8FB",
    marginBottom: 5,
    // flexGrow: 1,
  },
  br_50: {
    borderRadius: "50%",
  },
  imageFull: {
    width: "100%",
    height: "100%",
  },
  w_100px: {
    width: 100,
  },
  h_100px: {
    height: 100,
  },
  w_200px: {
    width: 200,
  },
  h_200px: {
    height: 200,
  },
  w_160px: {
    width: 160,
  },
  h_160px: {
    height: 160,
  },
  productBtns: {
    top: 0,
    right: 0,
  },
  productBtn: {
    backgroundColor: "#F6F8FB",
    padding: 7,
    marginBottom: 5,
    elevation: 2,
    marginLeft: "auto",
  },
  borderBtm: {
    borderColor: "#EAEDF4",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 15,
  },
  drawerStyle: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: vh(100),
  },
  drawerItem: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    color: "#192639",
    fontFamily: "Hind-SemiBold",
  },
  swiperWrapper: {
    height: "380",
  },
  swiperSlide: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  swiperDotStyle: {
    backgroundColor: "#caced4",
    width: 10,
    height: 10,
  },
  productBanner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F8FB",
  },
  productDetailsTop: {},
  price: {
    marginTop: 7,
  },
  qtyWrap: {
    marginTop: 20,
    zIndex: 1,
  },
  qtyBtn: {
    width: 50,
    height: 50,
    fontSize: 20,
    color: "#192639",
    backgroundColor: "#F6F8FB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  qtyBtnSm: {
    width: 50,
    height: 40,
    fontSize: 14,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  clrFieldParent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  clrField: {
    // width: 60,
  },
  clrLabel: {
    fontSize: 16,
    color: "#192639",
    marginRight: 10,
    fontFamily: "Hind-Regular",
  },
  clrInput: {
    position: "relative",
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "grey",
    marginRight: 10,
  },
  selectedColor: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    borderWidth: 2,
    elevation: 2,
  },
  productDetailsBottom: {
    marginTop: 40,
  },
  primaryBtn: {
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: "#192639",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
    marginTop: 20,
    display: "inline-block",
    textTransform: "uppercase",
  },
  primaryBtnGrey: {
    fontSize: 16,
    color: "#192639",
    backgroundColor: "#F6F8FB",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
    marginTop: 20,
    display: "inline-block",
    textTransform: "uppercase",
  },
  primaryBtnGreyActive: {
    color: "#ffffff",
    backgroundColor: "#192639",
  },
  w_100: {
    flex: 1,
    width: "100%",
  },
  iconSmall: {
    width: 20,
    height: 20,
    objectFit: "contain",
    marginRight: 10,
  },
  expanOrderBox: {
    backgroundColor: "#F6F8FB",
    padding: 20,
    elevation: 1.5,
  },
  Delivered: {
    color: "#00824B",
  },
  Shipping: {
    color: "#FFBE00",
  },
  Cancelled: {
    color: "#FF4370",
  },
  copyBtn: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },
  mb_0: {
    marginBottom: 0,
  },
  paymentCard: {
    position: "relative",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#192639",
  },
  w_90: {
    width: "90%",
    margin: "auto",
  },
  circleWrap: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  circleInner: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    backgroundColor: "#FF4370",
  },
  deleteIcon: {
    position: "absolute",
    top: -15,
    right: -15,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  fullScreenWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    overflow: "scroll",
  },
  address_icon: {
    width: 50,
    height: 50,
    marginRight: 100,
  },
  editIcon: {
    width: 50,
    height: 50,
  },
  w_15: {
    width: "15%",
  },
  w_65: {
    width: "65%",
  },
  heightCover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: vw(100),
    height: vh(75),
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9,
  },
  cartItemsCount: {
    position: "absolute",
    top: -7,
    right: -7,
    width: 20,
    height: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    zIndex: 1,
  },
  cartItemsCountText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Hind-SemiBold",
  },
});
