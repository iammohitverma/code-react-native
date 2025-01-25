import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";

import { WishListButton } from "../WishListButton";
import { mvStyles } from "../../css/MohitStyle";

const rating = require("../../../assets/images/rating.png");

function ProductDetail({ details }) {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const colors = ["#FF6262", "#9FDCBB", "#F8E7CD", "#5E658C", "#9C6E43"];

  const addToCart = () => {
    Alert.alert("Alert", "Product added to cart!", [
      {
        text: "OK",
      },
    ]);
  };
  return (
    <View style={[mvStyles.p_20, mvStyles.py_40, { flex: 1 }]}>
      <View style={mvStyles.productDetailsTop}>
        <View style={[mvStyles.flexRow, { justifyContent: "space-between" }]}>
          <View style={{ flex: 2 }}>
            <Text style={mvStyles.fs_22_600}>{details?.name}</Text>
            <Image
              style={{ height: 25, width: 100 }}
              source={rating}
              resizeMode="contain"
            />
            <Text style={[mvStyles.price, mvStyles.fs_22_600]}>
              ${details?.sale_price}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <WishListButton productId={details?.id} />
            <View style={[mvStyles.qtyWrap, mvStyles.flexRow]}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={handleDecrement}>
                  <Text
                    style={[
                      mvStyles.textCenter,
                      mvStyles.fs_22_600,
                      mvStyles.qtyBtn,
                    ]}
                  >
                    -
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  value={qty.toString()}
                  style={mvStyles.qtyBtn}
                  editable={false}
                />
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={handleIncrement}>
                  <Text
                    style={[
                      mvStyles.textCenter,
                      mvStyles.fs_22_600,
                      mvStyles.qtyBtn,
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Dynamic Color Selection */}
        <View style={mvStyles.clrFieldParent}>
          <View style={mvStyles.clrField}>
            <Text style={[mvStyles.clrLabel, mvStyles.fw_600]}>Color:</Text>
          </View>
          <View style={mvStyles.flexRow}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleColorSelect(color)}
                style={[mvStyles.clrInput, { backgroundColor: color }]}
              >
                {selectedColor === color && (
                  <View
                    style={[mvStyles.selectedColor, { backgroundColor: color }]}
                  ></View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      {/* Product  Description*/}
      <View style={mvStyles.productDetailsBottom}>
        <View style={[mvStyles.flexRow, { justifyContent: "space-between" }]}>
          <View style={{ flex: 2 }}>
            <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>
              Description
            </Text>
            <Text style={[mvStyles.fs_16_400]}>{details?.description}</Text>
          </View>
        </View>
      </View>
      {details?.stock_status ? (
        <TouchableOpacity onPress={addToCart}>
          <Text style={mvStyles.primaryBtn}>+ Add to cart</Text>
        </TouchableOpacity>
      ) : (
        <Text>Out of stock</Text>
      )}
    </View>
  );
}

export default ProductDetail;
