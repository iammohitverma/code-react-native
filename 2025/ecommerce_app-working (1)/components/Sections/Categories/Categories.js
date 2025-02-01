import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mvStyles } from "../../css/MohitStyle";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// category image location
const categoryImagesPath = "https://shop.tmdemo.in/uploads/categories";

function Categories() {
  const [categories, setCategories] = useState(null);
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

      console.log("Response data:", response.data);
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
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return <CategoryBox key={index} item={item} index={index} />;
        }}
        keyExtractor={(item, index) => index}
        style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        numColumns={2}
        columnWrapperStyle={{
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
      <View style={[mvStyles.mb_15]}>
        <View
          style={[
            mvStyles.imageBox,
            mvStyles.br_50,
            { width: 160, height: 160 },
          ]}
        >
          <Image
            style={mvStyles.imageFull}
            source={{ uri: `${categoryImagesPath}/${item.image}` }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={[mvStyles.fs_16_400, mvStyles.fw_600, mvStyles.textCenter]}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
