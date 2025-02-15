import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductCard } from "../ProductCard";
import { mvStyles } from "../../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function FeaturedProducts() {
  const navigation = useNavigation();

  const [products, setProducts] = useState(null);
  const fetchData = async () => {
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
    <View style={[mvStyles.pb_40, mvStyles.px_20]}>
      <View style={mvStyles.flexRow}>
        <Text style={[mvStyles.fs_22_600, { flex: 1.5 }]}>
          Featured products
        </Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("FeaturedProducts")}
        >
          <Text style={[mvStyles.fs_14_400, { textAlign: "right" }]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return <ProductCard key={index} item={item} />;
        }}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ display: "flex", gap: 20 }}
      />
    </View>
  );
}

export default FeaturedProducts;
