import React, { useState } from "react";
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

const ShippingDetailsScreen = ({ navigation }) => {
  const [selectedAddress, setSelectedAddress] = useState(null); //for save address data on radio check
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null); //for active radio
  const addresses = [
    {
      title: "Home",
      address: "8000 S Kirkland Ave, Chicago...",
    },
    {
      title: "Work",
      address: "8000 S Kirkland Ave, Chicago...",
    },
  ];

  const handleAddessSelect = (address, index) => {
    setSelectedAddress(address); //for save address data on radio check
    setSelectedAddressIndex(index); //for active radio
  };

  // Card Save Function
  const shippingDetailSave = () => {
    Alert.alert("Alert", "Shipping details has been set successfully.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
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
              {addresses.map((address, index) => (
                <View style={[mvStyles.borderBtm]} key={index}>
                  <TouchableOpacity
                    onPress={() => handleAddessSelect(address, index)}
                    style={mvStyles.flexRow}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>
                        {address.title}
                      </Text>
                      <Text style={[mvStyles.fs_16_400]}>
                        {address.address}
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
                  onPress={shippingDetailSave}
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
