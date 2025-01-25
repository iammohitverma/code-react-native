import React, { useState , useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }) => {
  // Check if user is login or not
  useEffect(() => {
    const checkToken = async () => {
      const GetToken = await AsyncStorage.getItem("token");
      if (GetToken) {
        navigation.navigate("Home");
      }
    };

    checkToken(); // Call the function to check token
  }, [navigation]); // Re-run the effect if navigation changes

  const goToLoginScreen = () => {
    navigation.navigate("Sign in");
  };


  const [Loader, setLoader] = useState(false);
  const [FormData, SetFormData] = useState({ name: "", email: "", password: "", confPassword: "",phone:""});
  const goToAccountCreated = async() => {
    const { name, email, password, confPassword,phone} = FormData;

    if (!name || !email || !password || !confPassword || !phone) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
     // Validate email format
     if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    // Validate passwords match
    if (password !== confPassword || password.length < 8) {
      Alert.alert("Error", "Passwords do not match. Password should be greater than 7 characters.");
      return;
    }
     // Validate phone number (example: check length)
     if (phone.length < 9 || phone.length > 12 || isNaN(phone)) {
      Alert.alert("Error", "Please enter a valid phone number.");
      return;
    }
    setLoader(true);
    // console.log(FormData);
    //console.log("type of variable is:"+typeof(FormData.phone));
    try {
      await axios.post(
        `https://shop.tmdemo.in/api/register`,
        {
          name: FormData.name,
          email: FormData.email,
          password: FormData.password,
          mobile: FormData.phone
        }
      );
      setLoader(false);
      navigation.navigate("AccountCreated");
    } catch (error) {
      setLoader(false);
      console.log(error);
    }

  };

  // get input values
  const handleInputChange = (field, value) => {
    SetFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <>
      <Statusbar />
      <SafeAreaView style={[ThemeStyle.mainWrapper, ThemeStyle.loginWrapper]}>
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
                value={FormData.name}
                onChangeText={(text) => handleInputChange("name", text)}
              />
            </View>

            {/* Email Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Email</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your email"
                value={FormData.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your password"
                value={FormData.password}
                onChangeText={(text) => handleInputChange("password", text)}
                secureTextEntry
              />
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your password again"
                value={FormData.confPassword}
                onChangeText={(text) => handleInputChange("confPassword", text)}
                secureTextEntry
              />
            </View>

             {/* Phone Field */}
             {/* <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Phone</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your phone number"
                value={FormData.phone}
                onChangeText={(text) => handleInputChange("phone", text)}
              />
            </View> */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Phone</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your phone number"
                value={FormData.phone}
                keyboardType="numeric" // Numeric keyboard
                onChangeText={(text) => {
                  // Ensure the input contains only numbers
                  const numericText = text.replace(/[^0-9]/g, '');
                  handleInputChange("phone", numericText);
                }}
              />
            </View>

            {/* Submit Button */}
            <View style={[ThemeStyle.formLabel]}>
              <TouchableOpacity
                style={ThemeStyle.GsMainButton}
                onPress={goToAccountCreated} // Trigger navigation on button press
              >
                <Text
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
                >
                  Get Started
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
                  onPress={goToLoginScreen} // Trigger navigation on button press
                >
                  <Text
                    style={[
                      ThemeStyle.dhaLabelText,
                      ThemeStyle.dhaLabelLightText,
                    ]}
                  >
                    Sign in.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {Loader && (
              <View style={ThemeStyle.loaderScreen}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            )}
    </>
  );
};

export default RegisterScreen;
