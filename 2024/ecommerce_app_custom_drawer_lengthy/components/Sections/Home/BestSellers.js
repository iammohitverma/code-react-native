import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";

const wishlistIcon = require("../../../assets/images/wishlist.png");
const wishlistIconActive = require("../../../assets/images/wishlist_active.png");

function FeaturedProducts({ navigation }) {
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
      title: " Decor",
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
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return <ProductBox key={index} item={item} navigation={navigation} />;
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default FeaturedProducts;

// ProductBox Component for Flatlist
export function ProductBox({ item, navigation }) {
  const gotoSingleProduct = () => {
    navigation.navigate("SingleProduct");
  };
  const [isWishlisted, setIsWishlisted] = useState(false);

  const wishlistFun = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <View style={[mvStyles.positionRelative, mvStyles.mr_15]}>
      <TouchableOpacity onPress={gotoSingleProduct}>
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
        <TouchableOpacity style={mvStyles.productBtn} onPress={wishlistFun}>
          <Image
            style={{ height: 25, width: 25 }}
            source={isWishlisted ? wishlistIconActive : wishlistIcon} // Toggle icon
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
