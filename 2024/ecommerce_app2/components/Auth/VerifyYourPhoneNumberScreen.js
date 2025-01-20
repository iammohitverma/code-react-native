import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

const VerifyYourNumberScreen = ({ navigation }) => {
  const verifyYourNumber = () => {
    Alert.alert(
      "Message",
      "check number and hid this view and show the otp view"
    );
  };

  // Input fields otp validations
  const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]); // Refs for OTP input fields

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

  // automatic focus next field when current input fills
  const handleBackspace = (index) => {
    if (index > 0 && otpValues[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify your otp
  const verifyYourOTP = () => {
    Alert.alert("Message", "Verify OTP and hit api");
  };

  // Resend OTP Function
  const ResendOtp = () => {
    Alert.alert("Message", "OTP Rsent");
  };

  return (
    <>
      <Statusbar />
      <SafeAreaView style={[ThemeStyle.mainWrapper, ThemeStyle.forGotWrapper]}>
        <ScrollView>
          <View style={[ThemeStyle.forGotBox]}>
            <View>
              <Text style={[ThemeStyle.LSdesc, ThemeStyle.testLeft]}>
                We have sent you an SMS with a code to number +17 0123456789.
              </Text>
            </View>

            {/* Email Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Phone Number</Text>
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
                onPress={verifyYourNumber} // Trigger navigation on button press
              >
                <Text
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
                >
                  CONFIRM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[ThemeStyle.forGotBox]}>
            <View>
              <Text style={[ThemeStyle.LSdesc, ThemeStyle.testLeft]}>
                Enter your OTP code here.
              </Text>
            </View>

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
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
                >
                  VERIFY
                </Text>
              </TouchableOpacity>
            </View>

            {/* Signup */}
            <View style={[ThemeStyle.formLabel]}>
              <View style={[ThemeStyle.dhaLabel]}>
                <Text style={[ThemeStyle.dhaLabelText]}>
                  Didn’t receive the OTP?{" "}
                </Text>
                <TouchableOpacity
                  style={ThemeStyle.forGotBtn}
                  onPress={ResendOtp} // Trigger navigation on button press
                >
                  <Text
                    style={[
                      ThemeStyle.dhaLabelText,
                      ThemeStyle.dhaLabelLightText,
                    ]}
                  >
                    Resend.
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

export default VerifyYourNumberScreen;
