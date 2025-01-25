import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { mvStyles } from "../../css/MohitStyle";

const adBanner = require("../../../assets/images/adBanner.jpg");

function Banner({ navigation }) {
  const goToShopScreen = () => {
    navigation.navigate("Shop");
  };
  return (
    <View>
      <ImageBackground
        source={adBanner}
        resizeMode="cover"
        style={mvStyles.banner}
      >
        <Text style={mvStyles.fs_22_600}>Take 50% off now!</Text>
        <TouchableOpacity onPress={goToShopScreen}>
          <Text style={mvStyles.whiteBtn}>SHOP NOW</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Banner;
