import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Statusbar from "../Statusbar";
import ThemeStyle from "../css/ThemeStyle";
import { mvStyles } from "../css/MohitStyle";

// Visa icon
const visaIcon = require("../../assets/images/visa.png");

const AddNewCardScreen = ({ navigation }) => {
  const [cardData, setCardData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // handleInputChange Function
  const handleInputChange = (field, value) => {
    setCardData({ ...cardData, [field]: value });
  };

  // Card Save Function
  const cardSaveFun = () => {
    Alert.alert("Card Saved", "Your card has been saved successfully.", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        <ScrollView>
          <View style={mvStyles.py_40}>
            {/* Visa Card here */}
            <View
              style={[
                mvStyles.paymentCard,
                mvStyles.w_90,
                mvStyles.mb_20,
                { backgroundColor: "#1F7B8C" },
              ]}
            >
              <Image
                style={{ width: 60, height: 25, marginBottom: 20 }}
                source={visaIcon}
                resizeMode="contain"
              />
              <Text
                style={[mvStyles.fs_16_400, mvStyles.textWhite, mvStyles.mb_20]}
              >
                {cardData.cardNumber || "1234 5678 9876 5432"}
              </Text>
              <View style={[mvStyles.flexRow]}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      mvStyles.fs_14_400,
                      mvStyles.textWhite,
                      mvStyles.mb_0,
                    ]}
                  >
                    Name
                  </Text>
                  <Text style={[, mvStyles.fs_14_400, mvStyles.textWhite]}>
                    {cardData.name || "John Doe"}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      mvStyles.fs_14_400,
                      mvStyles.textWhite,
                      mvStyles.mb_0,
                    ]}
                  >
                    Expiry
                  </Text>
                  <Text style={[mvStyles.fs_14_400, mvStyles.textWhite]}>
                    {cardData.expiry || "00 / 00"}
                  </Text>
                </View>
              </View>
            </View>

            {/* Form here */}
            <View style={[ThemeStyle.formBox]}>
              {/* Name Field */}
              <View style={[ThemeStyle.formLabel, { marginBottom: 10 }]}>
                <Text style={[ThemeStyle.labeltext]}>Name</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="Name"
                  onChangeText={(value) => handleInputChange("name", value)}
                />
              </View>

              {/* Card Number Field */}
              <View style={[ThemeStyle.formLabel]}>
                <Text style={[ThemeStyle.labeltext]}>Card Number</Text>
                <TextInput
                  style={[ThemeStyle.inputField]}
                  placeholder="1234 5678 9876 5432"
                  onChangeText={(value) =>
                    handleInputChange("cardNumber", value)
                  }
                />
              </View>

              <View style={[mvStyles.flexRow, { gap: 20, marginTop: 30 }]}>
                {/* Card expiry Field */}
                <View style={{ flex: 1 }}>
                  <Text style={[ThemeStyle.labeltext]}>MM/YY</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="12 / 28"
                    onChangeText={(value) => handleInputChange("expiry", value)}
                  />
                </View>
                {/* CVV Field */}
                <View style={{ flex: 1 }}>
                  <Text style={[ThemeStyle.labeltext]}>CVV</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="***"
                    onChangeText={(value) => handleInputChange("cvv", value)}
                  />
                </View>
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
                    SAVE CARD
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

export default AddNewCardScreen;
