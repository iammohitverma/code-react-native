import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function BestSellingProducts() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const url = "https://shop.tmdemo.in/api/bestseller/product/fetch";
    const token = await AsyncStorage.getItem("token"); //get from localStorage

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setProducts(response.data.bestseller_products);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <ProductCard key={index} item={item} width={175} height={175} />
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

export default BestSellingProducts;
