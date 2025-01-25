import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Statusbar from "../Statusbar";
import { mvStyles } from "../css/MohitStyle";

// Profile menu item icons
// const addressIco = require("../../assets/images/address_ico.png");
// const workIcon = require("../../assets/images/workIcon.png");
const locationIcon = require("../../assets/images/locationIcon.png");
const add_icon = require("../../assets/images/add_icon.png");
const editIco = require("../../assets/images/edit_profile_btn.png");

const MyAddressScreen = ({ navigation }) => {
  const [userAddressData, setUserAddressData] = useState(null);
  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const url = `https://shop.tmdemo.in/api/user/addresses/${userId}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log(response.data.data[0]);
        setUserAddressData(response.data.data);
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

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <View style={mvStyles.fullScreenWrapper}>
          {/* Address listing */}
          <View>
            <FlatList
              data={userAddressData}
              renderItem={({ item, index }) => {
                return (
                  <AddressBox key={index} item={item} navigation={navigation} />
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>

          {/* Add a new address Button */}
          <View>
            <TouchableOpacity
              style={{
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("AddNewAddressScreen")}
            >
              <Image
                style={[mvStyles.editIcon, mvStyles.mb_10]}
                source={add_icon}
                resizeMode="contain"
              />
              <Text style={[mvStyles.fs_16_400, mvStyles.textCenter]}>
                Add a new address
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default MyAddressScreen;

// ProductBox Component for Flatlist
export function AddressBox({ item, navigation }) {
  return (
    <View
      style={[mvStyles.flexRow, mvStyles.space_between, mvStyles.borderBtm]}
    >
      <View style={mvStyles.w_15}>
        <Image style={[mvStyles.address_icon]} source={locationIcon} />
      </View>
      <View style={[mvStyles.address_text, mvStyles.w_65]}>
        <Text style={mvStyles.fs_18_600}>{item.name}</Text>
        <Text style={mvStyles.fs_16_400}>
          {item.address} {item.city} {item.zip} {item.state} {item.country}
        </Text>
      </View>
      <TouchableOpacity
        style={mvStyles.w_15}
        onPress={() =>
          navigation.navigate("EditAddressScreen", { address_id: item.id })
        }
      >
        <Image
          style={mvStyles.editIcon}
          source={editIco}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
