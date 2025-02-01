import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyCartScreen from "./EmptyCartScreen";
import CartProducts from "./CartProducts";

const CartScreen = () => {
  const isFocused = useIsFocused();
  const [cartProducts, setCartProducts] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(true);

  const getDataFromLs = async () => {
    try {
      const userIdString = await AsyncStorage.getItem("userId");
      const userId = JSON.parse(userIdString); // Convert back to number or original type

      const cartItemsString = await AsyncStorage.getItem(`cartItems_${userId}`);

      if (!cartItemsString || !userIdString) {
        setIsEmpty(true);
        setCartProducts([]);
        return;
      }

      const cartItems = JSON.parse(cartItemsString);

      if (
        cartItems.products &&
        cartItems.products.length &&
        cartItems.userId === userId
      ) {
        setCartProducts(cartItems.products);
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
        setCartProducts([]);
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
      setIsEmpty(true);
      setCartProducts([]);
    } finally {
      setLoading(false); // Set loading to false after data fetching is done
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        setLoading(true); // Start loading when the screen is focused
        getDataFromLs();
      }
    }, [isFocused])
  );

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return isEmpty ? (
    <EmptyCartScreen />
  ) : (
    <CartProducts products={cartProducts} />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartScreen;
