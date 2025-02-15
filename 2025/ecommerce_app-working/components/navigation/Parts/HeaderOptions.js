import React from "react";
import { TouchableOpacity, Image } from "react-native";
import HeaderCartButton from "../../HeaderCartButton";
// const backBtn = require("../../../assets/images/back_btn.png");
const cartIcon = require("../../../assets/images/bag.png");

export const headerOptionsObj = (navigation, defaultTitle, route) => ({
  title: route?.params?.category_name
    ? route.params.category_name
    : defaultTitle, // Set category name as title, fallback to 'Category'
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
  headerRight: () => <HeaderCartButton />,
});
