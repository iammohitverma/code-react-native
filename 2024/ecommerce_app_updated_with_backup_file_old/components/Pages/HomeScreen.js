import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
import Header from "../Header";
import Banner from "../Sections/Home/Banner";
import AdBanner from "../Sections/Home/AdBanner";
import ProductCategories from "../Sections/Home/ProductCategories";
import FeaturedProducts from "../Sections/Home/FeaturedProducts";
import BestSellers from "../Sections/Home/BestSellers";

function HomeScreen({ navigation }) {
  const SECTIONS = [
    {
      title: "Header",
      data: [{ component: <Header navigation={navigation} /> }],
    },
    {
      title: "Banner",
      data: [{ component: <Banner navigation={navigation} /> }],
    },
    {
      title: "ProductCategories",
      data: [{ component: <ProductCategories /> }],
    },
    {
      title: "FeaturedProducts",
      data: [{ component: <FeaturedProducts /> }],
    },
    {
      title: "AdBanner",
      data: [{ component: <AdBanner navigation={navigation} /> }],
    },
    {
      title: "BestSellers",
      data: [{ component: <BestSellers navigation={navigation} /> }],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Statusbar />
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View key={index}>{item.component}</View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
