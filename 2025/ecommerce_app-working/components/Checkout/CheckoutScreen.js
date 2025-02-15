import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";
import { VikasStyle } from "../css/VikasStyle";
import axios from "axios"; // Import Axios for API calls
const ArrowRight = require("../../assets/images/arrow_right.png");

const CheckoutScreen = ({ navigation }) => {
  const [checkoutData, setCheckoutData] = useState([]);
  const [savedAddress, setSavedAddress] = useState(null);
  const [comment, setComment] = useState(""); // State to handle comment input
  const [loading, setLoading] = useState(false); // State for button loading

  const fetchData = async () => {
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);

    const checkoutItems = await AsyncStorage.getItem(`checkoutItems_${userId}`);
    const parsedCheckoutItems = JSON.parse(checkoutItems);
    setCheckoutData(parsedCheckoutItems);

    const savedAddressString = await AsyncStorage.getItem(
      `shipping_address_${userId}`
    );
    console.log(checkoutItems);
    console.log(savedAddressString);

    const savedAddressObj = JSON.parse(savedAddressString);
    setSavedAddress(savedAddressObj);
  };

  const placeOrder = async () => {
    try {
      setLoading(true);

      const userIdString = await AsyncStorage.getItem("userId");
      const userId = JSON.parse(userIdString);
      const token = await AsyncStorage.getItem("token");

      const formData = {
        name: savedAddress?.name || "",
        phone: savedAddress?.phone || "",
        zip: savedAddress?.zip || "",
        state: savedAddress?.state || "",
        city: savedAddress?.city || "",
        address: savedAddress?.address || "",
        locality: savedAddress?.locality || "",
        landmark: savedAddress?.landmark || "",
        subtotal: checkoutData.totalPrice || 0,
        discount: checkoutData.discount || 0,
        tax: checkoutData.tax || 0,
        total:
          checkoutData.totalPrice + checkoutData.tax - checkoutData.discount ||
          0,
        product_id: checkoutData.orderedProductsId?.join(",") || "",
        price: checkoutData.orderedProductsprice?.join(",") || "",
        quantity: checkoutData.orderedProductsqty?.join(",") || "",
        paymaent_mode: "cod",
      };

      const response = await axios.post(
        `https://shop.tmdemo.in/api/order/place/${userId}`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        Alert.alert("Success", "Order placed successfully!");
        navigation.navigate("OrderSuccessful");
      } else {
        navigation.navigate("OrderCancel");
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      navigation.navigate("OrderCancel");
      console.log(error);
      console.log("Failed to place the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView>
          <View
            style={[
              mvStyles.pt_20,
              mvStyles.pb_40,
              mvStyles.px_20,
              { flex: 1 },
            ]}
          >
            {/* My Order */}
            <View style={VikasStyle.BothSideText}>
              <Text style={VikasStyle.ProfileMenuHead}>My order</Text>
              <Text style={VikasStyle.ProfileMenuHead}>
                ${checkoutData.totalPrice}
              </Text>
            </View>
            <View style={[mvStyles.mt_10, mvStyles.expanOrderBox]}>
              {checkoutData.orderedProductsprice &&
                checkoutData.orderedProductsprice.map((item, index) => (
                  <View key={index} style={[mvStyles.flexRow, mvStyles.mb_10]}>
                    <Text style={{ flex: 1 }}>
                      {checkoutData.orderedProductsNames[index]}
                    </Text>
                    <Text style={{ textAlign: "right" }}>
                      {checkoutData.orderedProductsqty[index]} x ${item}
                    </Text>
                  </View>
                ))}
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Discount</Text>
                <Text style={{ textAlign: "right" }}> $0</Text>
              </View>
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Delivery</Text>
                <Text style={{ textAlign: "right", color: "#00824B" }}>
                  Free
                </Text>
              </View>
            </View>

            {/* Shipping Details */}
            <TouchableOpacity
              style={[
                ThemeStyle.ProfileMenuItem,
                { marginTop: 20, paddingBottom: 20 },
              ]}
              onPress={() => navigation.navigate("Shipping Details")}
            >
              <View style={VikasStyle.inputFieldWrap}>
                <Text style={VikasStyle.ProfileMenuHead}>Shipping details</Text>
                {savedAddress && (
                  <Text style={VikasStyle.ProfileMenuText}>
                    {savedAddress.name}
                  </Text>
                )}
              </View>
              <Image
                style={[ThemeStyle.ProfileMenuArrow]}
                source={ArrowRight}
              />
            </TouchableOpacity>

            {/* Payment Method */}
            <TouchableOpacity
              style={[ThemeStyle.ProfileMenuItem, { paddingVertical: 15 }]}
              onPress={() => navigation.navigate("Payment Method")}
            >
              <View style={VikasStyle.inputFieldWrap}>
                <Text style={VikasStyle.ProfileMenuHead}>Payment method</Text>
                <Text style={VikasStyle.ProfileMenuText}>Cash on delivery</Text>
              </View>
            </TouchableOpacity>

            {/* Comment Field */}
            <View style={[ThemeStyle.formBox, { width: "100%" }]}>
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>Comment</Text>
                <TextInput
                  style={[
                    ThemeStyle.inputField,
                    { height: 100, textAlignVertical: "top" },
                  ]}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={setComment}
                  value={comment}
                />
              </View>
            </View>

            {/* Checkout Button */}
            <View style={[mvStyles.flexRow, { flex: 1 }]}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={placeOrder}
                disabled={loading}
              >
                <Text
                  style={[
                    mvStyles.primaryBtn,
                    {
                      color: "#fff",
                      backgroundColor: loading ? "gray" : "#000",
                    },
                  ]}
                >
                  {loading ? "Placing Order..." : "Confirm order"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CheckoutScreen;
