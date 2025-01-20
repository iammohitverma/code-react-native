import { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WishListButton } from "../WishListButton";

const addToCart = require("../../../assets/images/add_to_cart.png");

// wishlist product image location
const productImagesPath = "https://shop.tmdemo.in/uploads/products/thumbnails/";

function Wishlist({ navigation }) {
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const url = `https://shop.tmdemo.in/api/wishlist/fetch/${userId}`;
    console.log(url);

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setProducts(response.data.wishlist_records);
      }
    } catch (error) {
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

  return (
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return <ProductBox key={index} item={item} />;
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default Wishlist;

// ProductBox Component for Flatlist
export function ProductBox({ item }) {
  const navigation = useNavigation();
  const [isWishlisted, setIsWishlisted] = useState(true);

  const wishlistFun = () => {
    setIsWishlisted(!isWishlisted);
  };

  const gotoSingleProduct = () => {
    // navigation.navigate("SingleProduct");
    navigation.navigate("SingleProduct", { productId: item.product.id });
  };

  return (
    <View
      style={[mvStyles.positionRelative, mvStyles.mr_15, mvStyles.borderBtm]}
    >
      <TouchableOpacity onPress={gotoSingleProduct}>
        <View style={[mvStyles.flexRow, { paddingRight: 30 }]}>
          <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
            <Image
              style={mvStyles.imageFull}
              source={{ uri: `${productImagesPath}/${item.product.image}` }}
              resizeMode="contain"
            />
          </View>
          <View style={[mvStyles.px_10, { flexShrink: 1 }]}>
            <Text style={[mvStyles.fs_14_400]}>{item.product.name}</Text>
            <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
              ${item.product.sale_price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <WishListButton productId={item.product.id} />
        <TouchableOpacity style={mvStyles.productBtn} onPress={wishlistFun}>
          <Image
            style={{ height: 20, width: 20 }}
            source={addToCart}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
