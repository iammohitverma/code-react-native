import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const iconHero = require("../../assets/images/account_created.png");

const AccountCreatedScreen = ({ navigation }) => {
  const goToLoginScreen = () => {
    navigation.navigate("Sign in");
  };
  return (
    <>
      <Statusbar />
      <View style={[ThemeStyle.mainWrapper, ThemeStyle.MessageScreenWrap]}>
        <View style={[ThemeStyle.MessageScreenBox]}>
          <Image style={[ThemeStyle.iconHero]} source={iconHero} />
          <Text style={ThemeStyle.MessageScreenHdng}>Account Created!</Text>
          <Text style={ThemeStyle.MessageScreenDesc}>
            Your account had beed created successfully.
          </Text>
          <TouchableOpacity
            style={ThemeStyle.GsMainButton}
            onPress={goToLoginScreen} // Trigger navigation on button press
          >
            <Text
              style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
            >
              SHOP NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AccountCreatedScreen;
