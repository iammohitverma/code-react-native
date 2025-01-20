import React, { useEffect } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";
import Statusbar from "../Statusbar";
import { mvStyles } from "../css/MohitStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logo = require("../../assets/images/logo.png");
function SplashScreen({ navigation }) {
  const logoAnimation = new Keyframe({
    0: { opacity: 0, transform: [{ scale: 4 }] },
    100: { opacity: 1, transform: [{ scale: 1 }] },
  })
    .duration(1500)
    .delay(0);

  // check If User is logged in then redirect to specific screen
  useEffect(() => {
    const checkTokenAndRedirect = async () => {
      const token = await AsyncStorage.getItem("token");

      const redirectScreen = token ? "Home" : "Onboard";
      setTimeout(() => {
        navigation.replace(redirectScreen);
      }, 4000);
    };

    checkTokenAndRedirect();

    return () => clearTimeout(); // No timeout variable needed here
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Statusbar barBackground="#eaedf4" />
      <View style={mvStyles.splashWrapper}>
        <Animated.View entering={logoAnimation} style={mvStyles.splashWrapper}>
          <Image
            style={{ height: 100, width: 250 }}
            source={logo}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
