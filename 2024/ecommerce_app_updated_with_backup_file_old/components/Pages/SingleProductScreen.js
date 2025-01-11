import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
import Header from "../Header";
import Banner from "../Sections/SingleProduct/Banner";
import ProductDetail from "../Sections/SingleProduct/ProductDetail";

function SingleProductScreen() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "Banner",
      data: [{ component: <Banner /> }],
    },
    {
      title: "ProductDetail",
      data: [{ component: <ProductDetail /> }],
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
