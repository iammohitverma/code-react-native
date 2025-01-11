import { View, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

import { mvStyles } from "../../css/MohitStyle";

const adBanner = require("../../../assets/images/adBanner.jpg");

function Banner() {
  return (
    <Swiper
      style={mvStyles.swiperWrapper}
      showsButtons={false}
      showsPagination={true}
      dotStyle={mvStyles.swiperDotStyle}
      activeDotStyle={[mvStyles.swiperDotStyle, { backgroundColor: "#192639" }]}
    >
      <View style={mvStyles.swiperSlide}>
        {adBanner && (
          <ImageBackground
            source={adBanner}
            resizeMode="cover"
            style={mvStyles.productBanner}
          ></ImageBackground>
        )}
      </View>
      <View style={mvStyles.swiperSlide}>
        {adBanner && (
          <ImageBackground
            source={adBanner}
            resizeMode="cover"
            style={mvStyles.productBanner}
          ></ImageBackground>
        )}
      </View>
      <View style={mvStyles.swiperSlide}>
        {adBanner && (
          <ImageBackground
            source={adBanner}
            resizeMode="cover"
            style={mvStyles.productBanner}
          ></ImageBackground>
        )}
      </View>
    </Swiper>
  );
}

export default Banner;
