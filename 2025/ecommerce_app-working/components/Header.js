import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

import HeaderCartButton from "./HeaderCartButton";
import { mvStyles } from "./css/MohitStyle";

const logo = require("../assets/images/headerLogo.png");
const hamburger = require("../assets/images/hamburger.png");

export default function Header() {
  const navigation = useNavigation();
  const currentScreen = useNavigationState(
    (state) => state.routes[state.index].name
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={mvStyles.headerWrap}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{ height: 20, width: 30 }}
            source={hamburger}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {currentScreen !== "Home" ? (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={mvStyles.fs_22_600}>{currentScreen}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={{ height: 25, width: 25 }}
              source={logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <HeaderCartButton />
      </View>
      {/* Rest of your app content goes here */}
    </View>
  );
}
