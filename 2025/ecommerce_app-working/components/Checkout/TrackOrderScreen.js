import React from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { VikasStyle } from "../css/VikasStyle";
const iconHero = require("../../assets/images/track_order.png");

const TrackOrderScreen = ({ navigation }) => {
  const steps = [
    {
      id: "1",
      title: "Order created",
      description: "We have received your order",
      active: true,
    },
    {
      id: "2",
      title: "Order confirmed",
      description: "Your order has been confirmed",
      active: true,
    },
    {
      id: "3",
      title: "Order shipping",
      description: "Estimated for Mar 02, 2023",
      active: true,
    },
    {
      id: "4",
      title: "Courier delivering",
      description: "Estimated for Mar 05, 2023",
      active: false,
    },
    {
      id: "5",
      title: "Receiving",
      description: "Estimated for Mar 05, 2023",
      active: false,
    },
  ];

  const renderTimelineItem = ({ item, index }) => (
    <View style={VikasStyle.stepContainer}>
      <View style={VikasStyle.circleContainer}>
        <View
          style={[VikasStyle.circle, item.active && VikasStyle.activeCircle]}
        />
        {index < steps.length - 1 && <View style={VikasStyle.line} />}
      </View>
      <View>
        <Text style={VikasStyle.title}>{item.title}</Text>
        <Text style={VikasStyle.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={[VikasStyle.MessageScreenWrap]}>
          <View style={VikasStyle.MessageScreenBox}>
            <FlatList
              data={steps}
              renderItem={renderTimelineItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingTop: 40,
                paddingBottom: 40,
              }}
              ListHeaderComponent={() => {
                return (
                  <View style={{ marginBottom: 20 }}>
                    <Image style={VikasStyle.iconHero} source={iconHero} />
                    <Text style={VikasStyle.MessageScreenHdng}>
                      Your order:
                    </Text>
                    <Text style={VikasStyle.MessageScreenDesc}>#100345</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TrackOrderScreen;
