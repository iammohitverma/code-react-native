import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOptionsObj } from "../../components/HeaderOptions"; // New file

import { BottomTabsNavigator } from "./BottomTabsNavigator";

import WelcomeScreen from "../../components/Pages/WelcomeScreen";

// mohit's screen
import SplashScreen from "../../components/Pages/SplashScreen";
import BestSellerScreen from "../../components/Pages/BestSellerScreen";
import CategoriesScreen from "../../components/Pages/CategoriesScreen";
import ShopScreen from "../../components/Pages/ShopScreen";
import FeaturedProductsScreen from "../../components/Pages/FeaturedProductsScreen";
import SingleProductScreen from "../../components/Pages/SingleProductScreen";
import OrderScreen from "../../components/Pages/OrderScreen";
import OrderHistoryScreen from "../../components/Pages/OrderHistoryScreen";
import PromoCodeViewScreen from "../../components/Pages/PromoCodeViewScreen";
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
// All Screens created by Aditya End

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
      name="SplashScreen"
      component={SplashScreen}
      options={{
        title: "SplashScreen",
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
      name="Wishlist"
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

export default StackNavigator;
