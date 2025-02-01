import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  SectionList,
  View,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Statusbar from "../Statusbar";
import Banner from "../Sections/SingleProduct/Banner";
import ProductDetail from "../Sections/SingleProduct/ProductDetail";
import { mvStyles } from "../css/MohitStyle";

function SingleProductScreen({ route }) {
  const [singleProductData, setSingleProductData] = useState();
  const [loading, setLoading] = useState(true);

  // get values from home using router
  const { productId } = route.params;

  const fetchData = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    const url = `https://shop.tmdemo.in/api/product/fetch/${productId}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setSingleProductData(response.data.product_detail);
        setLoading(false);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data every time the screen is focused
  }, []);

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <View style={mvStyles.heightCover}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const SECTIONS = [
    {
      title: "Banner",
      data: [
        {
          component: (
            <Banner
              bannerImages={singleProductData?.images || []} // Fallback to an empty array if images is undefined
            />
          ),
        },
      ],
    },
    {
      title: "ProductDetail",
      data: [{ component: <ProductDetail details={singleProductData} /> }],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Statusbar />
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View key={index}>{item.component}</View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
}

export default SingleProductScreen;
