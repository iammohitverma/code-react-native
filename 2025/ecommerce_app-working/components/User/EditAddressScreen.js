import React, { useEffect, useState } from "react";
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

const EditAddressScreen = ({ route, navigation }) => {
  console.log(route);
  
  const { address_id } = route.params; 
 
   const [userAddressData, setUserAddressData] = useState(null);
  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const url = `https://shop.tmdemo.in/api/user/address/${userId}/${address_id}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        
        setUserAddressData(response.data.data);
      }
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

 useEffect(() => {
     fetchData();
   },[]);


  // const [addressData, setAddressData] = useState({
  //   userAddressData
  // });

  // handleInputChange Function
  const handleInputChange = (field, value) => {
    setUserAddressData({ ...userAddressData, [field]: value });
  };
 const [Loader, SetLoader] = useState();
  const [Status, SetStatus] = useState('');
  const [Error, SetError] = useState('');
  // Card Save Function
  const addressSaveFun = async() => {
    // Alert.alert("Address Saved", "Your Address has been saved successfully.", [
    //   { text: "OK", onPress: () => console.log("OK Pressed") },
    // ]);
    
    const token = await AsyncStorage.getItem("token");
    const { name, phone,zip,state,city,address,locality,country,landmark } = userAddressData;
    console.log(userAddressData);

    if (!name || !phone || !zip || !state || !city || !address || !locality || !country || !landmark) {
      Alert.alert("Error", "Please fill in field.");
      return;
    }
    const data = {
      name: userAddressData.name,
      phone: userAddressData.phone,
      zip: userAddressData.zip,
      state: userAddressData.state,
      city: userAddressData.city,
      address: userAddressData.address,
      locality: userAddressData.locality,
      country: userAddressData.country,
      landmark: userAddressData.landmark,
      isDefault: 0
    }
    SetLoader(true);
    try {
      await axios.post(`https://shop.tmdemo.in/api/user/update/address/${address_id}`, data, {
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: false,
      });
      SetLoader(false);
      SetStatus('The profile has been updated successfully');

    } catch (error) {
      SetLoader(false);
      console.log(error);
      SetError('The profile has not been updated. Please try again.');
    }
  };
  if (userAddressData){
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
                  value={userAddressData.name}
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
                  value={userAddressData.phone}
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
                  value={userAddressData.zip}
                  onChangeText={(value) => handleInputChange("zip", value)}
                />
              </View>

              {/* State Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>State</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter State "
                  value={userAddressData.state}
                  onChangeText={(value) => handleInputChange("state", value)}
                />
              </View>

              {/* City Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>City</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter City"
                  value={userAddressData.city}
                  onChangeText={(value) => handleInputChange("city", value)}
                />
              </View>

              {/* Address Field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>ENTER A NEW ADDRESS</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="3646 S 58th Ave, Cicero, IL 60804, U..."
                  value={userAddressData.address}
                  onChangeText={(value) => handleInputChange("address", value)}
                />
              </View>

              {/* locality Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Locality</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Locality"
                  value={userAddressData.locality}
                  onChangeText={(value) => handleInputChange("locality", value)}
                />
              </View>

              {/* country Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Country</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Country"
                  value={userAddressData.country}
                  onChangeText={(value) => handleInputChange("country", value)}
                />
              </View>

              {/* landmark Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Landmark</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Enter Landmark"
                  value={userAddressData.landmark}
                  onChangeText={(value) => handleInputChange("landmark", value)}
                />
              </View>

              {/* Submit Button */}
              <View style={[ThemeStyle.formLabel]}>
                <TouchableOpacity
                  style={ThemeStyle.GsMainButton}
                  onPress={addressSaveFun}
                >
                  <Text
                    style={[
                      ThemeStyle.GsMainButtonText,
                      ThemeStyle.LSmainButton,
                    ]}
                  >
                    UPDATE
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
}
};

export default EditAddressScreen;
