import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const iconHero = require("../../assets/images/placeholder-profile.png");
const uploadImgIcon = require("../../assets/images/upload_image_icon.png");

const EditProfileScreen = ({ navigation }) => {
  const [Loader, SetLoader] = useState();
  const [Status, SetStatus] = useState('');
  const [Error, SetError] = useState('');
const [FormData, SetFormData] = useState({ name:"", email: "" , mobile:"" });
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
        SetFormData(response.data.data);
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

  // const logoutUser = () => {
  //     Alert.alert('Message',"Remove Async Storage and navigate to user to login screen");
  //    // navigation.navigate(param);
  // }
  const handleInputChange = (field, value) => {
    SetFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const UpdateProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    const userIdString = await AsyncStorage.getItem("userId");
    const userId = JSON.parse(userIdString); // Convert back to number or original type
    const { name , email, mobile} = FormData;
    //console.log(userId);
    
    if (!name) {
      Alert.alert("Error", "Please fill in name field.");
      return;
    }
    if (!mobile) {
      Alert.alert("Error", "Please fill in Phone field.");
      return;
    }
    const data = {
      name: FormData.name,
      email: FormData.email,
      mobile: FormData.mobile
    }
    SetLoader(true);
    try {
      await axios.post(`https://shop.tmdemo.in/api/user/profile/update/${userId}`, data, {
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


  // const gotoEditProfile = () => {
  //   Alert.alert("Message", "Edit your profile");
  // };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Statusbar />
        <ScrollView>
          <View style={[ThemeStyle.container, ThemeStyle.bgWhite]}>
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
            <View style={ThemeStyle.ProfileContainer}>
              <View style={ThemeStyle.ProfileBox}>
                <View style={ThemeStyle.ProfileImage}>
                  <Image style={[ThemeStyle.iconHero]} source={iconHero} />
                  <TouchableOpacity
                  // style={ThemeStyle.iconEditProfileBtn}
                  // onPress={ () => gotoEditProfile('abc') }  // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.iconEditProfile]}
                      source={uploadImgIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[ThemeStyle.formBox]}>
                {/* Name Field */}
                <View style={[ThemeStyle.formLabel]}>
                  <Text style={[ThemeStyle.labeltext]}>Name</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="Enter your name"
                    value={FormData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                  />
                </View>

                {/* Email Field */}
                <View style={[ThemeStyle.formLabel]}>
                  <Text style={[ThemeStyle.labeltext]}>Email</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="Enter your email"
                    value={FormData.email}
                    editable={false}
                    onChangeText={(text) => handleInputChange("email", text)}
                  />
                </View>

                {/* Phone Field */}
                <View style={[ThemeStyle.formLabel]}>
                  <Text style={[ThemeStyle.labeltext]}>Phone Number</Text>
                  <TextInput
                    style={[ThemeStyle.inputField]}
                    placeholder="Enter your phone number"
                    value={FormData.mobile}
                    keyboardType="numeric" // Numeric keyboard
                    onChangeText={(text) => {
                      // Ensure the input contains only numbers
                      const numericText = text.replace(/[^0-9]/g, '');
                      handleInputChange("mobile", numericText);
                    }}
                  />
                </View>

              

                {/* Submit Button */}
                <View style={[ThemeStyle.formLabel]}>
                  <TouchableOpacity
                    style={ThemeStyle.GsMainButton}
                    onPress={UpdateProfile}  // Trigger navigation on button press
                  >
                    <Text
                      style={[
                        ThemeStyle.GsMainButtonText,
                        ThemeStyle.LSmainButton,
                      ]}
                    >
                      Save Changes
                    </Text>
                  </TouchableOpacity>
                </View>
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

export default EditProfileScreen;
