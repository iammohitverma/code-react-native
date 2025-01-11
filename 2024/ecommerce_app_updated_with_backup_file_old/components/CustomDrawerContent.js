import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { DrawerItemList } from "@react-navigation/drawer";
import { DrawerStyle } from "./css/DrawerStyle";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* <DrawerItemList {...props} /> */}
      {/*You can Hide if you don't need any sidebar menu items*/}
      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen", { screen: "CartTab" })}
      >
        <Text style={DrawerStyle.test}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Wishlist", { screen: "Wishlist" })}
      >
        <Text>Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;
