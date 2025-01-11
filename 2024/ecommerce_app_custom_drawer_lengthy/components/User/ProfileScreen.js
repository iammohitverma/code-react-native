import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
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
    // navigation.navigate(param);
  };

  const gotoEditProfile = () => {
    navigation.navigate("Edit Profile");
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barBackground="#eaedf4" />
        <ScrollView>
          <View style={[ThemeStyle.container, ThemeStyle.bgWhite]}>
            <View style={ThemeStyle.ProfileContainer}>
              <View style={ThemeStyle.ProfileBox}>
                <View style={ThemeStyle.ProfileImage}>
                  <Image style={[ThemeStyle.iconHero]} source={iconHero} />
                  <TouchableOpacity
                    // style={ThemeStyle.iconEditProfileBtn}
                    onPress={() => gotoEditProfile()} // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.iconEditProfile]}
                      source={editProfileicon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={ThemeStyle.ProfileNameEmail}>
                  <Text style={ThemeStyle.ProfileName}>Aditya Chauhan</Text>
                  <Text style={ThemeStyle.ProfileEmail}>
                    adityaprakash.tm@gmail.com
                  </Text>
                </View>
              </View>

              <View style={ThemeStyle.ProfileMenuListing}>
                {/* Order history */}
                <TouchableOpacity
                  style={ThemeStyle.ProfileMenuItem}
                  onPress={() => goToInside("Order History")} // Pass Screen name
                >
                  <Image
                    style={[ThemeStyle.ProfileMenuIcon]}
                    source={OrderHistory}
                  />

                  <Text style={ThemeStyle.ProfileMenuText}>Order history</Text>

                  <Image
                    style={[ThemeStyle.ProfileMenuArrow]}
                    source={ArrowRight}
                  />
                </TouchableOpacity>

                {/* Payment Method */}
                <TouchableOpacity
                  style={ThemeStyle.ProfileMenuItem}
                  onPress={() => goToInside("Payment Method")} // Pass Screen name
                >
                  <Image
                    style={[ThemeStyle.ProfileMenuIcon]}
                    source={PaymentMethod}
                  />

                  <Text style={ThemeStyle.ProfileMenuText}>Payment method</Text>

                  <Image
                    style={[ThemeStyle.ProfileMenuArrow]}
                    source={ArrowRight}
                  />
                </TouchableOpacity>

                {/* My Address */}
                <TouchableOpacity
                  style={ThemeStyle.ProfileMenuItem}
                  onPress={() => goToInside("My address")} // Pass Screen name
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
                <TouchableOpacity
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
                </TouchableOpacity>

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
                  style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
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
};

export default ProfileScreen;
