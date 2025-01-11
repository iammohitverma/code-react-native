import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { mvStyles } from "../../css/MohitStyle";

function Categories() {
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
    {
      catIcon: "",
      catText: "Tables",
    },
  ];
  return (
    <View style={[mvStyles.py_40, mvStyles.categoriesWrap]}>
      {/* <Text style={[mvStyles.fs_22_600, mvStyles.textCenter, mvStyles.mb_15]}>
        Categories
      </Text> */}
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return <CategoryBox key={index} item={item} index={index} />;
        }}
        keyExtractor={(item, index) => index}
        style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        numColumns={2}
        columnWrapperStyle={{
          // justifyContent: "space-between",
          gap: 20,
        }}
        contentContainerStyle={{}}
      />
    </View>
  );
}

export default Categories;

// CategoryBox Component for Flatlist
export function CategoryBox({ item, index }) {
  return (
    <TouchableOpacity>
      <View style={[mvStyles.mb_15]}>
        <View style={[mvStyles.imageBox, { width: 160, height: 160 }]}>
          <Image
            style={mvStyles.imageFull}
            source={item.catIcon}
            resizeMode="contain"
          />
        </View>
        <Text
          style={[mvStyles.fs_16_400, mvStyles.fw_600, mvStyles.textCenter]}
        >
          {item.catText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
