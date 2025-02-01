import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const iconHero = require("../../assets/images/lockIcon.png");

const ResetDoneScreen = ({ navigation }) => {
  const goToLoginScreen = () => {
    navigation.navigate("Sign in");
  };
  return (
    <>
      <Statusbar />
      <View style={[ThemeStyle.mainWrapper, ThemeStyle.MessageScreenWrap]}>
        <View style={[ThemeStyle.MessageScreenBox]}>
          <Image style={[ThemeStyle.iconHero]} source={iconHero} />
          <Text style={ThemeStyle.MessageScreenHdng}>
            Your password has been reset!
          </Text>
          <Text style={ThemeStyle.MessageScreenDesc}>
            Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum
          </Text>
          <TouchableOpacity
            style={ThemeStyle.GsMainButton}
            onPress={goToLoginScreen} // Trigger navigation on button press
          >
            <Text
              style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
            >
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ResetDoneScreen;
