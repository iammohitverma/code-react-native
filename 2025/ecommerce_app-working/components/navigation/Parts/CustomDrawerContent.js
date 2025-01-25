import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { DrawerItemList } from "@react-navigation/drawer";
import { DrawerStyle } from "../../css/DrawerStyle";
import { ScrollView } from "react-native-gesture-handler";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={DrawerStyle.menuContainer}>
        {/* <DrawerItemList {...props} /> */}
        {/*You can Hide if you don't need any sidebar menu items*/}
        <View style={DrawerStyle.menuWrapper}>
          <Text style={DrawerStyle.menuHeading}>Auth</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AccountCreated")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Account Created Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot Password")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Forgot Password Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign in")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Login Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign Up")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Register Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetDone")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Reset Done Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Reset Password")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Reset Password Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Verify your phone number")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Verify Phone Number Screen</Text>
          </TouchableOpacity>
        </View>
        <View style={DrawerStyle.menuWrapper}>
          <Text style={DrawerStyle.menuHeading}>Checkout</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Checkout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CartScreen", { screen: "CartTab" })
            }
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductsCart")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Products Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderCancel")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Order Cancel Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderSuccessful")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Order Successful Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("My promocodes")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Promo Code Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TrackOrder")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Track Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShippingDetails")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Shipping Details</Text>
          </TouchableOpacity>
        </View>
        <View style={DrawerStyle.menuWrapper}>
          <Text style={DrawerStyle.menuHeading}>User</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Profile")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("My address")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>My Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddNewAddressScreen")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Add New Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditAddressScreen")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Update Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Payment Method</Text>
          </TouchableOpacity>
        </View>
        <View style={DrawerStyle.menuWrapper}>
          <Text style={DrawerStyle.menuHeading}>Pages</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("BestSeller")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Best Seller</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Categories")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("FeaturedProducts")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Featured Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Onboard")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Onboarding</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderHistory")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderScreen")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PromoCodes")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Promo Codes List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Shop")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SingleProduct")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Single Product Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SplashScreen")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Splash Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Wishlist")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Wishlist</Text>
          </TouchableOpacity>
        </View>
        <View style={DrawerStyle.menuWrapper}>
          <Text style={DrawerStyle.menuHeading}>Components</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ModalScreen")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DeviceOrientation")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>DeviceOrientation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContent;
