import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import ThemeStyle from "../css/ThemeStyle";

const CartScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={[ThemeStyle.mainWrapper]}>
        <View>
          <Text>Cart Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
