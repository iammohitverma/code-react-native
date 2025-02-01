import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WishListButton } from "../WishListButton";
// import { clearCart } from "../../CartUtils";

const addToCart = require("../../../assets/images/add_to_cart.png");

// wishlist product image location
const productImagesPath = "https://shop.tmdemo.in/uploads/products/thumbnails/";

function Wishlist({ navigation }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const url = `https://shop.tmdemo.in/api/wishlist/fetch/${userId}`;

    // clear storage
    // clearCart(userId);

    try {
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
        setProducts(response.data.wishlist_records);
        setLoading(false);
      } else {
        setProducts([]);
        setLoading(false);
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

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <View style={mvStyles.heightCover}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
        },
        mvStyles.py_40,
        mvStyles.px_20,
      ]}
    >
      {products === null ? (
        <Text>Loading your wishlist...</Text>
      ) : products.length === 0 ? (
        <View style={mvStyles.heightCover}>
          <Text>Your wishlist is empty.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductBox item={item} onWishlistUpdate={fetchData} />
          )}
          keyExtractor={(item) => item.product.id.toString()} // Use unique IDs for keys
        />
      )}
    </View>
  );
}

export default Wishlist;

// ProductBox Component for Flatlist
export function ProductBox({ item, onWishlistUpdate }) {
  const navigation = useNavigation();

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
        <WishListButton
          productId={item.product.id}
          onWishlistUpdate={onWishlistUpdate}
        />
        <TouchableOpacity style={mvStyles.productBtn}>
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
