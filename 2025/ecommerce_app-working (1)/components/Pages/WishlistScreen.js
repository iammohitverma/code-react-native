import { SafeAreaView, SectionList, View } from "react-native";
import Statusbar from "../Statusbar";
import Header from "../Header";
import Wishlist from "../Sections/Wishlist/Wishlist";

function WishlistScreen() {
  const SECTIONS = [
    {
      title: "Header",
      data: [{ component: <Header /> }],
    },
    {
      title: "Wishlist",
      data: [{ component: <Wishlist /> }],
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

export default WishlistScreen;
