import { useCallback, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

function FeaturedProducts({ addToCartProps }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    const url = "https://shop.tmdemo.in/api/featured/product/fetch";
    const token = await AsyncStorage.getItem("token"); //get from localStorage

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setProducts(response.data.featured_products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData(); // Fetch data every time the screen is focused
    }, [])
  );

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <View style={mvStyles.heightCover}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handleAddToCart = async (productId) => {
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const updatedCartItems = await addItemToCart(userId, productId);
    console.log("Featured Cart Updated:", updatedCartItems);
  };

  return (
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <ProductCard
              key={index}
              item={item}
              width={175}
              height={175}
              addToCartProps={handleAddToCart}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{}}
      />
    </View>
  );
}

export default FeaturedProducts;
