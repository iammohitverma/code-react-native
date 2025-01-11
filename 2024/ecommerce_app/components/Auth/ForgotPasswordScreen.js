import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

const ForgotPassScreen = ({ navigation }) => {
  const goToResetPassScreen = () => {
    navigation.navigate("Reset Password");
  };

  return (
    <>
      <Statusbar />
      <SafeAreaView style={[ThemeStyle.mainWrapper, ThemeStyle.forGotWrapper]}>
        <ScrollView>
          <View style={[ThemeStyle.forGotBox]}>
            <View>
              <Text style={[ThemeStyle.LSdesc, ThemeStyle.testLeft]}>
                Please enter your email address. You will receive a link to
                create a new password via email.
              </Text>
            </View>

            {/* Email Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Email</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter you email"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Submit Button */}
            <View style={[ThemeStyle.formLabel]}>
              <TouchableOpacity
                style={ThemeStyle.GsMainButton}
                onPress={goToResetPassScreen} // Trigger navigation on button press
              >
                <Text
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
                >
                  SEND
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ForgotPassScreen;
