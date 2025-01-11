import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Drawer } from "react-native-drawer-layout";
import { useNavigation, useNavigationState } from "@react-navigation/native";

import { DrawerLinks } from "./DrawerLinks";

import { mvStyles } from "./css/MohitStyle";

const logo = require("../assets/images/headerLogo.png");
const hamburger = require("../assets/images/hamburger.png");
const cartIcon = require("../assets/images/bag.png");

export default function Header() {
  const navigation = useNavigation();
  const currentScreen = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const [open, setOpen] = useState(false);
  const [zIndexCss, setZIndexCss] = useState({ zIndex: 0 });

  useEffect(() => {
    if (open) {
      setZIndexCss({ zIndex: 1 });
    } else {
      const timeout = setTimeout(() => {
        setZIndexCss({ zIndex: 0 });
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <View style={{ flex: 1 }}>
      <Drawer
        open={open}
        style={[mvStyles.drawerStyle, zIndexCss]}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => (
          <View style={mvStyles.py_40}>
            {DrawerLinks.map((item, index) => (
              <TouchableOpacity
                pointerEvents="none"
                key={index}
                onPress={() => {
                  navigation.navigate(item.screen);
                  setOpen(false);
                }}
              >
                <Text style={mvStyles.drawerItem}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      <View style={mvStyles.headerWrap}>
        <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
          <Image
            style={{ height: 20, width: 30 }}
            source={hamburger}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {currentScreen == "Wishlist" ? (
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CartScreen", { screen: "CartTab" })
          }
        >
          <Image
            style={{ height: 25, width: 25 }}
            source={cartIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* Rest of your app content goes here */}
    </View>
  );
}
