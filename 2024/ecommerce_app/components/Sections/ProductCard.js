import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import { useNavigation } from "@react-navigation/native";

const wishlistIcon = require("../../assets/images/wishlist.png");
const wishlistIconActive = require("../../assets/images/wishlist_active.png");
const cartIcon = require("../../assets/images/bag.png");

export function ProductCard({ item, width, height }) {
  const navigation = useNavigation();
  const cwidth = width || 200;
  const cheight = height || 200;

  const [isWishlisted, setIsWishlisted] = useState(false);

  const wishlistFun = () => {
    setIsWishlisted(!isWishlisted);
  };
  const gotoSingleProduct = () => {
    console.log("a");
    navigation.navigate("SingleProduct");
  };

  return (
    <View
      style={[
        mvStyles.positionRelative,
        { marginHorizontal: 0 },
        mvStyles.mb_15,
      ]}
    >
      <TouchableOpacity onPress={gotoSingleProduct}>
        <View style={[mvStyles.imageBox]} width={cwidth} height={cheight}>
          <Image
            style={mvStyles.imageFull}
            source={item.featuredImage}
            resizeMode="contain"
          />
        </View>
        <Text style={mvStyles.fs_14_400}>{item.title}</Text>
        <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>{item.price}</Text>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <TouchableOpacity style={mvStyles.productBtn} onPress={wishlistFun}>
          <Image
            style={{ height: 25, width: 25 }}
            source={isWishlisted ? wishlistIconActive : wishlistIcon} // Toggle icon
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={mvStyles.productBtn}>
          <Image
            style={{ height: 25, width: 25 }}
            source={cartIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
