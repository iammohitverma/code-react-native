import React, {useState} from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
// Profile menu item icons
const addressIco = require("../../assets/images/address_ico.png");
const editIco = require("../../assets/images/edit_ico.png");

const MyAddressScreen = ({ navigation }) => {
 
  return(
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barBackground="#eaedf4" />
          <ScrollView>
            <View style={[ThemeStyle.container,ThemeStyle.bgWhite]}>
              <View style={[ThemeStyle.ProfileContainer,ThemeStyle.m0]}>
                
                <View style={[ThemeStyle.ProfileMenuListing]}>
                  <View 
                    style={ThemeStyle.ProfileMenuItem}
                    // onPress={ () => goToInside('abc') }  // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={addressIco}
                    />
                    
                    <Text style={ThemeStyle.ProfileMenuText}>
                      Order history
                    </Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={editIco}
                    />
                  </View>

                  <View 
                    style={ThemeStyle.ProfileMenuItem}
                    // onPress={ () => goToInside('xyz') }  // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={addressIco}
                    />
                    
                    <Text style={ThemeStyle.ProfileMenuText}>
                      Payment method
                    </Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={editIco}
                    />
                  </View>

                  <View 
                    style={ThemeStyle.ProfileMenuItem}
                    // onPress={ () => goToInside('zxc') }  // Pass Screen name
                  >
                    <Image
                      style={[ThemeStyle.ProfileMenuIcon]}
                      source={addressIco}
                    />
                    
                    <Text style={ThemeStyle.ProfileMenuText}>
                      My Address
                    </Text>

                    <Image
                      style={[ThemeStyle.ProfileMenuArrow]}
                      source={editIco}
                    />
                  </View>
                </View>



              </View>
            </View>
            </ScrollView>
        </SafeAreaView>
      </>
  );
  };

export default MyAddressScreen;
