import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
// import Header from "../Header";
import OrderSection from "../Sections/Order/OrderSection";

function CartProducts() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "Order",
      data: [{ component: <OrderSection /> }],
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
      />
    </SafeAreaView>
  );
}

export default CartProducts;
