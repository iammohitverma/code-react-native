import { Image, Text, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItemToCart, updateItemQuantity } from "../CartUtils";
import { useState } from "react";

const cartIcon = require("../../assets/images/bag.png");
const cartIconActive = require("../../assets/images/bagActive.png");

export function AddToCartButton({ productId, fullBtn, qtyToUpdate }) {
  const [cartProgressIcon, setCartIcon] = useState(null);
  const handleAddToCart = async () => {
    setCartIcon(true);
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    const updatedCartItems = await addItemToCart(userId, productId);
    console.log("Featured Cart Updated:", updatedCartItems);

    setTimeout(() => {
      setCartIcon(false);
    }, 1000);
  };

  const handleUpdateCart = async () => {
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    updateItemQuantity(userId, productId, qtyToUpdate, true);
  };

  return fullBtn ? (
    <TouchableOpacity onPress={handleUpdateCart}>
      <Text style={mvStyles.primaryBtn}>+ Add to cart {qtyToUpdate}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={mvStyles.productBtn} onPress={handleAddToCart}>
      <Image
        style={{ height: 25, width: 25 }}
        source={cartProgressIcon ? cartIconActive : cartIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
