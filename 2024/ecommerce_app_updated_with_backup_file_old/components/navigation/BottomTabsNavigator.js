import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../components/Pages/HomeScreen";
import SearchScreen from "../../components/Pages/SearchScreen";
import WishlistScreen from "../../components/Pages/WishlistScreen";
import CartScreen from "../../components/Checkout/CartScreen";
import ProfileScreen from "../../components/Pages/ProfileScreen";
import { Image, Platform } from "react-native";

const BottomTab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = focused
              ? require("../../assets/images/HomeActive.png")
              : require("../../assets/images/Home.png");
          } else if (route.name === "Search") {
            iconSource = focused
              ? require("../../assets/images/SearchActive.png")
              : require("../../assets/images/Search.png");
          } else if (route.name === "Wishlist") {
            iconSource = focused
              ? require("../../assets/images/HeartActive.png")
              : require("../../assets/images/Heart.png");
          } else if (route.name === "CartTab") {
            iconSource = focused
              ? require("../../assets/images/CartActive.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Profile") {
            iconSource = focused
              ? require("../../assets/images/ProfileActive.png")
              : require("../../assets/images/Profile.png");
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 35,
                height: 35,
              }}
            />
          );
        },
        tabBarActiveTintColor: "#192639",
        tabBarActiveBackgroundColor: "#192639",
        tabBarInactiveTintColor: "#192639",
        tabBarShowLabel: false, // remove menu text from bottom
        tabBarInactiveBackgroundColor: "#192639",
        tabBarShowIcon: true,
        tabBarLabelStyle: { fontSize: 15, marginTop: 0 },
        tabBarIconStyle: {
          fontSize: 10,
          size: 25,
          width: 60,
          height: 60,
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          paddingVertical: 10,
          height: Platform.OS === "ios" ? 110 : 70,
        },
        // headerLeft: () => (
        //   // route.name !== "HomeScreen" && route.name !== "Signout" ? (
        //   // <BackButton />
        // ),
        // ) : null, // Show back button only on specific screens
        // headerStyle: { backgroundColor: "red" },
        headerLeftContainerStyle: { paddingLeft: 20 },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Page", header: () => null }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search", header: () => null }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{ title: "Wishlist", header: () => null }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartScreen}
        options={{ title: "Cart", header: () => null }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile", header: () => null }}
      />
    </BottomTab.Navigator>
  );
}
