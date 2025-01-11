import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const WelcomeScreen = ({ navigation }) => {
 
 return(
    <>
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Welcome Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default WelcomeScreen;
