import React from "react";
import { SafeAreaView, View, Button } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import Statusbar from "../Statusbar";

const AdityaScreens = ({ navigation }) => {
  const goToOnboard = () => {
    navigation.navigate("Onboard");
  };

  const goToMobileVerification = () => {
    navigation.navigate("Verify your phone number");
  };

  const goToOrderSuccessfulScreen = () => {
    navigation.navigate("OrderSuccessful");
  };

  const goToOrderCancelScreen = () => {
    navigation.navigate("OrderCancel");
  };

  const goToOrderPromoScreen = () => {
    navigation.navigate("My promocodes");
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Statusbar />
        <View style={mvStyles.splashWrapper}>
          <Button
            title="Go to Onboard"
            onPress={goToOnboard} // Trigger navigation on button press
          />
          <Button
            title="Go to Mobile Verification Screen"
            onPress={goToMobileVerification} // Trigger navigation on button press
          />
          <Button
            title="Go to Order Successfull Screen"
            onPress={goToOrderSuccessfulScreen} // Trigger navigation on button press
          />
          <Button
            title="Go to Order Cancel Screen"
            onPress={goToOrderCancelScreen} // Trigger navigation on button press
          />
          <Button
            title="Go to Promo Screen"
            onPress={goToOrderPromoScreen} // Trigger navigation on button press
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AdityaScreens;
