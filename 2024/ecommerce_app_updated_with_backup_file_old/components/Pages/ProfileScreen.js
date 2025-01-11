import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const ProfileScreen = ({ navigation }) => {
 
 return(
    <>
      <SafeAreaView  style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>
            Profile Screen
          </Text>
        </View>
      </SafeAreaView>
    </>
 );
};

export default ProfileScreen;
