import React, {useState} from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
const iconHero = require("../../assets/images/placeholder-profile.png");
const uploadImgIcon = require("../../assets/images/upload_image_icon.png");


const EditProfileScreen = ({ navigation }) => {
  const [ActiveLogOut, ActiveLogOutHolder] = useState(false);
  
  // const logoutUser = () => {
  //     Alert.alert('Message',"Remove Async Storage and navigate to user to login screen");
  //    // navigation.navigate(param);
  // }

  

  const gotoEditProfile = () => {
    Alert.alert('Message',"Edit your profile");
  }
 
  return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barBackground="#eaedf4" />
          <ScrollView>
            <View style={[ThemeStyle.container,ThemeStyle.bgWhite]}>
              <View style={ThemeStyle.ProfileContainer}>
                
                <View style={ThemeStyle.ProfileBox}>
                  
                  <View style={ThemeStyle.ProfileImage}>
                    <Image
                      style={[ThemeStyle.iconHero]}
                      source={iconHero}
                    />
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
                      // onChangeText={newText => setText(newText)}
                      defaultValue={"Aditya Chauhan"}
                    />
                  </View>

                  {/* Email Field */}
                  <View style={[ThemeStyle.formLabel]}>
                    <Text style={[ThemeStyle.labeltext]}>Email</Text>
                    <TextInput
                      style={[ThemeStyle.inputField]}
                      placeholder="Enter your email"
                      // onChangeText={newText => setText(newText)}
                      defaultValue={'adityaprakash.tm@gmail.com'}
                    />
                  </View>

                  {/* Phone Field */}
                  <View style={[ThemeStyle.formLabel]}>
                    <Text style={[ThemeStyle.labeltext]}>Phone Number</Text>
                    <TextInput
                      style={[ThemeStyle.inputField]}
                      placeholder="Enter your phone number"
                      // onChangeText={newText => setText(newText)}
                      defaultValue={"989878897"}
                    />
                  </View>

                  {/* Location Field */}
                  <View style={[ThemeStyle.formLabel]}>
                    <Text style={[ThemeStyle.labeltext]}>Password</Text>
                    <TextInput
                      style={[ThemeStyle.inputField]}
                      placeholder="Enter your location"
                      // onChangeText={newText => setText(newText)}
                      defaultValue={"Chicago, USA"}
                    />
                  </View>

                  {/* Submit Button */}
                  <View style={[ThemeStyle.formLabel]}>
                    <TouchableOpacity 
                      style={ThemeStyle.GsMainButton}
                      // onPress={goToAccountCreated}  // Trigger navigation on button press
                    > 
                      <Text style={[ThemeStyle.GsMainButtonText,ThemeStyle.LSmainButton]}>Save Changes</Text>
                    </TouchableOpacity>
                  </View>

                </View>







              </View>
            </View>
            </ScrollView>
        </SafeAreaView>
      </>
  );
  };

export default EditProfileScreen;
