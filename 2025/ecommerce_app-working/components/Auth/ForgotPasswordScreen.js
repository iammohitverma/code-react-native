import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

const ForgotPassScreen = ({ navigation }) => {
  const [Loader, setLoader] = useState(false);
  const [FormData, SetFormData] = useState({ email: "" });

  const goToResetPassScreen = async () => {
    const { email } = FormData;
    if (!email) {
      Alert.alert("Error", "Please fill in email field.");
      return;
    }
    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    setLoader(true);
    try {
      await axios.post(`https://shop.tmdemo.in/api/password/forget`, {
        email: FormData.email,
      });
      setLoader(false);
      navigation.navigate("Reset Password", {
        userEmail: FormData.email,
      });
    } catch (error) {
      setLoader(false);
      console.log(error);
      Alert.alert("Error", "Please fill valid email address.");
    }
    // navigation.navigate("Reset Password", {
    //   userEmail: FormData.email,
    // });
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
                value={FormData.email}
                onChangeText={(text) => handleInputChange("email", text)}
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
      {/* Loader display on submit click */}
      {Loader && (
        <View style={ThemeStyle.loaderScreen}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </>
  );
};

export default ForgotPassScreen;
