import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { DrawerItemList } from "@react-navigation/drawer";
import { DrawerStyle } from "../../css/DrawerStyle";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const logo = require("../../../assets/images/logo.png");

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  // AsyncStorage.clear();
  const [userData, setUserData] = useState(null);
  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const url = `https://shop.tmdemo.in/api/user/profile/${userId}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    fetchData(); // Fetch data every time the screen is focused
  }, []);

  return (
    <ScrollView>
      <View style={DrawerStyle.menuContainer}>
        {/* <DrawerItemList {...props} /> */}
        {/*You can Hide if you don't need any sidebar menu items*/}
        <View style={DrawerStyle.menuWrapper}>
          <Image
            style={{
              height: 50,
              width: "100%",
              marginBottom: 25,
            }}
            source={logo}
            resizeMode="contain"
          />
          <Text style={DrawerStyle.menuHeading}>Welcome {userData?.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyAddress")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>My Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BestSeller")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Best Seller</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("FeaturedProducts")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Featured Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Shop")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Wishlist")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CartScreen", { screen: "Cart" })
            }
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderHistory")}
            style={DrawerStyle.menuItem}
          >
            <Text style={DrawerStyle.menuLink}>Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContent;
