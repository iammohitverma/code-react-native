import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const iconHero = require("../../assets/images/emptyCart.png");

const CartScreen = ({ navigation }) => {
  const getDataFromLs = async () => {
    try {
      // Retrieve and parse cartItems
      await AsyncStorage.removeItem("cartItems");
      const cartItemsString = await AsyncStorage.getItem("cartItems");
      const userIdString = await AsyncStorage.getItem("userId");

      console.log(cartItemsString);
      console.log(userIdString);

      if (!cartItemsString || !userIdString) {
        console.log("No cart items or user ID found");
        navigation.navigate("EmptyCart");
      }

      const cartItems = JSON.parse(cartItemsString); // Parse cart items JSON string
      const userId = JSON.parse(userIdString); // Parse user ID

      console.log(cartItems);
      console.log(cartItems.products);
      console.log(cartItems.products.length);

      // Access and log cartItems.products
      if (
        cartItems.products &&
        cartItems.products.length &&
        cartItems.userId === userId
      ) {
        console.log("Products in the cart:", cartItems.products);
        navigation.navigate("CartProducts");
      } else {
        console.log("Cart is empty or user ID does not match");
        navigation.navigate("EmptyCart");
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDataFromLs(); // Fetch data every time the screen is focused
    }, [])
  );
};

export default CartScreen;
