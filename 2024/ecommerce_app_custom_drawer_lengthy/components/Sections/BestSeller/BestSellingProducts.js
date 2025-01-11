import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { ProductCard } from "../ProductCard";

function BestSellingProducts() {
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
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <ProductCard key={index} item={item} width={175} height={175} />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{}}
      />
    </View>
  );
}

export default BestSellingProducts;
