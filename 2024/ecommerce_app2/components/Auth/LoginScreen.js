import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [token, setToken] = useState(null);
  // Check if user is login or not
  useEffect(() => {
    const checkToken = async () => {
      const GetToken = await AsyncStorage.getItem("token");
      if (GetToken) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }], // Redirect to HomeScreen
        });
      }
    };

    checkToken(); // Call the function to check token
  }, [navigation, token]); // Re-run the effect if navigation changes

  // Login Functionality Code Start
  const [EmailOrUsername, SetEmailOrUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Loader, SetLoader] = useState();
  const [Error, SetError] = useState("");

  const goToInsideAfterLogin = async () => {
    // Basic Validation
    if (!EmailOrUsername || !Password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Email Validation
    if (
      !EmailOrUsername.includes("@") &&
      !/\S+@\S+\.\S+/.test(EmailOrUsername)
    ) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Axios
    SetLoader(true);
    try {
      // Create the form data
      const data = new FormData();
      data.append("email", EmailOrUsername);
      data.append("password", Password);
      const response = await axios.post(
        "https://shop.tmdemo.in/api/login",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      // Alert.alert("Credentials", `${JSON.stringify(response.data)}`);
      if (response.data) {
        setToken(response.data.data.token);
        await AsyncStorage.setItem("token", response.data.data.token);
        await AsyncStorage.setItem(
          "userId",
          JSON.stringify(response.data.data.id)
        );
        console.log("checkID " + response.data.data.id);
      }
    } catch (error) {
      // Alert.alert("Access Denied", `${Success}`);
      SetError("Please check credentials and try again.");
    } finally {
      // Ensure loader is stopped after the request
      SetLoader(false);
    }

    setTimeout(() => {
      SetError("");
    }, 3500);
  };
  // Login Functionality Code End

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
            {Error != "" && (
              <View style={ThemeStyle.inputWrap}>
                <Text style={ThemeStyle.ErrorMsg}>{Error}</Text>
              </View>
            )}
            {/* Email Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Email</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter you email"
                value={EmailOrUsername}
                onChangeText={SetEmailOrUsername}
                autoComplete="email" // Enable email autocomplete
                // editable={!loader} // Disable the field when loader is true
              />
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter you password"
                value={Password}
                onChangeText={SetPassword}
                secureTextEntry // Hides the password input
                // editable={!loader} // Disable the field when loader is true
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
                onPress={goToInsideAfterLogin} // Trigger navigation on button press
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

      {/* Loader display on submit click */}
      {Loader && (
        <View style={ThemeStyle.loaderScreen}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </>
  );
};

export default LoginScreen;
