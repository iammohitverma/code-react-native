import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
// import Header from "../Header";
import OrderHistorySection from "../Sections/OrderHistory/OrderHistorySection";

function OrderHistoryScreen() {
  const SECTIONS = [
    // {
    //   title: "Header",
    //   data: [{ component: <Header /> }],
    // },
    {
      title: "Order History",
      data: [{ component: <OrderHistorySection /> }],
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

export default OrderHistoryScreen;
