import { useCallback, useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";
import { useFocusEffect } from "@react-navigation/native";

const wishlistIcon = require("../../assets/images/wishlist.png");
const wishlistIconActive = require("../../assets/images/wishlist_active.png");

export function WishListButton({ productId, onWishlistUpdate }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // fetchWishlist
  const fetchWishlist = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);

    try {
      const url = `https://shop.tmdemo.in/api/wishlist/fetch/${userId}`;

      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (
        response.data?.wishlist_records &&
        response.data.wishlist_records !== "No item found in your wishlist."
      ) {
        const productIds = response.data.wishlist_records.map(
          (item) => item.product_id
        );
        setIsWishlisted(productIds.includes(productId));
      } else {
        setIsWishlisted(false);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error.message);
    }
  };

  // addToWishlist
  const addToWishlist = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);

    try {
      const url = `https://shop.tmdemo.in/api/wishlist/add/${userId}`;
      const data = new FormData();
      data.append("product_id", productId);

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.status === "success") {
        setIsWishlisted(true);
        Toast.show("Product is added to wishlist!");
        if (onWishlistUpdate) onWishlistUpdate(); // Call the callback
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
    }
  };

  // removeFromWishlist
  const removeFromWishlist = async () => {
    const token = await AsyncStorage.getItem("token");

    try {
      const url = `https://shop.tmdemo.in/api/wishlist/remove/${productId}`;

      const response = await axios.delete(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.success) {
        setIsWishlisted(false);
        Toast.show("Product is removed from wishlist!");
        if (onWishlistUpdate) onWishlistUpdate(); // Call the callback
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error.message);
    }
  };

  const toggleWishlist = () => {
    isWishlisted ? removeFromWishlist() : addToWishlist();
  };

  // useEffect to recheck wishlist status when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchWishlist(); // Fetch wishlist every time screen is focused
    }, [productId]) // Add productId as dependency to refresh when productId changes
  );

  return (
    <TouchableOpacity style={mvStyles.productBtn} onPress={toggleWishlist}>
      <Image
        key={isWishlisted} // Force re-render
        style={{ height: 25, width: 25 }}
        source={isWishlisted ? wishlistIconActive : wishlistIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
