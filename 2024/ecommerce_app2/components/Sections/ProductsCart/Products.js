import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";

const wishlistIcon = require("../../../assets/images/wishlist.png");
const wishlistIconActive = require("../../../assets/images/wishlist_active.png");
const deleteIcon = require("../../../assets/images/deleteIcon.png");

function Wishlist() {
  const products = [
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Bar stool",
      price: "$24.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Table lamp",
      price: "$50.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: " Decor ",
      price: "$36.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Chairs",
      price: "$14.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Bar stool",
      price: "$24.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Table lamp",
      price: "$50.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: " Decor ",
      price: "$36.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Chairs",
      price: "$14.00",
    },
  ];
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
  const [isWishlisted, setIsWishlisted] = useState(true);

  const wishlistFun = () => {
    setIsWishlisted(!isWishlisted);
  };
  const removeFromCart = () => {
    console.log("Product removed from cart");
  };

  return (
    <View
      style={[mvStyles.positionRelative, mvStyles.mr_15, mvStyles.borderBtm]}
    >
      <TouchableOpacity>
        <View style={[mvStyles.flexRow, { paddingRight: 30 }]}>
          <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
            <Image
              style={mvStyles.imageFull}
              source={item.featuredImage}
              resizeMode="contain"
            />
          </View>
          <View style={[mvStyles.px_10, { flexShrink: 1 }]}>
            <Text style={[mvStyles.fs_14_400]}>{item.title}</Text>
            <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <TouchableOpacity
          style={[mvStyles.productBtn, { marginBottom: 15 }]}
          onPress={wishlistFun}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={isWishlisted ? wishlistIconActive : wishlistIcon} // Toggle icon
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={mvStyles.productBtn} onPress={removeFromCart}>
          <Image
            style={{ height: 20, width: 20 }}
            source={deleteIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
