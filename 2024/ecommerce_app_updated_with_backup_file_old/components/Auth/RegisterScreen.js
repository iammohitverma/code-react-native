import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const RegisterScreen = ({ navigation }) => {
 
  const goToLoginScreen = () => {
    navigation.navigate("Sign in");
  };
  const goToAccountCreated = () => {
    navigation.navigate("AccountCreated");
  };
  return(
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView  style={[ThemeStyle.mainWrapper,ThemeStyle.loginWrapper]}>
        <ScrollView>
          <View style={ThemeStyle.mt_100}>
            <Text style={ThemeStyle.LSheading}>Sign up</Text>
          </View>
          <View style={[ThemeStyle.formBox]}>
            {/* Name Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Name</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your name"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Email Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Email</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your email"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your password"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your password again"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>

            {/* Submit Button */}
            <View style={[ThemeStyle.formLabel]}>
              <TouchableOpacity 
                style={ThemeStyle.GsMainButton}
                onPress={goToAccountCreated}  // Trigger navigation on button press
              > 
                <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton]}>Get Started</Text>
              </TouchableOpacity>
            </View>

            {/* Signup */}
            <View style={[ThemeStyle.formLabel]}>
              <View style={[ThemeStyle.dhaLabel]}>
                <Text style={[ThemeStyle.dhaLabelText]}>Don't have an account? </Text>
                <TouchableOpacity 
                  style={ThemeStyle.forGotBtn}
                  onPress={goToLoginScreen}  // Trigger navigation on button press
                > 
                    <Text style={[ThemeStyle.dhaLabelText,ThemeStyle.dhaLabelLightText]}>Sign in....</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
