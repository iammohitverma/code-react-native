import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
import Header from "../Header";
import FeaturedProducts from "../Sections/FeaturedProducts/FeaturedProducts";

function FeaturedProductsScreen() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "FeaturedProducts",
      data: [{ component: <FeaturedProducts /> }],
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

export default FeaturedProductsScreen;
