import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { mvStyles } from "../../css/MohitStyle";

function OrderSection() {
  const orderedProducts = [
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Draper Sofa",
      price: "$649.00",
      color: "Grey",
    },
    {
      featuredImage: require("../../../assets/images/dummy_product.jpg"),
      title: "Table lamp",
      price: "$50.00",
      color: "Brown",
    },
  ];
  return (
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={orderedProducts}
        renderItem={({ item, index }) => {
          return <ProductBox key={index} item={item} />;
        }}
        keyExtractor={(item, index) => index}
      />
      {/* Subtotal area */}
      <View style={mvStyles.flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>Subtotal</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={(mvStyles.fs_16_400, { textAlign: "right" })}>
            $703.00
          </Text>
        </View>
      </View>
      <View style={[mvStyles.flexRow, mvStyles.borderBtm]}>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>Delivery</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={(mvStyles.fs_16_400, { textAlign: "right" })}>Free</Text>
        </View>
      </View>
      <View style={mvStyles.flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={mvStyles.fs_22_600}>Total</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              mvStyles.fs_16_400,
              mvStyles.fw_600,
              { textAlign: "right" },
            ]}
          >
            $632.7
          </Text>
        </View>
      </View>

      {/* Checkout button */}
      <View style={[mvStyles.flexRow, { flex: 1 }]}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Text style={[mvStyles.primaryBtn, mvStyles.w_100]}>
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderSection;

// ProductBox Component for Flatlist
export function ProductBox({ item }) {
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return (
    <View
      style={[mvStyles.positionRelative, mvStyles.borderBtm, mvStyles.flexRow]}
    >
      <TouchableOpacity style={{ flex: 1 }}>
        <View style={[mvStyles.flexRow, { paddingRight: 30 }]}>
          <View style={[mvStyles.imageBox, mvStyles.w_100px, mvStyles.h_100px]}>
            <Image
              style={mvStyles.imageFull}
              source={item.featuredImage}
              resizeMode="contain"
            />
          </View>
          <View style={[mvStyles.px_10, { flexShrink: 1 }]}>
            <Text style={[mvStyles.fs_14_400]}>{item.title}</Text>
            <Text style={[mvStyles.fs_14_400, mvStyles.fw_600]}>
              {item.price}
            </Text>
            <Text style={[mvStyles.fs_14_400, { marginTop: 15 }]}>
              Color: {item.color}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[mvStyles.positionAbsolute, mvStyles.productBtns]}>
        <View style={[mvStyles.qtyWrap, { marginTop: 0 }]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleDecrement}>
              <Text
                style={[
                  mvStyles.textCenter,
                  mvStyles.fs_22_600,
                  mvStyles.mb_0,
                  mvStyles.qtyBtn,
                  mvStyles.qtyBtnSm,
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              value={qty.toString()}
              style={[mvStyles.qtyBtn, mvStyles.qtyBtnSm]}
              editable={false}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={handleIncrement}>
              <Text
                style={[
                  mvStyles.textCenter,
                  mvStyles.fs_22_600,
                  mvStyles.mb_0,
                  mvStyles.qtyBtn,
                  mvStyles.qtyBtnSm,
                ]}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
