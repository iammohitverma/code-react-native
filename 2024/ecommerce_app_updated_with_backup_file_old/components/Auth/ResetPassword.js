import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const ResetPasswordScreen = ({ navigation }) => {
 const goToResetDone = () => {
    navigation.navigate("ResetDone");
  };
 return(
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView  style={[ThemeStyle.mainWrapper,ThemeStyle.forGotWrapper]}>
        <ScrollView>
          <View style={[ThemeStyle.forGotBox]}>
            <View>
              <Text style={[ThemeStyle.LSdesc , ThemeStyle.testLeft]}>Enter new password and confirm.</Text>
            </View>

            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>New Password</Text>
              <TextInput
                style={[ThemeStyle.inputField]}
                placeholder="Enter your password"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
              />
            </View>


            {/* Password Field */}
            <View style={[ThemeStyle.formLabel]}>
              <Text style={[ThemeStyle.labeltext]}>Confirm Password</Text>
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
                onPress={goToResetDone}  // Trigger navigation on button press
              > 
                <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton]}>CHANGE PASSWORD</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
 );
};

export default ResetPasswordScreen;
