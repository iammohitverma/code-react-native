import React from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
const iconHero = require("../../assets/images/cancel-payment.png");

const OrderCancelScreen = ({ navigation }) => {
  // const goToLoginScreen = () => {
  //   navigation.navigate("Sign in");
  // };
 return(
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View  style={[ThemeStyle.mainWrapper,ThemeStyle.MessageScreenWrap]}>
          <View style={[ThemeStyle.MessageScreenBox]}>
            <Image
                style={[ThemeStyle.iconHero]}
                source={iconHero}
              />
            <Text style={ThemeStyle.MessageScreenHdng}>Sorry! Your order has failed!</Text>
            <Text style={ThemeStyle.MessageScreenDesc}>Something went wrong. Please try again to contimue your order.</Text>
            <TouchableOpacity 
              style={ThemeStyle.GsMainButton}
              // onPress={goToLoginScreen}  // Trigger navigation on button press
            > 
              <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton]}>TRY AGAIN</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[ThemeStyle.GsMainButton,ThemeStyle.LightBgButton]}
              // onPress={goToLoginScreen}  // Trigger navigation on button press
            > 
              <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton,ThemeStyle.LightBgButtonText]}>GO TO MY PROFILE</Text>
            </TouchableOpacity>
          </View>
      </View>
    </>
 );
};

export default OrderCancelScreen;
