import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Statusbar from "../Statusbar";
import { mvStyles } from "../css/MohitStyle";

// Profile menu item icons
const addressIco = require("../../assets/images/address_ico.png");
const workIcon = require("../../assets/images/workIcon.png");
const locationIcon = require("../../assets/images/locationIcon.png");
const add_icon = require("../../assets/images/add_icon.png");
const editIco = require("../../assets/images/edit_profile_btn.png");

const MyAddressScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={mvStyles.fullScreenWrapper}>
            {/* Address listing */}
            <View>
              <View
                style={[
                  mvStyles.flexRow,
                  mvStyles.space_between,
                  mvStyles.borderBtm,
                ]}
              >
                <View style={mvStyles.w_15}>
                  <Image style={[mvStyles.address_icon]} source={addressIco} />
                </View>
                <View style={[mvStyles.address_text, mvStyles.w_65]}>
                  <Text style={mvStyles.fs_18_600}>Home</Text>
                  <Text style={mvStyles.fs_16_400}>
                    8000 S Kirkland Ave, Chicago...
                  </Text>
                </View>
                <TouchableOpacity
                  style={mvStyles.w_15}
                  onPress={() => navigation.navigate("EditAddressScreen")}
                >
                  <Image
                    style={mvStyles.editIcon}
                    source={editIco}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  mvStyles.flexRow,
                  mvStyles.space_between,
                  mvStyles.borderBtm,
                ]}
              >
                <View style={mvStyles.w_15}>
                  <Image style={[mvStyles.address_icon]} source={workIcon} />
                </View>
                <View style={[mvStyles.address_text, mvStyles.w_65]}>
                  <Text style={mvStyles.fs_18_600}>Work</Text>
                  <Text style={mvStyles.fs_16_400}>
                    8000 S Kirkland Ave, Chicago...
                  </Text>
                </View>
                <TouchableOpacity
                  style={mvStyles.w_15}
                  onPress={() => navigation.navigate("EditAddressScreen")}
                >
                  <Image
                    style={mvStyles.editIcon}
                    source={editIco}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  mvStyles.flexRow,
                  mvStyles.space_between,
                  mvStyles.borderBtm,
                ]}
              >
                <View style={mvStyles.w_15}>
                  <Image
                    style={[mvStyles.address_icon]}
                    source={locationIcon}
                  />
                </View>
                <View style={[mvStyles.address_text, mvStyles.w_65]}>
                  <Text style={mvStyles.fs_18_600}>Other</Text>
                  <Text style={mvStyles.fs_16_400}>
                    8000 S Kirkland Ave, Chicago...
                  </Text>
                </View>
                <TouchableOpacity
                  style={mvStyles.w_15}
                  onPress={() => navigation.navigate("EditAddressScreen")}
                >
                  <Image
                    style={mvStyles.editIcon}
                    source={editIco}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MyAddressScreen;
