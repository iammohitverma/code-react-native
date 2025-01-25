import { View, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

import { mvStyles } from "../../css/MohitStyle";

// const adBanner = require("../../../assets/images/adBanner.jpg");
const productImagesPath = "https://shop.tmdemo.in/uploads/products/";

function Banner({ bannerImages }) {
  const imageArray = Array.isArray(bannerImages)
    ? bannerImages
    : (bannerImages || "").split(","); // Fallback to empty string if undefined

  return (
    <Swiper
      style={mvStyles.swiperWrapper}
      showsButtons={false}
      showsPagination={true}
      dotStyle={mvStyles.swiperDotStyle}
      activeDotStyle={[mvStyles.swiperDotStyle, { backgroundColor: "#192639" }]}
    >
      {imageArray.map((image, index) => {
        return (
          <View style={mvStyles.swiperSlide} key={index}>
            <ImageBackground
              source={{ uri: `${productImagesPath}/${image}` }}
              resizeMode="cover"
              style={mvStyles.productBanner}
            ></ImageBackground>
          </View>
        );
      })}
    </Swiper>
  );
}

export default Banner;
