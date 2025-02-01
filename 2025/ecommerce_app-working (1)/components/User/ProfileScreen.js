import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
import Header from "../Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const iconHero = require("../../assets/images/placeholder-profile.png");
const editProfileicon = require("../../assets/images/edit_profile_btn.png");
const LogOut = require("../../assets/images/logout.png");

// Profile menu item icons
const OrderHistory = require("../../assets/images/OrderHistory.png");
const PaymentMethod = require("../../assets/images/PaymentMethod.png");
const Promocodes = require("../../assets/images/Promocodes.png");
const Address = require("../../assets/images/Address.png");
const SignOut = require("../../assets/images/SignOut.png");
const ArrowRight = require("../../assets/images/arrow_right.png");

const ProfileScreen = ({ navigation }) => {
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

  useFocusEffect(
    useCallback(() => {
      fetchData(); // Fetch data every time the screen is focused
    }, [])
  );

  const [ActiveLogOut, ActiveLogOutHolder] = useState(false);
  const goToInside = (param) => {
    if (param === "signout") {
      ActiveLogOutHolder(true);
    } else {
      if (param === "My address") {
        navigation.navigate(param);
      } else {
        Alert.alert("Message", param);
      }
    }
  };

  const cancelLogout = () => {
    ActiveLogOutHolder(false);
  };
  const logoutUser = () => {
    Alert.alert(
      "Message",
      "Remove Async Storage and navigate to user to login screen"
    );
    AsyncStorage.clear();
    // navigation.navigate("Sign in");
    navigation.reset({
      index: 0,
      routes: [{ name: "Sign in" }], // Redirect to Login screen
    });
  };

  const gotoEditProfile = () => {
    navigation.navigate("EditProfile");
  };
  if (userData) {
    return (
      <>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <Statusbar />
          <ScrollView>
            <Header />
            <View style={[ThemeStyle.container, ThemeStyle.bgWhite]}>
              <View style={ThemeStyle.ProfileContainer}>
                <View style={ThemeStyle.ProfileBox}>
                  <View style={ThemeStyle.ProfileImage}>
                    <Image style={[ThemeStyle.iconHero]} source={iconHero} />
                    <TouchableOpacity
                      // style={ThemeStyle.iconEditProfileBtn}
                      onPress={gotoEditProfile} // Pass Screen name
                    >
                      <Image
                        style={[ThemeStyle.iconEditProfile]}
                        source={editProfileicon}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={ThemeStyle.ProfileNameEmail}>
                    <Text style={ThemeStyle.ProfileName}>{userData.name}</Text>
                    <Text style={ThemeStyle.ProfileEmail}>
                      {userData.email}
                    </Text>
                  </View>
                </View>

                <View style={ThemeStyle.ProfileMenuListing}>
                  {/* Order history */}
                  <TouchableOpacity
                    style={ThemeStyle.ProfileMenuItem}
                    onPress={() => navigation.navigate("OrderHistory")} // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={OrderHistory}
                    />

                    <Text style={ThemeStyle.ProfileMenuText}>
                      Order history
                    </Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={ArrowRight}
                    />
                  </TouchableOpacity>

                  {/* Payment Method */}
                  <TouchableOpacity
                    style={ThemeStyle.ProfileMenuItem}
                    onPress={() => navigation.navigate("PaymentMethod")} // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={PaymentMethod}
                    />

                    <Text style={ThemeStyle.ProfileMenuText}>
                      Payment method
                    </Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={ArrowRight}
                    />
                  </TouchableOpacity>

                  {/* My Address */}
                  <TouchableOpacity
                    style={ThemeStyle.ProfileMenuItem}
                    onPress={() => navigation.navigate("MyAddress")} // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={Promocodes}
                    />

                    <Text style={ThemeStyle.ProfileMenuText}>My Address</Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={ArrowRight}
                    />
                  </TouchableOpacity>

                  {/* My Promocodes */}
                  {/* <TouchableOpacity
                  style={ThemeStyle.ProfileMenuItem}
                  onPress={() => goToInside("My Promocodes")} // Pass Screen name
                >
                  <Image
                    style={[ThemeStyle.ProfileMenuIcon]}
                    source={Address}
                  />

                  <Text style={ThemeStyle.ProfileMenuText}>My promocodes</Text>

                  <Image
                    style={[ThemeStyle.ProfileMenuArrow]}
                    source={ArrowRight}
                  />
                </TouchableOpacity> */}

                  {/* Signout */}
                  <TouchableOpacity
                    style={[ThemeStyle.ProfileMenuItem, ThemeStyle.border_0]}
                    onPress={() => goToInside("signout")} // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={SignOut}
                    />

                    <Text style={ThemeStyle.ProfileMenuText}>Sign out</Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={ArrowRight}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

        {/* Logout Popup */}
        {ActiveLogOut && (
          <View style={[ThemeStyle.SignOutPopUp]}>
            <View style={[ThemeStyle.SignOutPopUpBox]}>
              <Image style={[ThemeStyle.iconHero]} source={LogOut} />
              <Text style={[ThemeStyle.SignOutPopHeading]}>
                Are you sure you want to sign out ?
              </Text>

              <View style={ThemeStyle.logoutButtonsWrap}>
                <TouchableOpacity
                  style={[
                    ThemeStyle.GsMainButton,
                    ThemeStyle.LightBgButton,
                    ThemeStyle.spacingBet,
                  ]}
                  onPress={logoutUser}
                >
                  <Text
                    style={[
                      ThemeStyle.GsMainButtonText,
                      ThemeStyle.LSmainButton,
                      ThemeStyle.LightBgButtonText,
                    ]}
                  >
                    SURE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[ThemeStyle.GsMainButton, ThemeStyle.spacingBet]}
                  onPress={cancelLogout}
                >
                  <Text
                    style={[
                      ThemeStyle.GsMainButtonText,
                      ThemeStyle.LSmainButton,
                    ]}
                  >
                    CANCEL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </>
    );
  }
};

export default ProfileScreen;
