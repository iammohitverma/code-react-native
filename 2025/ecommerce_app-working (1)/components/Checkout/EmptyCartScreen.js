import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

const iconHero = require("../../assets/images/emptyCart.png");

import { useNavigation } from "@react-navigation/native";

const EmptyCartScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Statusbar />
        <View style={[ThemeStyle.mainWrapper, ThemeStyle.MessageScreenWrap]}>
          <View style={[ThemeStyle.MessageScreenBox]}>
            <Image style={[ThemeStyle.iconHero]} source={iconHero} />
            <Text style={ThemeStyle.MessageScreenHdng}>
              Your cart is empty!
            </Text>
            <Text style={ThemeStyle.MessageScreenDesc}>
              Looks like you haven't made your order yet.
            </Text>
            <TouchableOpacity
              style={ThemeStyle.GsMainButton}
              onPress={() => navigation.navigate("Shop")} // Trigger navigation on button press
            >
              <Text
                style={[ThemeStyle.GsMainButtonText, ThemeStyle.LSmainButton]}
              >
                SHOP NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EmptyCartScreen;
