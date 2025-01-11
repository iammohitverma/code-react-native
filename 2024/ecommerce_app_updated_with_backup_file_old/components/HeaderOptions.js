import React from "react";
import { TouchableOpacity, Image } from "react-native";
import cartIcon from "../assets/images/bag.png"; // Assuming cart icon is in assets folder

export const headerOptionsObj = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 0 }}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          console.log("No previous screen to go back to");
        }
      }}
    >
      <Image
        source={require("../assets/images/back_btn.png")}
        style={{ height: 20, width: 40 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        console.log("Navigating to Cart");
        navigation.navigate("CartScreen", { screen: "CartTab" });
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={cartIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ),
});
