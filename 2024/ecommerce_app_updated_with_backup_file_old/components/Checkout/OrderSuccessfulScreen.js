import React from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
const iconHero = require("../../assets/images/excellence.png");

const OrderSuccessfulScreen = ({ navigation }) => {
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
            <Text style={ThemeStyle.MessageScreenHdng}>Thank you for your order!</Text>
            <Text style={ThemeStyle.MessageScreenDesc}>Your order will be delivered on time. Thank you!</Text>
            <TouchableOpacity 
              style={ThemeStyle.GsMainButton}
              // onPress={goToLoginScreen}  // Trigger navigation on button press
            > 
              <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton]}>VIEW ORDERS</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[ThemeStyle.GsMainButton,ThemeStyle.LightBgButton]}
              // onPress={goToLoginScreen}  // Trigger navigation on button press
            > 
              <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton,ThemeStyle.LightBgButtonText]}>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
          </View>
      </View>
    </>
 );
};

export default OrderSuccessfulScreen;
