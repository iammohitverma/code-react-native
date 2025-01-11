import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductCard } from "../ProductCard";
import { mvStyles } from "../../css/MohitStyle";

function FeaturedProducts() {
  const navigation = useNavigation();
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
      title: "Decor",
      price: "$36.00",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Chairs",
      price: "$14.00",
    },
  ];
  return (
    <View style={[mvStyles.pb_40, mvStyles.px_20]}>
      <View style={mvStyles.flexRow}>
        <Text style={[mvStyles.fs_22_600, { flex: 1.5 }]}>
          Featured products
        </Text>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("FeaturedProducts")}
        >
          <Text style={[mvStyles.fs_14_400, { textAlign: "right" }]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return <ProductCard key={index} item={item} />;
        }}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ display: "flex", gap: 20 }}
      />
    </View>
  );
}

export default FeaturedProducts;
