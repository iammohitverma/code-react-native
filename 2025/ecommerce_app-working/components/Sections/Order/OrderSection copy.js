import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import axios from "axios";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mvStyles } from "../../css/MohitStyle";

function OrderSection() {
  const navigation = useNavigation();
  const productImagesPath = "https://shop.tmdemo.in/uploads/products/";

  // forcheckoutpage
  const [orderedProductsprice, setProductsPrices] = useState([]);
  const [orderedProductsId, setProductsId] = useState([]);
  const [orderedProductsqty, setProductsqty] = useState([]);

  const [loading, setLoading] = useState(true);

  //end here
  const [orderedProducts, setProducts] = useState([]);
  const [productsQT, setProductsQt] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    const cartItems = await AsyncStorage.getItem(`cartItems_${userId}`);
    const cartData = JSON.parse(cartItems);

    // {"userId":15,"products":[{"itemId":2,"qty":2}]}

    if (cartData.userId == userId) {
      setProductsQt(cartData.products);
      const url = "https://shop.tmdemo.in/api/products"; // API endpoint for all products
      const token = await AsyncStorage.getItem("token"); // Retrieve token from localStorage

      try {
        const response = await axios.get(url, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.products) {
          // Extract product IDs from cartData
          const cartProductIds = cartData.products.map((item) => item.itemId);

          // Filter the products that match the IDs in cartData
          const filteredProducts = response.data.products.filter((product) =>
            cartProductIds.includes(product.id)
          );

          setProducts(filteredProducts); // Set the filtered products in state
          const productIds = filteredProducts.map((product) => product.id);

          const productPrices = filteredProducts.map(
            (product) => product.sale_price
          );
          const productqties = filteredProducts.map((product) => {
            const matchingItem = cartData.products.find(
              (item) => item.itemId === product.id
            );
            return matchingItem ? matchingItem.qty : 0; // Return the qty if matched, otherwise 0
          });
          // console.log(productqties);

          //const productqties = cartData.products.map((item) => item.qty).reverse();
          setProductsId(productIds);
          setProductsPrices(productPrices);
          setProductsqty(productqties);
          const total = filteredProducts.reduce((sum, product) => {
            // Find the corresponding qty from cartData
            const qty =
              cartData.products.find((item) => item.itemId === product.id)
                ?.qty || 0;
            return sum + product.sale_price * qty;
          }, 0);

          setTotalPrice(total);
        }

        setLoading(false);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
        setLoading(false);
      }
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
  const ordercheckout = async () => {
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    // console.log('orderqty');
    // console.log(orderedProductsqty);

    // console.log('orderprice');
    // console.log(orderedProductsprice);

    // console.log('orderids');
    // console.log(orderedProductsId);

    // console.log('ordertotalprice');
    // console.log(totalPrice);
    // console.log(userId);

    await AsyncStorage.setItem(
      `checkoutItems_${userId}`,
      JSON.stringify({
        orderedProductsqty,
        orderedProductsprice,
        orderedProductsId,
        totalPrice,
      })
    );
    navigation.navigate("Checkout");
  };
  return (
    <View style={[mvStyles.pt_20, mvStyles.pb_40, mvStyles.px_20]}>
      <FlatList
        data={orderedProducts}
        renderItem={({ item, index }) => {
          return (
            <ProductBox
              key={index}
              item={item}
              productsQT={productsQT}
              productImagesPath={productImagesPath}
            />
          );
        }}
        keyExtractor={(item, index) => index}
      />
      {/* Subtotal area */}
      <View style={mvStyles.flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>Subtotal</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={(mvStyles.fs_16_400, { textAlign: "right" })}>
            ${totalPrice}
          </Text>
        </View>
      </View>
      <View style={[mvStyles.flexRow, mvStyles.borderBtm]}>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>Delivery</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={(mvStyles.fs_16_400, { textAlign: "right" })}>Free</Text>
        </View>
      </View>
      <View style={mvStyles.flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={mvStyles.fs_22_600}>Total</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              mvStyles.fs_16_400,
              mvStyles.fw_600,
              { textAlign: "right" },
            ]}
          >
            ${totalPrice}
          </Text>
        </View>
      </View>

      {/* Checkout button */}
      <View style={[mvStyles.flexRow, { flex: 1 }]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={ordercheckout}>
          <Text style={[mvStyles.primaryBtn, mvStyles.w_100]}>
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderSection;

// ProductBox Component for Flatlist
export function ProductBox({ item, productsQT, productImagesPath }) {
  const [qty, setQty] = useState("");
  useEffect(() => {
    // Find the product that matches the item.id
    const matchedProduct = productsQT.find(
      (product) => product.itemId === item.id
    );

    // If a match is found, update the qty
    if (matchedProduct) {
      setQty(matchedProduct.qty);
    }
  }, [item.id, productsQT]);
  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <View
      style={[mvStyles.positionRelative, mvStyles.borderBtm, mvStyles.flexRow]}
    >
      <TouchableOpacity style={{ flex: 1 }}>
        <View style={[mvStyles.flexRow, { paddingRight: 30 }]}>
          <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
            <Image
              style={mvStyles.imageFull}
              source={{
                uri: `${productImagesPath}/${item.image.thumbnail.image_name}`,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={[mvStyles.px_10, { flexShrink: 1 }]}>
            <Text style={[mvStyles.fs_14_400]}>{item.name}</Text>
            <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
              ${item.sale_price}
            </Text>
            {/* <Text style={[mvStyles.fs_14_400, { marginTop: 15 }]}>
              Color: {item.color}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <View style={[mvStyles.qtyWrap, { marginTop: 0 }]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleDecrement}>
              <Text
                style={[
                  mvStyles.textCenter,
                  mvStyles.fs_22_600,
                  mvStyles.mb_0,
                  mvStyles.qtyBtn,
                  mvStyles.qtyBtnSm,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              value={qty.toString()}
              style={[mvStyles.qtyBtn, mvStyles.qtyBtnSm]}
              editable={false}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleIncrement}>
              <Text
                style={[
                  mvStyles.textCenter,
                  mvStyles.fs_22_600,
                  mvStyles.mb_0,
                  mvStyles.qtyBtn,
                  mvStyles.qtyBtnSm,
                ]}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
