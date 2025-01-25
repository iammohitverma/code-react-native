import { Image, Text, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";

const cartIcon = require("../../assets/images/bag.png");

export function AddToCartButton({ productId, addToCartProps }) {
  const addToCart = () => {
    addToCartProps(productId);
  };

  return (
    <>
      <TouchableOpacity style={mvStyles.productBtn} onPress={addToCart}>
        <Image
          style={{ height: 25, width: 25 }}
          source={cartIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}
