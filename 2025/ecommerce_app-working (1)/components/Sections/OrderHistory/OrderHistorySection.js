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

const repeatIcon = require("../../../assets/images/repeat.png");
function OrderHistorySection() {
  const orderedProducts = [
    {
      orderId: "#100345",
      orderedTime: "Mar 02, 2023 at 8:32 PM",
      totalPrice: "$83.00",
      status: "Shipping",
      items: [
        {
          item: "Wooden bar stool",
          price: "$24.00",
        },
        {
          item: "Pendant lamp",
          price: "$59.00",
        },
      ],
    },
    {
      orderId: "#100346",
      orderedTime: "Mar 02, 2023 at 8:32 PM",
      totalPrice: "$83.00",
      status: "Delivered",
      items: [
        {
          item: "Wooden bar stool",
          price: "$24.00",
        },
        {
          item: "Pendant lamp",
          price: "$59.00",
        },
      ],
    },
    {
      orderId: "#100347",
      orderedTime: "Mar 02, 2023 at 8:32 PM",
      totalPrice: "$83.00",
      status: "Cancelled",
      items: [
        {
          item: "Wooden bar stool",
          price: "$24.00",
        },
        {
          item: "Pendant lamp",
          price: "$59.00",
        },
      ],
    },
    {
      orderId: "#100348",
      orderedTime: "Mar 02, 2023 at 8:32 PM",
      totalPrice: "$83.00",
      status: "Delivered",
      items: [
        {
          item: "Wooden bar stool",
          price: "$24.00",
        },
        {
          item: "Pendant lamp",
          price: "$59.00",
        },
      ],
    },
    {
      orderId: "#100349",
      orderedTime: "Mar 02, 2023 at 8:32 PM",
      totalPrice: "$83.00",
      status: "Delivered",
      items: [
        {
          item: "Wooden bar stool",
          price: "$24.00",
        },
        {
          item: "Pendant lamp",
          price: "$59.00",
        },
      ],
    },
  ];

  const [expandedOrder, setExpandedOrder] = useState(null); // Track expanded order ID

  const handleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId); // Toggle expand/collapse
  };

  return (
    <View style={[mvStyles.py_40, mvStyles.px_20]}>
      <FlatList
        data={orderedProducts}
        renderItem={({ item, index }) => (
          <OrderItemsBox
            key={index}
            item={item}
            isExpanded={expandedOrder === item.orderId}
            onExpand={() => handleExpand(item.orderId)}
            statusClass={item.status}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default OrderHistorySection;

// OrderItemsBox Component for Flatlist
export function OrderItemsBox({ item, isExpanded, onExpand, statusClass }) {
  return (
    <View style={[mvStyles.positionRelative, mvStyles.borderBtm]}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onExpand}>
        <View style={mvStyles.flexRow}>
          <View style={{ flex: 1 }}>
            <Text style={[mvStyles.fs_16_400, mvStyles.fw_600]}>
              {item.orderId}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                mvStyles.fs_16_400,
                mvStyles[statusClass],
                { textAlign: "right" },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
        <View style={mvStyles.flexRow}>
          <View style={{ flex: 1 }}>
            <Text style={[mvStyles.fs_14_400]}>{item.orderedTime}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                mvStyles.fs_14_400,
                mvStyles.fw_600,
                { textAlign: "right" },
              ]}
            >
              {item.totalPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Expanded Section */}
      {isExpanded && (
        <View style={[mvStyles.mt_10, mvStyles.expanOrderBox]}>
          {item.items.map((product, idx) => (
            <View key={idx} style={[mvStyles.flexRow, mvStyles.mb_10]}>
              <Text style={{ flex: 1 }}>{product.item}</Text>
              <Text style={{ textAlign: "right" }}>{product.price}</Text>
            </View>
          ))}
          <View style={[mvStyles.flexRow, mvStyles.mt_10]}>
            <TouchableOpacity style={[mvStyles.flexRow]}>
              <Image source={repeatIcon} style={mvStyles.iconSmall} />
              <Text>Repeat Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
