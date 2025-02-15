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

  // fetchWishlist: Fetch wishlist status for the specific product
  const fetchWishlist = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);

    try {
      // Optimized API call to check the status of a single product
      const url = `https://shop.tmdemo.in/api/wishlist/check/${userId}?product_id=${productId}`;
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setIsWishlisted(response.data?.is_wishlisted || false); // Assume API returns `is_wishlisted`
    } catch (error) {
      console.error("Error checking wishlist status:", error.message);
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
    // Optimistically update state for faster UI response
    setIsWishlisted(!isWishlisted);
    isWishlisted ? removeFromWishlist() : addToWishlist();
  };

  // Fetch wishlist status when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchWishlist();
    }, [productId]) // Dependency on productId
  );

  // Preload images to avoid delay
  useEffect(() => {
    Image.prefetch(wishlistIcon);
    Image.prefetch(wishlistIconActive);
  }, []);

  return (
    <TouchableOpacity style={mvStyles.productBtn} onPress={toggleWishlist}>
      <Image
        style={{ height: 25, width: 25 }}
        source={isWishlisted ? wishlistIconActive : wishlistIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
