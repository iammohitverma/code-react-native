import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { mvStyles } from "../../MohitStyle";

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
      catText: "Chairs",
    },
  ];
  return (
    <View style={[mvStyles.py_40, mvStyles.categoriesWrap]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={mvStyles.mr_15}>
              <View
                style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}
              >
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
        ))}
      </ScrollView>
    </View>
  );
}

export default ProductCategories;
