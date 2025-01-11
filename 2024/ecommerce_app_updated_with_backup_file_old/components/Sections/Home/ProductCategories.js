import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { mvStyles } from "../../css/MohitStyle";

function ProductCategories() {
  const categories = [
    {
      catIcon: "",
      catText: "Lightning",
    },
    {
      catIcon: "",
      catText: "Bedding",
    },
    {
      catIcon: "",
      catText: "Decor",
    },
    {
      catIcon: "",
      catText: "Chairs",
    },
    {
      catIcon: "",
      catText: "Chairs",
    },
    {
      catIcon: "",
      catText: "Model",
    },
  ];
  return (
    <View style={[mvStyles.py_40, mvStyles.categoriesWrap]}>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return <CategoryBox key={index} item={item} index={index} />;
        }}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default ProductCategories;

// CategoryBox Component for Flatlist
export function CategoryBox({ item, index }) {
  return (
    <TouchableOpacity>
      <View style={mvStyles.mr_15}>
        <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
          <Image
            style={mvStyles.imageFull}
            source={item.catIcon}
            resizeMode="contain"
          />
        </View>
        <Text style={[mvStyles.fs_14_400, mvStyles.textCenter]}>
          {item.catText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
