import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WishListButton } from "../WishListButton";

const wishlistIcon = require("../../../assets/images/wishlist.png");
const wishlistIconActive = require("../../../assets/images/wishlist_active.png");

// product image location
const productImagesPath = "https://shop.tmdemo.in/uploads/products/";

function BestSellers({ navigation }) {
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
      <View style={mvStyles.flexRow}>
        <Text style={[mvStyles.fs_22_600, { flex: 1 }]}>Best sellers</Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("BestSeller")}
        >
          <Text style={[mvStyles.fs_14_400, { textAlign: "right" }]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      {products.length > 0 ? (
        <FlatList
          data={products.slice(0, 5)}
          renderItem={({ item, index }) => {
            return (
              <ProductBox key={index} item={item} navigation={navigation} />
            );
          }}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default BestSellers;

// ProductBox Component for Flatlist
export function ProductBox({ item, navigation }) {
  const gotoSingleProduct = () => {
    navigation.navigate("SingleProduct", { productId: item.id });
  };
  return (
    <View style={[mvStyles.positionRelative, mvStyles.mr_15]}>
      <TouchableOpacity onPress={gotoSingleProduct}>
        <View style={[mvStyles.flexRow, { paddingRight: 30 }]}>
          <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
            <Image
              style={mvStyles.imageFull}
              source={{ uri: `${productImagesPath}/${item.image}` }}
              resizeMode="contain"
            />
          </View>
          <View style={[mvStyles.px_10, { flexShrink: 1 }]}>
            <Text style={[mvStyles.fs_14_400]}>{item.name}</Text>
            <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
              ${item.sale_price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <WishListButton productId={item.id} />
      </View>
    </View>
  );
}
