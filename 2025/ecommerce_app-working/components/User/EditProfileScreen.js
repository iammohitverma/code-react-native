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
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";
const iconHero = require("../../assets/images/placeholder-profile.png");
const uploadImgIcon = require("../../assets/images/upload_image_icon.png");

// expo-image-picker
import * as ImagePicker from "expo-image-picker";
const EditProfileScreen = ({ navigation }) => {
  const [Loader, SetLoader] = useState();
  const [Status, SetStatus] = useState("");
  const [Error, SetError] = useState("");
  const [FormData, SetFormData] = useState({ name: "", email: "", mobile: "" });
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
  }, []);

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
    const { name, email, mobile } = FormData;
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
      mobile: FormData.mobile,
    };
    SetLoader(true);
    try {
      await axios.post(
        `https://shop.tmdemo.in/api/user/profile/update/${userId}`,
        data,
        {
          headers: {
            // Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );
      SetLoader(false);
      SetStatus("The profile has been updated successfully");
    } catch (error) {
      SetLoader(false);
      console.log(error);
      SetError("The profile has not been updated. Please try again.");
    }
  };

  // const gotoEditProfile = () => {
  //   Alert.alert("Message", "Edit your profile");
  // };

  // Stores the selected image URI
  const [file, setFile] = useState(null);

  // Stores any error message
  const [error, setError] = useState(null);

  // Function to pick an image from
  //the device's media library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
                 roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        setFile(result.uri);

        // Clear any previous errors
        setError(null);
      }
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Statusbar />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.header}>Add Image:</Text>

            {/* Button to choose an image */}
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Choose Image</Text>
            </TouchableOpacity>

            {/* Conditionally render the image 
            or error message */}
            {file ? (
              <>
                <Text>{file}</Text>
                {/* // Display the selected image */}
                <View style={styles.imageContainer}>
                  <Image source={{ uri: file }} style={styles.image} />
                </View>
              </>
            ) : (
              // Display an error message if there's
              // an error or no image selected
              <Text style={styles.errorText}>{error}</Text>
            )}
          </View>

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
                  <TouchableOpacity onPress={pickImage}>
                    {file ? (
                      // Display the selected image
                      <View style={styles.imageContainer}>
                        <Image source={{ uri: file }} style={styles.image} />
                      </View>
                    ) : (
                      <Image
                        style={[ThemeStyle.iconEditProfile]}
                        source={uploadImgIcon}
                      />
                    )}
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
                      const numericText = text.replace(/[^0-9]/g, "");
                      handleInputChange("mobile", numericText);
                    }}
                  />
                </View>

                {/* Submit Button */}
                <View style={[ThemeStyle.formLabel]}>
                  <TouchableOpacity
                    style={ThemeStyle.GsMainButton}
                    onPress={UpdateProfile} // Trigger navigation on button press
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
