import React, { useState, useRef } from "react";
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

const ResetPasswordScreen = ({ navigation, route }) => {
  const [Loader, setLoader] = useState(false);
  const [showfield, setfields] = useState();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]); // Refs for OTP input fields
  const [FormData, SetFormData] = useState({ password: "", confPassword: "" });
  const { userEmail } = route.params;
  const otp = otpValues.join("");
  const handleInputChange = (value, index) => {
    if (/^\d$/.test(value)) {
      // Allow only single digit numbers
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = value;
      setOtpValues(updatedOtpValues);

      // Move to the next input field
      if (index < otpValues.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      // Clear the value and stay in the current field
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = "";
      setOtpValues(updatedOtpValues);
    }
  };
  const handleBackspace = (index) => {
    if (index > 0 && otpValues[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const verifyYourOTP = async () => {
    if (!otp || otp.length != 4) {
      Alert.alert("Error", "Please fill OTP.");
      return;
    }
    // console.log(userEmail);
    //   console.log(otp);
    setLoader(true);
    try {
      await axios.post(`https://shop.tmdemo.in/api/match/otp`, {
        email: userEmail,
        otp: otp,
      });
      setLoader(false);
      setfields("success");
    } catch (error) {
      setLoader(false);
      console.log(error);
      Alert.alert("Error", "OTP not match.");
      return;
    }
  };

  const goToResetDone = async () => {
    const { password, confPassword } = FormData;

    if (!password || !confPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    // Validate passwords match
    if (password !== confPassword || password.length < 8) {
      Alert.alert(
        "Error",
        "Passwords do not match. Password should be greater than 7 characters."
      );
      return;
    }
    setLoader(true);

    try {
      await axios.post(`https://shop.tmdemo.in/api/match/otp`, {
        email: userEmail,
        otp: otp,
        new_password: password,
      });
      setLoader(false);
      navigation.navigate("ResetDone");
    } catch (error) {
      setLoader(false);
      console.log(error);
      Alert.alert("Error", "The password was not updated.");
      return;
    }
  };
  // get input values
  const handleFormInputChange = (field, value) => {
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
          <>
            {showfield !== "success" && (
              <View style={[ThemeStyle.forGotBox]}>
                {/* OTP Field */}
                <View style={[ThemeStyle.formLabel, ThemeStyle.formLabelOTP]}>
                  {otpValues.map((otp, index) => (
                    <TextInput
                      key={index}
                      style={[ThemeStyle.inputField, ThemeStyle.inputFieldOTP]}
                      maxLength={1} // Restrict input to 1 character
                      keyboardType="number-pad" // Ensure only numbers are input
                      value={otp}
                      onChangeText={(value) => handleInputChange(value, index)}
                      onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === "Backspace") {
                          handleBackspace(index);
                        }
                      }}
                      ref={(el) => (inputRefs.current[index] = el)} // Save ref for each input
                    />
                  ))}
                </View>

                {/* Submit Button */}
                <View style={[ThemeStyle.formLabel]}>
                  <TouchableOpacity
                    style={ThemeStyle.GsMainButton}
                    onPress={verifyYourOTP} // Trigger navigation on button press
                  >
                    <Text
                      style={[
                        ThemeStyle.GsMainButtonText,
                        ThemeStyle.LSmainButton,
                      ]}
                    >
                      VERIFY
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showfield === "success" && (
              <View style={[ThemeStyle.forGotBox]}>
                <View>
                  <Text style={[ThemeStyle.LSdesc, ThemeStyle.testLeft]}>
                    Enter new password and confirm.
                  </Text>
                </View>

                {/* Password Field */}
                <View style={[ThemeStyle.formLabel]}>
                  <Text style={[ThemeStyle.labeltext]}>New Password</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="Enter your password"
                    value={FormData.password}
                    onChangeText={(text) =>
                      handleFormInputChange("password", text)
                    }
                    secureTextEntry
                  />
                </View>

                {/* Password Field */}
                <View style={[ThemeStyle.formLabel]}>
                  <Text style={[ThemeStyle.labeltext]}>Confirm Password</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="Enter your password again"
                    value={FormData.confPassword}
                    onChangeText={(text) =>
                      handleFormInputChange("confPassword", text)
                    }
                    secureTextEntry
                  />
                </View>

                {/* Submit Button */}
                <View style={[ThemeStyle.formLabel]}>
                  <TouchableOpacity
                    style={ThemeStyle.GsMainButton}
                    onPress={goToResetDone} // Trigger navigation on button press
                  >
                    <Text
                      style={[
                        ThemeStyle.GsMainButtonText,
                        ThemeStyle.LSmainButton,
                      ]}
                    >
                      CHANGE PASSWORD
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </>
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

export default ResetPasswordScreen;
