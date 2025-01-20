import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

// MapView import
import MapView from "react-native-maps";

import Statusbar from "../Statusbar";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";

const EditAddressScreen = ({ navigation }) => {
  const [addressData, setAddressData] = useState({
    title: "",
    address: "",
  });

  // handleInputChange Function
  const handleInputChange = (field, value) => {
    setAddressData({ ...addressData, [field]: value });
  };

  // Card Save Function
  const cardSaveFun = () => {
    Alert.alert("Address Saved", "Your Address has been saved successfully.", [
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
              {/* Name Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>TITLE</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="TITLE"
                  onChangeText={(value) => handleInputChange("title", value)}
                />
              </View>

              {/* Card Number Field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>ENTER A NEW ADDRESS</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="3646 S 58th Ave, Cicero, IL 60804, U..."
                  onChangeText={(value) => handleInputChange("address", value)}
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
                    UPDATE
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

export default EditAddressScreen;
