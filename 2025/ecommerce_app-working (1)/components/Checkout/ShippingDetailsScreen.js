import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

// MapView import
import MapView from "react-native-maps";

import Statusbar from "../Statusbar";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ShippingDetailsScreen = ({ navigation }) => {
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
    console.log(userAddressData);
  };

  useFocusEffect(
    useCallback(() => {
      fetchData(); // Fetch data every time the screen is focused
    }, [])
  );

  const [selectedAddress, setSelectedAddress] = useState(0); //for save address data on radio check
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0); //for active radio

  const handleAddessSelect = (address, index) => {
    setSelectedAddress(address); //for save address data on radio check
    setSelectedAddressIndex(index); //for active radio
  };

  // Card Save Function
  const savingAddress = async () => {
    try {
      const userIdString = await AsyncStorage.getItem("userId");
      const userId = JSON.parse(userIdString); // Convert back to number or original type
      const selectedAddress = userAddressData[selectedAddressIndex];
      console.log(selectedAddress);

      if (!selectedAddress) {
        console.error("No address found for the selected index.");
        return;
      }

      const addressKey = `shipping_address_${userId}`;

      // carete address object
      const addressToSave = {
        name: selectedAddress.name,
        phone: selectedAddress.phone,
        zip: selectedAddress.zip,
        state: selectedAddress.state,
        city: selectedAddress.city,
        address: selectedAddress.address,
        locality: selectedAddress.locality,
        landmark: selectedAddress.landmark,
      };
      console.log(addressToSave);

      // Save the data local in JSON string
      await AsyncStorage.setItem(addressKey, JSON.stringify(addressToSave));

      // console.log("Address saved : ", addressToSave);
      navigation.navigate("Checkout");
    } catch (error) {
      console.error("Error saving address to AsyncStorage:", error);
    }
  };

  // address Save Function
  const shippingDetailSaveAlert = () => {
    Alert.alert("Alert", "Shipping address saved successfully.", [
      { text: "OK", onPress: () => savingAddress() },
    ]);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        <ScrollView>
          <View style={mvStyles.pb_40}>
            {/* Map here */}
            <View style={mvStyles.mb_40}>
              <MapView
                style={{ height: 270 }}
                initialRegion={{
                  latitude: 30.665175259831273,
                  longitude: 76.8436612679731,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </View>

            {/* Form here */}
            <View style={[ThemeStyle.formBox]}>
              {/* Radio button Field */}
              {userAddressData &&
                userAddressData.map((address, index) => (
                  <View style={[mvStyles.borderBtm]} key={index}>
                    <TouchableOpacity
                      onPress={() => handleAddessSelect(address, index)}
                      style={mvStyles.flexRow}
                    >
                      <View style={{ flex: 1 }}>
                        <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>
                          {address.name}
                        </Text>
                        <Text style={[mvStyles.fs_16_400]}>
                          {address.address} {address.city} {address.state}{" "}
                          {address.country}
                        </Text>
                      </View>
                      <View style={{ flex: 0 }}>
                        <View style={mvStyles.circleWrap}>
                          {selectedAddressIndex === index && (
                            <View style={[mvStyles.circleInner]} />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}

              {/* Submit Button */}
              <View style={[ThemeStyle.formLabel]}>
                <TouchableOpacity
                  style={ThemeStyle.GsMainButton}
                  onPress={shippingDetailSaveAlert}
                >
                  <Text
                    style={[
                      ThemeStyle.GsMainButtonText,
                      ThemeStyle.LSmainButton,
                    ]}
                  >
                    SAVE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ShippingDetailsScreen;
