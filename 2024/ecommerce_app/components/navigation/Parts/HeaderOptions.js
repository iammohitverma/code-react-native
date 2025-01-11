import React from "react";
import { TouchableOpacity, Image } from "react-native";
const backBtn = require("../../../assets/images/back_btn.png");
const cartIcon = require("../../../assets/images/bag.png");

export const headerOptionsObj = (navigation) => ({
  // headerLeft for custom back button uncomment if you need custom back button
  // headerLeft: () => (
  //   <TouchableOpacity
  //     style={{ paddingLeft: 0 }}
  //     onPress={() => {
  //       if (navigation.canGoBack()) {
  //         navigation.goBack();
  //       } else {
  //         console.log("No previous screen to go back to");
  //       }
  //     }}
  //   >
  //     <Image
  //       source={backBtn}
  //       style={{ height: 20, width: 40 }}
  //       resizeMode="contain"
  //     />
  //   </TouchableOpacity>
  // ),
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
