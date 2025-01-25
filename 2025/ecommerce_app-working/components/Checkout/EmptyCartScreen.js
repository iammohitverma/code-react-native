import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ThemeStyle from "../css/ThemeStyle";
import Statusbar from "../Statusbar";

export function EmptyCartScreen() {
  const goToShopScreen = ({ navigation }) => {
    navigation.navigate("Shop");
  };

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
              onPress={goToShopScreen} // Trigger navigation on button press
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
}
