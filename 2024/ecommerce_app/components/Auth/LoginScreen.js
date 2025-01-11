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

const LoginScreen = ({ navigation }) => {
  const goToInside = () => {
    navigation.navigate("Home");
  };
  const goToForgotPassScreen = () => {
    navigation.navigate("Forgot Password");
  };
  const goToRegisterScreen = () => {
    navigation.navigate("Sign Up");
  };
  return (
    <>
      <Statusbar />
      <SafeAreaView style={[ThemeStyle.mainWrapper, ThemeStyle.loginWrapper]}>
        <ScrollView>
          <View style={ThemeStyle.mt_100}>
            <Text style={ThemeStyle.LSheading}>Welcome Back!</Text>
            <Text style={ThemeStyle.LSdesc}>Sign in to continue</Text>
          </View>
          <View style={[ThemeStyle.formBox]}>
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

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter you password"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Remember & Forgot */}
            <View style={[ThemeStyle.formLabel]}>
              <TouchableOpacity
                style={ThemeStyle.forGotBtn}
                onPress={goToForgotPassScreen} // Trigger navigation on button press
              >
                <Text style={ThemeStyle.forGotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <View style={[ThemeStyle.formLabel]}>
              <TouchableOpacity
                style={ThemeStyle.GsMainButton}
                onPress={goToInside} // Trigger navigation on button press
              >
                <Text
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
                >
                  SIGN IN{" "}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Signup */}
            <View style={[ThemeStyle.formLabel]}>
              <View style={[ThemeStyle.dhaLabel]}>
                <Text style={[ThemeStyle.dhaLabelText]}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                  style={ThemeStyle.forGotBtn}
                  onPress={goToRegisterScreen} // Trigger navigation on button press
                >
                  <Text
                    style={[
                      ThemeStyle.dhaLabelText,
                      ThemeStyle.dhaLabelLightText,
                    ]}
                  >
                    Sign up.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
