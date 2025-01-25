import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// MapView import
import MapView from "react-native-maps";

import Statusbar from "../Statusbar";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";

const AddNewAddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState({
    name: "",
    phone: "",
    zip: "",
    state: "",
    city: "",
    address: "",
    locality: "",
    country: "",
    landmark: "",
    isDefault: 0,
  });

  // handleInputChange Function
  const handleInputChange = (field, value) => {
    setAddressData({ ...addressData, [field]: value });
  };
  const [Loader, SetLoader] = useState();
  const [Status, SetStatus] = useState('');
  const [Error, SetError] = useState('');
  // Card Save Function
  const cardSaveFun = async() => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const { name, phone, zip, state, city, address, locality, country, landmark } = addressData;
    if (!name || !phone || !zip || !state || !city || !address || !locality || !country || !landmark) {
      Alert.alert("Error", "Please fill in field.");
      return;
    }
    
    SetLoader(true);
    try {
      await axios.post(`https://shop.tmdemo.in/api/user/add/addresses/${userId}`, addressData, {
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: false,
      });
      SetLoader(false);
      SetStatus('The address has been added successfully.');
      setAddressData({
        name: "",
        phone: "",
        zip: "",
        state: "",
        city: "",
        address: "",
        locality: "",
        country: "",
        landmark: ""
      })
    } catch (error) {
      SetLoader(false);
      console.log(error);
      SetError('There was an issue adding the address. Please try again.');
    }
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        <ScrollView>
          {Status != "" && (
            <View style={ThemeStyle.inputWrap}>
              <Text style={ThemeStyle.SuccessMsg}>{Status}</Text>
            </View>
          )}
          {Error != "" && (
            <View style={ThemeStyle.inputWrap}>
              <Text style={ThemeStyle.ErrorMsg}>{Error}</Text>
            </View>
          )}
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
              {/* Name Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Name</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Name"
                  onChangeText={(value) => handleInputChange("name", value)}
                />
              </View>

              {/* Phone Field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>Phone Number</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter your phone number"
                  keyboardType="numeric" // Numeric keyboard
                  onChangeText={(value) => {
                    // Ensure the input contains only numbers
                    const numericText = value.replace(/[^0-9]/g, '');
                    handleInputChange("phone", numericText);
                  }}
                />
              </View>

              {/* Zip Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Zip</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Zip Code"
                  onChangeText={(value) => handleInputChange("zip", value)}
                />
              </View>

              {/* State Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>State</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter State "
                  onChangeText={(value) => handleInputChange("state", value)}
                />
              </View>

              {/* City Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>City</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter City"
                  onChangeText={(value) => handleInputChange("city", value)}
                />
              </View>

              {/* Address Field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>ENTER A NEW ADDRESS</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="3646 S 58th Ave, Cicero, IL 60804, U..."
                  onChangeText={(value) => handleInputChange("address", value)}
                />
              </View>

              {/* locality Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Locality</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Locality"
                  onChangeText={(value) => handleInputChange("locality", value)}
                />
              </View>

              {/* country Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Country</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Country"
                  onChangeText={(value) => handleInputChange("country", value)}
                />
              </View>

              {/* landmark Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Landmark</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Landmark"
                  onChangeText={(value) => handleInputChange("landmark", value)}
                />
              </View>

              {/* Submit Button */}
              <View style={[ThemeStyle.formLabel]}>
                <TouchableOpacity
                  style={ThemeStyle.GsMainButton}
                  onPress={cardSaveFun}
                >
                  <Text
                    style={[
                      ThemeStyle.GsMainButtonText,
                      ThemeStyle.LSmainButton,
                    ]}
                  >
                    SAVE ADDRESS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {Loader && (
        <View style={ThemeStyle.loaderScreen}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </>
  );
};

export default AddNewAddressScreen;
