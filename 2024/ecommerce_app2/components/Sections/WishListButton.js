import { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";

const wishlistIcon = require("../../assets/images/wishlist.png");
const wishlistIconActive = require("../../assets/images/wishlist_active.png");

export function WishListButton({ productId }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  // fetchWishlist
  const fetchWishlist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userIdString = await AsyncStorage.getItem("userId");
      const userId = JSON.parse(userIdString);
      const url = `https://shop.tmdemo.in/api/wishlist/fetch/${userId}`;

      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.wishlist_records) {
        const productIds = response.data.wishlist_records.map(
          (item) => item.product_id
        );
        setIsWishlisted(productIds.includes(productId)); // Check if current product is in wishlist
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error.message);
    }
  };

  // addToWishlist
  const addToWishlist = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userIdString = await AsyncStorage.getItem("userId");
      const userId = JSON.parse(userIdString);
      const url = `https://shop.tmdemo.in/api/wishlist/add/${userId}`;

      // Create FormData correctly
      const data = new FormData();
      data.append("product_id", productId);

      const response = await axios.post(url, data, {
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: false,
      });

      if (response.data.status == "success") {
        setIsWishlisted(true);
        Toast.show("Product is added to wishlist!"); //Toast when add to cart
      } else {
        Toast.show("Product is already added in wishlist!"); //Toast when add to cart
      }
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);
  return (
    <>
      <TouchableOpacity style={mvStyles.productBtn} onPress={addToWishlist}>
        <Image
          style={{ height: 25, width: 25 }}
          source={isWishlisted ? wishlistIconActive : wishlistIcon} // Toggle icon
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}
