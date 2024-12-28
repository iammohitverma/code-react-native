import { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);
  const modalTrigger = () => {
    setModal(!modal);
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      {modal &&
        < View style={styles.modal}>
          <View style={styles.modalInner}>
            <Text style={styles.modalText}>Modal Text</Text>
            <Button title="Close" onPress={modalTrigger}></Button>
          </View>
        </View>}
      <Button title="Click me" onPress={modalTrigger}></Button>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    justifyContent: "center",
  },
  modalInner: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10
  }
});

