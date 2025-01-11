import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import * as Clipboard from "expo-clipboard";

import { mvStyles } from "../../css/MohitStyle";

const copyIcon = require("../../../assets/images/copy.png");
function PromoCodeSection() {
  const currentPromocCodes = [
    {
      title: "Acme Co.",
      offer: "50% off",
      validity: "Valid until June 30, 2025",
      code: "PROMO50",
    },
    {
      title: "Abstergo Ltd..",
      offer: "30% off",
      validity: "Valid until May 20, 2025",
      code: "PROMO30",
    },
    {
      title: "Barone LLC.",
      offer: "10% off",
      validity: "Valid until August 30, 2025",
      code: "PROMO10",
    },
  ];
  const usedPromocCodes = [
    {
      title: "Used Acme Co.",
      offer: "50% off",
      validity: "Valid until June 30, 2025",
      code: "USEDPROMO50",
    },
    {
      title: "Used Abstergo Ltd..",
      offer: "30% off",
      validity: "Valid until May 20, 2025",
      code: "USEDPROMO30",
    },
    {
      title: "Used Barone LLC.",
      offer: "10% off",
      validity: "Valid until August 30, 2025",
      code: "USEDPROMO10",
    },
  ];

  const [promoCodeType, setPromoCodeType] = useState(currentPromocCodes);
  const [isActive, setIsActive] = useState(1);

  const changeCodesType = (type, btnId) => {
    setPromoCodeType(type);
    setIsActive(btnId);
  };

  // copyToClipboard
  const copyToClipboard = async (code) => {
    await Clipboard.setStringAsync(code);
    Alert.alert(
      "Copied",
      `Promo code "${code}" has been copied to the clipboard!`,
      [
        {
          text: "OK",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={[mvStyles.py_20, mvStyles.px_20]}>
      <View style={[mvStyles.flexRow, mvStyles.mb_40, { gap: 20 }]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => changeCodesType(currentPromocCodes, 1)}
          >
            <Text
              style={[
                mvStyles.primaryBtnGrey,
                isActive == 1 && mvStyles["primaryBtnGreyActive"],
              ]}
            >
              Current
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => changeCodesType(usedPromocCodes, 2)}>
            <Text
              style={[
                mvStyles.primaryBtnGrey,
                isActive == 2 && mvStyles["primaryBtnGreyActive"],
              ]}
            >
              Used
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={promoCodeType}
        renderItem={({ item, index }) => (
          <PromoCodeItemBox
            key={index}
            item={item}
            copyToClipboard={() => copyToClipboard(item.code)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default PromoCodeSection;

// PromoCodeItemBox Component for Flatlist
export function PromoCodeItemBox({ item, copyToClipboard }) {
  return (
    <View style={[mvStyles.positionRelative, mvStyles.borderBtm]}>
      <View style={mvStyles.flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_18_600, mvStyles.fw_600]}>
            {item.title}
          </Text>
          <Text style={[mvStyles.fs_16_400]}>{item.offer}</Text>
          <Text style={[mvStyles.fs_14_400]}>{item.validity}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={copyToClipboard}>
            <Image source={copyIcon} style={mvStyles.copyBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
