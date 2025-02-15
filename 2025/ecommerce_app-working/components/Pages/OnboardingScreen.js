import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const banner = require("../../assets/images/banner_01.png");

const OnboardingScreen = ({ navigation }) => {
  const goToInside = () => {
    navigation.navigate("Signin");
  };

  return (
    <>
      <Statusbar />
      <SafeAreaView style={[ThemeStyle.container]}>
        <ScrollView>
          <View style={[ThemeStyle.wrapper]}>
            <Image style={[ThemeStyle.imageHero]} source={banner} />

            <View style={[ThemeStyle.GetStartedWrap]}>
              <View style={[ThemeStyle.GetStartedBox]}>
                <Text style={[ThemeStyle.GSmainHeading]}>
                  Welcome to Unimor!
                </Text>
                <Text style={[ThemeStyle.GSmainDesc]}>
                  Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex
                  nisi mollit.
                </Text>

                <TouchableOpacity
                  style={ThemeStyle.GsMainButton}
                  onPress={goToInside} // Trigger navigation on button press
                >
                  <Text style={ThemeStyle.GsMainButtonText}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OnboardingScreen;
