import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import { mvStyles } from "../css/MohitStyle";
import Statusbar from "../Statusbar";

const SearchScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Statusbar />
        <View style={mvStyles.splashWrapper}>
          <Text>Search Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
