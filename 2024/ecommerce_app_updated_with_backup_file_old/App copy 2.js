import { Image, TouchableOpacity, Platform, View, Text } from "react-native";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
// drawer

import WelcomeScreen from "./components/Pages/WelcomeScreen";
import SearchScreen from "./components/Pages/SearchScreen";

// mohit's screen
import SplashScreen from "./components/Pages/SplashScreen";
import HomeScreen from "./components/Pages/HomeScreen";
import BestSellerScreen from "./components/Pages/BestSellerScreen";
import CategoriesScreen from "./components/Pages/CategoriesScreen";
import ShopScreen from "./components/Pages/ShopScreen";
import WishlistScreen from "./components/Pages/WishlistScreen";
import FeaturedProductsScreen from "./components/Pages/FeaturedProductsScreen";
import SingleProductScreen from "./components/Pages/SingleProductScreen";
import OrderScreen from "./components/Pages/OrderScreen";
import OrderHistoryScreen from "./components/Pages/OrderHistoryScreen";
import PromoCodeViewScreen from "./components/Pages/PromoCodeViewScreen";
// mohit's screen end

// All Screens created by Aditya Start
import LoginScreen from "./components/Auth/LoginScreen";
import RegisterScreen from "./components/Auth/RegisterScreen";
import ForgotPassScreen from "./components/Auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/Auth/ResetPassword";
import ResetDoneScreen from "./components/Auth/ResetDoneScreen";
import AccountCreatedScreen from "./components/Auth/AccountCreatedScreen";
import VerifyYourPhoneNumberScreen from "./components/Auth/VerifyYourPhoneNumberScreen";
import CartScreen from "./components/Checkout/CartScreen";
import ProfileScreen from "./components/User/ProfileScreen";
import OnboardingScreen from "./components/Pages/OnboardingScreen";
import PromoCodeScreen from "./components/Checkout/PromoCodeScreen";
import OrderSuccessfulScreen from "./components/Checkout/OrderSuccessfulScreen";
import OrderCancelScreen from "./components/Checkout/OrderCancelScreen";
import EditProfileScreen from "./components/User/EditProfileScreen";
import MyAddressScreen from "./components/User/MyAddressScreen";
// All Screens created by Aditya End

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const cartIcon = require("./assets/images/bag.png");
const logo = require("./assets/images/logo.png");

// App
function App() {
  const [fontsLoaded] = useFonts({
    "Hind-Bold": require("./assets/fonts/hind/Hind-Bold.ttf"),
    "Hind-Light": require("./assets/fonts/hind/Hind-Light.ttf"),
    "Hind-Medium": require("./assets/fonts/hind/Hind-Medium.ttf"),
    "Hind-Regular": require("./assets/fonts/hind/Hind-Regular.ttf"),
    "Hind-SemiBold": require("./assets/fonts/hind/Hind-SemiBold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      console.log("Fonts loaded successfully.");
    } else {
      console.log("Fonts are still loading.");
    }
  }, [fontsLoaded]);
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}

const headerOptionsObj = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ paddingLeft: 0 }}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          console.log("No previous screen to go back to");
        }
      }}
    >
      <Image
        source={require("./assets/images/back_btn.png")}
        style={{ height: 20, width: 40 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        console.log("Navigating to Cart");
        // navigation.navigate("Cart"); // Ensure "Cart" matches the route name in your navigator
        navigation.navigate("CartScreen", { screen: "CartTab" });
      }}
    >
      <Image
        style={{ height: 25, width: 25 }}
        source={cartIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ),
});

// CustomDrawerContent
const CustomDrawerContent = (props) => {
  // const { navigationprops } = props;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Default Drawer Items */}
      {/* <DrawerItemList {...props} /> */}
      {/*You can Hide if you don't need any sidebar menu items*/}

      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen", { screen: "CartTab" })}
      >
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Wishlist", { screen: "Wishlist" })}
      >
        <Text>Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
};

// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: { backgroundColor: "#fff" },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Main"
      component={StackNavigator}
      options={{ title: "Home" }}
    />
  </Drawer.Navigator>
);

// Stack navigation
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center", // Align the title in the center
      headerStyle: {
        backgroundColor: "#ffffff",
      }, // Background color of the header
      headerTintColor: "#000", // Color of the back button and title
      headerTitleStyle: {
        // Title text styling
        fontSize: 18,
        fontFamily: "Hind-SemiBold",
        textAlign: "center",
        backgroundColor: "red",
      },
    }}
  >
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        title: "SplashScreen",
        header: () => null,
      }}
    />
    <Stack.Screen
      name="Home"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Home",
          headerShown: false,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="BestSeller"
      component={BestSellerScreen}
      options={({ navigation }) => {
        return {
          title: "Best Seller",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="Shop"
      component={ShopScreen}
      options={({ navigation }) => {
        return {
          title: "Shop",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="SingleProduct"
      component={SingleProductScreen}
      options={({ navigation }) => {
        return {
          title: "",
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                style={{ height: 30, width: 30 }} // Customize the size as needed
                source={logo} // Replace with your icon
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="FeaturedProducts"
      component={FeaturedProductsScreen}
      options={({ navigation }) => {
        return {
          title: "Featured Products",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="WishlistA"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Wishlist",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={({ navigation }) => {
        return {
          title: "Categories",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="OrderScreen"
      component={OrderScreen}
      options={({ navigation }) => {
        return {
          title: "Order",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="OrderHistory"
      component={OrderHistoryScreen}
      options={({ navigation }) => {
        return {
          title: "Order History",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="PromoCodes"
      component={PromoCodeViewScreen}
      options={({ navigation }) => {
        return {
          title: "My Promo Codes",
          headerShown: true,
          ...headerOptionsObj(navigation), // Spread the options
        };
      }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    {/* Aditya Start */}
    <Stack.Screen
      name="Sign in"
      component={LoginScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Sign Up"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Forgot Password"
      component={ForgotPassScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Reset Password"
      component={ResetPasswordScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="ResetDone"
      component={ResetDoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AccountCreated"
      component={AccountCreatedScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Verify your phone number"
      component={VerifyYourPhoneNumberScreen}
      options={{ headerShown: true }}
    />
    {/* Aditya End */}
    <Stack.Screen
      name="Search"
      component={BottomTabsNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CartScreen"
      component={BottomTabsNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Onboard"
      component={OnboardingScreen}
      options={{ headerShown: false }}
    />
    {/* Aditya Start */}
    <Stack.Screen
      name="OrderSuccessful"
      component={OrderSuccessfulScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OrderCancel"
      component={OrderCancelScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="My promocodes"
      component={PromoCodeScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Profile"
      component={BottomTabsNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Edit Profile"
      component={EditProfileScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="My address"
      component={MyAddressScreen}
      options={{ headerShown: true }}
    />
    {/* Aditya End */}
  </Stack.Navigator>
);

// BottomTabsNavigator
function BottomTabsNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = focused
              ? require("./assets/images/HomeActive.png")
              : require("./assets/images/Home.png");
          } else if (route.name === "Search") {
            iconSource = focused
              ? require("./assets/images/SearchActive.png")
              : require("./assets/images/Search.png");
          } else if (route.name === "Wishlist") {
            iconSource = focused
              ? require("./assets/images/HeartActive.png")
              : require("./assets/images/Heart.png");
          } else if (route.name === "CartTab") {
            iconSource = focused
              ? require("./assets/images/CartActive.png")
              : require("./assets/images/Cart.png");
          } else if (route.name === "Profile") {
            iconSource = focused
              ? require("./assets/images/ProfileActive.png")
              : require("./assets/images/Profile.png");
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

export default App;
