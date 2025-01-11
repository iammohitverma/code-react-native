import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
// import Header from "../Header";
import BestSellingProducts from "../Sections/BestSeller/BestSellingProducts";

function BestSellerScreen() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "BestSellingProducts",
      data: [{ component: <BestSellingProducts /> }],
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

export default BestSellerScreen;
