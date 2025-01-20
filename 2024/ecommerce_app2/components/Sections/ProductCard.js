import { View, Text, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import { useNavigation } from "@react-navigation/native";

import { WishListButton } from "./WishListButton";

const cartIcon = require("../../assets/images/bag.png");

// product image location
const productImagesPath = "https://shop.tmdemo.in/uploads/products/";

export function ProductCard({ item, width, height }) {
  const navigation = useNavigation();
  const cwidth = width || 200;
  const cheight = height || 200;

  const gotoSingleProduct = () => {
    // navigation.navigate("SingleProduct");
    navigation.navigate("SingleProduct", { productId: item.id });
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
            source={{ uri: `${productImagesPath}/${item.image}` }}
            resizeMode="contain"
          />
        </View>
        <Text style={mvStyles.fs_14_400}>{item.name}</Text>
        <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
          ${item.sale_price}
        </Text>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <WishListButton productId={item.id} />
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
