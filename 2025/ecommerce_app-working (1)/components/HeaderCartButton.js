import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mvStyles } from "./css/MohitStyle";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartIcon = require("../assets/images/bag.png");

export default function HeaderCartButton() {
  const navigation = useNavigation();

  // State to hold the cart item count
  const [cartCount, setCartCount] = useState(0);

  // Function to get cart items count
  const getCartCount = async () => {
    try {
      const userIdString = await AsyncStorage.getItem("userId");
      if (userIdString) {
        const userId = JSON.parse(userIdString);
        const cartItems = await AsyncStorage.getItem(`cartItems_${userId}`);
        const cartData = JSON.parse(cartItems);

        if (cartData && cartData.products) {
          const totalCount = cartData.products.reduce(
            (acc, item) => acc + item.qty,
            0
          );
          setCartCount(totalCount); // Update state with the total item count
        } else {
          setCartCount(0); // If no products in cart, set count to 0
        }
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  // Use focus effect to update cart count whenever the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      getCartCount();
    }, [])
  );

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CartScreen", { screen: "Cart" });
      }}
      style={mvStyles.positionRelative}
    >
      {cartCount > 0 && (
        <View style={mvStyles.cartItemsCount}>
          <Text style={mvStyles.cartItemsCountText}>{cartCount}</Text>
        </View>
      )}
      <Image
        style={{ height: 25, width: 25 }}
        source={cartIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
