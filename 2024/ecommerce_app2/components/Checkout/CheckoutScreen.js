import React from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";
import { VikasStyle } from "../css/VikasStyle";
const iconHero = require("../../assets/images/excellence.png");
const ArrowRight = require("../../assets/images/arrow_right.png");

const CheckoutScreen = ({ navigation }) => {
  // const goToLoginScreen = () => {
  //   navigation.navigate("Sign in");
  // };
  return (
    <>
      <ScrollView>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
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
              <Text style={VikasStyle.ProfileMenuHead}>$632.7</Text>
            </View>
            <View style={[mvStyles.mt_10, mvStyles.expanOrderBox]}>
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Draper Sofa, grey</Text>
                <Text style={{ textAlign: "right" }}>1 x $649.00</Text>
              </View>
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Draper Sofa, grey</Text>
                <Text style={{ textAlign: "right" }}>1 x $649.00</Text>
              </View>
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Discount</Text>
                <Text style={{ textAlign: "right" }}>- $70.3</Text>
              </View>
              <View style={[mvStyles.flexRow, mvStyles.mb_10]}>
                <Text style={{ flex: 1 }}>Delivery</Text>
                <Text style={{ textAlign: "right", color: "#00824B" }}>
                  Free
                </Text>
              </View>
            </View>

            <View style={ThemeStyle.ProfileMenuListing}>
              {/* Shiping Details */}
              <TouchableOpacity
                style={[ThemeStyle.ProfileMenuItem, { paddingBottom: 20 }]}
                onPress={() => navigation.navigate("ShippingDetails")} // Pass Screen name
              >
                <View style={VikasStyle.inputFieldWrap}>
                  <Text style={VikasStyle.ProfileMenuHead}>
                    Shipping details
                  </Text>
                  <Text style={VikasStyle.ProfileMenuText}>
                    8000 S Kirkland Ave, Chicago, IL 6065...
                  </Text>
                </View>
                <Image
                  style={[ThemeStyle.ProfileMenuArrow]}
                  source={ArrowRight}
                />
              </TouchableOpacity>

              {/* Payment Method */}
              <TouchableOpacity
                style={[ThemeStyle.ProfileMenuItem, { paddingVertical: 15 }]}
                onPress={() => navigation.navigate("PaymentMethod")} // Pass Screen name
              >
                <View View style={VikasStyle.inputFieldWrap}>
                  <Text style={VikasStyle.ProfileMenuHead}>Payment method</Text>
                  <Text style={VikasStyle.ProfileMenuText}>
                    7741 ******** 6644
                  </Text>
                </View>
                <Image
                  style={[ThemeStyle.ProfileMenuArrow]}
                  source={ArrowRight}
                />
              </TouchableOpacity>
            </View>

            <View style={[ThemeStyle.formBox, { width: "100%" }]}>
              {/* Comment field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>Comment</Text>
                <TextInput
                  style={[
                    ThemeStyle.inputField,
                    { height: 100, textAlignVertical: "top" },
                  ]}
                  multiline={true}
                  numberOfLines={4}
                  // onChangeText={(newText) => setText(newText)} // Handler for text input
                  // value={text} // Current value of the TextArea
                />
              </View>
            </View>

            {/* Checkout button */}
            <View style={[mvStyles.flexRow, { flex: 1 }]}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Text style={[mvStyles.primaryBtn, { color: "#fff" }]}>
                  Confirm order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default CheckoutScreen;
