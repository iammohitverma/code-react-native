import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
// import Header from "../Header";
import ShopProducts from "../Sections/Shop/ShopProducts";

function ShopScreen() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "Products",
      data: [{ component: <ShopProducts /> }],
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

export default ShopScreen;
