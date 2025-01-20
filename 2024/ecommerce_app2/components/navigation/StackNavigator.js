import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOptionsObj } from "./Parts/HeaderOptions"; // New file

import { BottomTabsNavigator } from "./BottomTabsNavigator";

// mohit's screen
import SplashScreen from "../../components/Pages/SplashScreen";
import DeviceOrientation from "../../components/Pages/DeviceOrientation";
import BestSellerScreen from "../../components/Pages/BestSellerScreen";
import CategoriesScreen from "../../components/Pages/CategoriesScreen";
import ShopScreen from "../../components/Pages/ShopScreen";
import FeaturedProductsScreen from "../../components/Pages/FeaturedProductsScreen";
import SingleProductScreen from "../../components/Pages/SingleProductScreen";
import OrderScreen from "../../components/Pages/OrderScreen";
import OrderHistoryScreen from "../../components/Pages/OrderHistoryScreen";
import PromoCodeViewScreen from "../../components/Pages/PromoCodeViewScreen";
import PaymentMethodScreen from "../../components/User/PaymentMethodScreen";
import AddNewCardScreen from "../../components/User/AddNewCardScreen";
import AddNewAddressScreen from "../../components/User/AddNewAddressScreen";
import EditAddressScreen from "../../components/User/EditAddressScreen";
import ShippingDetailsScreen from "../../components/Checkout/ShippingDetailsScreen";
import ProductsCartScreen from "../../components/Checkout/ProductsCartScreen";
import ModalScreen from "../../components/Pages/ModalScreen";
// mohit's screen end

// All Screens created by Aditya Start
import LoginScreen from "../../components/Auth/LoginScreen";
import RegisterScreen from "../../components/Auth/RegisterScreen";
import ForgotPassScreen from "../../components/Auth/ForgotPasswordScreen";
import ResetPasswordScreen from "../../components/Auth/ResetPassword";
import ResetDoneScreen from "../../components/Auth/ResetDoneScreen";
import AccountCreatedScreen from "../../components/Auth/AccountCreatedScreen";
import VerifyYourPhoneNumberScreen from "../../components/Auth/VerifyYourPhoneNumberScreen";
import OnboardingScreen from "../../components/Pages/OnboardingScreen";
import PromoCodeScreen from "../../components/Checkout/PromoCodeScreen";
import OrderSuccessfulScreen from "../../components/Checkout/OrderSuccessfulScreen";
import OrderCancelScreen from "../../components/Checkout/OrderCancelScreen";
import EditProfileScreen from "../../components/User/EditProfileScreen";
import MyAddressScreen from "../../components/User/MyAddressScreen";
import { Image, TouchableOpacity } from "react-native";
// All Screens created by Aditya End

// vikas's screen
import TrackOrderScreen from "../../components/Checkout/TrackOrderScreen";
import CheckoutScreen from "../../components/Checkout/CheckoutScreen";
// vikas's screen end
const logo = require("../../assets/images/logo.png");

const Stack = createNativeStackNavigator();

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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="DeviceOrientation"
      component={DeviceOrientation}
      options={{
        title: "DeviceOrientation",
        header: () => null,
      }}
    />
    <Stack.Screen
      name="BestSeller"
      component={BestSellerScreen}
      options={({ navigation }) => {
        return {
          title: "Best Seller",
          headerShown: true,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Wishlist"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Wishlist",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
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
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />

    {/* Aditya Start */}
    <Stack.Screen
      name="Sign in"
      component={LoginScreen}
      options={({ navigation }) => {
        return {
          title: "Sign in",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Sign Up"
      component={RegisterScreen}
      options={({ navigation }) => {
        return {
          title: "Sign Up",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Forgot Password"
      component={ForgotPassScreen}
      options={({ navigation }) => {
        return {
          title: "Forgot Password",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Reset Password"
      component={ResetPasswordScreen}
      options={({ navigation }) => {
        return {
          title: "Reset Password",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ResetDone"
      component={ResetDoneScreen}
      options={({ navigation }) => {
        return {
          title: "Reset Done",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AccountCreated"
      component={AccountCreatedScreen}
      options={({ navigation }) => {
        return {
          title: "Account Created",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Verify your phone number"
      component={VerifyYourPhoneNumberScreen}
      options={({ navigation }) => {
        return {
          title: "Verify your phone number",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    {/* Aditya End */}
    <Stack.Screen
      name="Search"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Search",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AdityaScreens"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "AdityaScreens",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="CartScreen"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Cart",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Onboard"
      component={OnboardingScreen}
      options={({ navigation }) => {
        return {
          title: "Onboard",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    {/* Aditya Start */}
    <Stack.Screen
      name="OrderSuccessful"
      component={OrderSuccessfulScreen}
      options={({ navigation }) => {
        return {
          title: "Order Successful",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="OrderCancel"
      component={OrderCancelScreen}
      options={({ navigation }) => {
        return {
          title: "Order Cancel",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="My promocodes"
      component={PromoCodeScreen}
      options={({ navigation }) => {
        return {
          title: "My promocodes",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={BottomTabsNavigator}
      options={({ navigation }) => {
        return {
          title: "Profile",
          headerShown: false,
          ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Edit Profile"
      component={EditProfileScreen}
      options={({ navigation }) => {
        return {
          title: "Edit Profile",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="My address"
      component={MyAddressScreen}
      options={({ navigation }) => {
        return {
          title: "My Address",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AddNewCard"
      component={AddNewCardScreen}
      options={({ navigation }) => {
        return {
          title: "Add a new card",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="PaymentMethod"
      component={PaymentMethodScreen}
      options={({ navigation }) => {
        return {
          title: "Payment Method",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AddNewAddressScreen"
      component={AddNewAddressScreen}
      options={({ navigation }) => {
        return {
          title: "Add a new address",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="EditAddressScreen"
      component={EditAddressScreen}
      options={({ navigation }) => {
        return {
          title: "Update Address",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="TrackOrder"
      component={TrackOrderScreen}
      options={({ navigation }) => {
        return {
          title: "Track Order",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ShippingDetails"
      component={ShippingDetailsScreen}
      options={({ navigation }) => {
        return {
          title: "Shipping Details",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={({ navigation }) => {
        return {
          title: "Checkout",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ProductsCart"
      component={ProductsCartScreen}
      options={({ navigation }) => {
        return {
          title: "Cart",
          headerShown: true,
          // ...headerOptionsObj(navigation), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ModalScreen"
      component={ModalScreen}
      options={{
        title: "Modal",
        header: () => null,
      }}
    />
    {/* Aditya End */}
  </Stack.Navigator>
);

export default StackNavigator;
