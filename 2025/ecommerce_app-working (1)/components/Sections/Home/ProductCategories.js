import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mvStyles } from "../../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// category image location
const categoryImagesPath = "https://shop.tmdemo.in/uploads/categories";

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const url = "https://shop.tmdemo.in/api/categories";
    const GetToken = await AsyncStorage.getItem("token"); //get from localStorage

    const token = GetToken;

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={[mvStyles.py_40, mvStyles.categoriesWrap]}>
      {categories.length > 0 ? (
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()} // Use a unique key, like `item.id`, if available
          renderItem={({ item, index }) => {
            return <CategoryBox key={index} item={item} index={index} />;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default ProductCategories;

// CategoryBox Component for Flatlist
export function CategoryBox({ item, index }) {
  const navigation = useNavigation();
  const gotoCategoryProducts = () => {
    //navigation.navigate("SingleProduct");
    navigation.navigate("CategoryProducts", {
      category_Id: item.id,
      category_name: item.name,
    });
  };
  return (
    <TouchableOpacity onPress={gotoCategoryProducts}>
      <View style={mvStyles.mr_15}>
        <View
          style={[
            mvStyles.imageBox,
            mvStyles.br_50,
            mvStyles.w_100px,
            mvStyles.h_100px,
          ]}
        >
          <Image
            style={mvStyles.imageFull}
            source={{ uri: `${categoryImagesPath}/${item.image}` }}
            resizeMode="contain"
          />
        </View>
        <Text style={[mvStyles.fs_14_400, mvStyles.textCenter]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
