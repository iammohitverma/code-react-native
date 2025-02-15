import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";

import Statusbar from "../Statusbar";
import { mvStyles } from "../css/MohitStyle";

// Icons
const visaIcon = require("../../assets/images/visa.png");
const addIcon = require("../../assets/images/add_icon.png");
const deleteIcon = require("../../assets/images/deleteIcon.png");

const PaymentMethodScreen = ({ navigation }) => {
  const [paymentCards, setPaymentCards] = useState([
    {
      cardNumber: "7741 6588 2123 6644",
      name: "Elena Stout",
      expiry: "12 / 21",
    },
    {
      cardNumber: "6644 6588 2123 7741",
      name: "Elena Stout",
      expiry: "12 / 24",
    },
    {
      cardNumber: "6588 2123 7741 6644",
      name: "Elena Stout",
      expiry: "12 / 28",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const deleteCard = () => {
    setPaymentCards((prev) =>
      prev.filter((card) => card.cardNumber !== selectedCard.cardNumber)
    );
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Statusbar />
        <View style={[mvStyles.p_15]}>
          <View style={[mvStyles.flexRow, mvStyles.aic, mvStyles.mb_20]}>
            <Text
              style={[
                mvStyles.fs_16_400,
                mvStyles.fw_600,
                mvStyles.mb_0,
                { flex: 1 },
              ]}
            >
              Cards
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddNewCard")}
              style={[mvStyles.flexRow, mvStyles.aic]}
            >
              <Text style={[mvStyles.fs_16_400, mvStyles.px_20, mvStyles.mb_0]}>
                Add a new card
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={addIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={paymentCards}
            renderItem={({ item }) => (
              <PaymentCard
                item={item}
                onDelete={() => {
                  setSelectedCard(item);
                  setModalVisible(true);
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ display: "flex", gap: 15 }}
          />
        </View>
        {modalVisible && (
          <Popup
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onConfirm={deleteCard}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default PaymentMethodScreen;

export function PaymentCard({ item, onDelete }) {
  return (
    <View style={[mvStyles.paymentCard, { width: 320 }]}>
      <View style={[mvStyles.flexRow, mvStyles.space_between]}>
        <Image
          style={{ width: 60, height: 25, marginBottom: 20 }}
          source={visaIcon}
          resizeMode="contain"
        />
        <TouchableOpacity style={[mvStyles.deleteIcon]} onPress={onDelete}>
          <Image
            style={{ width: 20, height: 20 }}
            source={deleteIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={[mvStyles.fs_16_400, mvStyles.textWhite, mvStyles.mb_20]}>
        {item.cardNumber}
      </Text>
      <View style={[mvStyles.flexRow]}>
        <View style={{ flex: 1 }}>
          <Text
            style={[, mvStyles.fs_14_400, mvStyles.textWhite, mvStyles.mb_0]}
          >
            Name
          </Text>
          <Text style={[, mvStyles.fs_14_400, mvStyles.textWhite]}>
            {item.name}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[mvStyles.fs_14_400, mvStyles.textWhite, mvStyles.mb_0]}>
            Expiry
          </Text>
          <Text style={[mvStyles.fs_14_400, mvStyles.textWhite]}>
            {item.expiry}
          </Text>
        </View>
      </View>
    </View>
  );
}

const Popup = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this card?
          </Text>
          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={onConfirm}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#ccc",
  },
  buttonConfirm: {
    backgroundColor: "#f44",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
