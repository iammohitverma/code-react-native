import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const iconHero = require("../../assets/images/discount-voucher.png");

const PromocodeScreen = ({ navigation }) => {
  // const goToLoginScreen = () => {
  //   navigation.navigate("Sign in");
  // };
  return (
    <>
      <Statusbar />
      <View style={[ThemeStyle.mainWrapper, ThemeStyle.MessageScreenWrap]}>
        <View style={[ThemeStyle.MessageScreenBox]}>
          <Image style={[ThemeStyle.iconHero]} source={iconHero} />
          <Text style={ThemeStyle.MessageScreenHdng}>
            Your don't have promocodes yet!
          </Text>
          <Text style={ThemeStyle.MessageScreenDesc}>
            Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum
          </Text>
        </View>

        <View style={[ThemeStyle.forGotBox, ThemeStyle.voucherFormBox]}>
          {/* Voucher Field */}
          <View style={[ThemeStyle.formLabel]}>
            <Text style={[ThemeStyle.labeltext]}>ENTER THE VOUCHER</Text>
            <TextInput
              style={[ThemeStyle.inputField]}
              placeholder="Enter your phone number"
              // onChangeText={newText => setText(newText)}
              // defaultValue={text}
            />
          </View>
          {/* Submit Button */}
          <View style={[ThemeStyle.formLabel]}>
            <TouchableOpacity
              style={ThemeStyle.GsMainButton}
              // onPress={verifyYourOTP}  // Trigger navigation on button press
            >
              <Text
                style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default PromocodeScreen;
