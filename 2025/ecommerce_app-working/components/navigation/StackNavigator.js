import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOptionsObj } from "./Parts/HeaderOptions"; // New file

import { BottomTabsNavigator } from "./BottomTabsNavigator";

// mohit's screen
import SplashScreen from "../../components/Pages/SplashScreen";
import DeviceOrientation from "../../components/Pages/DeviceOrientation";
import BestSellerScreen from "../../components/Pages/BestSellerScreen";
// import CategoriesScreen from "../../components/Pages/CategoriesScreen";
import CategoryProductsScreen from "../../components/Pages/CategoryProductsScreen";
import ShopScreen from "../../components/Pages/ShopScreen";
import FeaturedProductsScreen from "../../components/Pages/FeaturedProductsScreen";
import SingleProductScreen from "../../components/Pages/SingleProductScreen";
// import OrderScreen from "../../components/Pages/OrderScreen";
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
      options={({ navigation, route }) => {
        const title = "Home";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="DeviceOrientation"
      component={DeviceOrientation}
      options={{
        title: "Device Orientation", // Define the title explicitly
        header: () => null,
      }}
    />

    <Stack.Screen
      name="BestSeller"
      component={BestSellerScreen}
      options={({ navigation, route }) => {
        const title = "Best Seller";
        return {
          title: title,
          headerShown: true,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Shop"
      component={ShopScreen}
      options={({ navigation, route }) => {
        const title = "Shop";
        return {
          title: title,
          headerShown: true,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="SingleProduct"
      component={SingleProductScreen}
      options={({ navigation, route }) => {
        const title = "Single Product";
        return {
          title: title,
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
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="FeaturedProducts"
      component={FeaturedProductsScreen}
      options={({ navigation, route }) => {
        const title = "Featured Products";
        return {
          title: title,
          headerShown: true,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Wishlist"
      component={BottomTabsNavigator}
      options={({ navigation, route }) => {
        const title = "Wishlist";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Categories"
      component={BottomTabsNavigator}
      options={({ navigation, route }) => {
        const title = "Categories";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    {/* <Stack.Screen
      name="OrderScreen"
      component={OrderScreen}
      options={({ navigation, title,route }) => {
      const title = "Cart";
        return {
          title: "Cart",
          headerShown: true,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    /> */}
    <Stack.Screen
      name="OrderHistory"
      component={OrderHistoryScreen}
      options={({ navigation, route }) => {
        const title = "Order History";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="PromoCodes"
      component={PromoCodeViewScreen}
      options={({ navigation, route }) => {
        const title = "My Promo Codes";
        return {
          title: title,
          headerShown: true,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />

    {/* Aditya Start */}
    <Stack.Screen
      name="Signin"
      component={LoginScreen}
      options={({ navigation, route }) => {
        const title = "Sign in";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={RegisterScreen}
      options={({ navigation, route }) => {
        const title = "Sign Up";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassScreen}
      options={({ navigation, route }) => {
        const title = "Forgot Password";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={({ navigation, route }) => {
        const title = "Reset Password";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ResetDone"
      component={ResetDoneScreen}
      options={({ navigation, route }) => {
        const title = "Reset Done";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AccountCreated"
      component={AccountCreatedScreen}
      options={({ navigation, route }) => {
        const title = "Account Created";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Verifyyourphonenumber"
      component={VerifyYourPhoneNumberScreen}
      options={({ navigation, route }) => {
        const title = "Verify your phone number";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    {/* Aditya End */}
    <Stack.Screen
      name="AdityaScreens"
      component={BottomTabsNavigator}
      options={({ navigation, route }) => {
        const title = "Aditya Screens";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="CartScreen"
      component={BottomTabsNavigator}
      options={({ navigation, route }) => {
        const title = "Cart";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Onboard"
      component={OnboardingScreen}
      options={({ navigation, route }) => {
        const title = "Onboard";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    {/* Aditya Start */}
    <Stack.Screen
      name="OrderSuccessful"
      component={OrderSuccessfulScreen}
      options={({ navigation, route }) => {
        const title = "Order Successful";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="OrderCancel"
      component={OrderCancelScreen}
      options={({ navigation, route }) => {
        const title = "Order Cancel";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="MyPromocodes"
      component={PromoCodeScreen}
      options={({ navigation, route }) => {
        const title = "My promocodes";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={BottomTabsNavigator}
      options={({ navigation, route }) => {
        const title = "Profile";
        return {
          title: title,
          headerShown: false,
          ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={({ navigation, route }) => {
        const title = "Edit Profile";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="MyAddress"
      component={MyAddressScreen}
      options={({ navigation, route }) => {
        const title = "My Address";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AddNewCard"
      component={AddNewCardScreen}
      options={({ navigation, route }) => {
        const title = "Add a new card";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="PaymentMethod"
      component={PaymentMethodScreen}
      options={({ navigation, route }) => {
        const title = "Payment Method";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="AddNewAddressScreen"
      component={AddNewAddressScreen}
      options={({ navigation, route }) => {
        const title = "Add a new address";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="EditAddressScreen"
      component={EditAddressScreen}
      options={({ navigation, route }) => {
        const title = "Update Address";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="TrackOrder"
      component={TrackOrderScreen}
      options={({ navigation, route }) => {
        const title = "Track Order";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ShippingDetails"
      component={ShippingDetailsScreen}
      options={({ navigation, route }) => {
        const title = "Shipping Details";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={({ navigation, route }) => {
        const title = "Checkout";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ProductsCart"
      component={ProductsCartScreen}
      options={({ navigation, route }) => {
        const title = "Cart";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="CategoryProducts"
      component={CategoryProductsScreen}
      options={({ navigation, route }) => {
        const title = "Category";
        return {
          title: title,
          headerShown: true,
          // ...headerOptionsObj(navigation, title, route), //comment this if you don't need cart button in header
        };
      }}
    />
    <Stack.Screen
      name="ModalScreen"
      component={ModalScreen}
      options={{
        title: "Modal Screen",
        header: () => null,
      }}
    />

    {/* Aditya End */}
  </Stack.Navigator>
);

export default StackNavigator;
