import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ChildCompA from "./Components/ChildCompA";

export default function App() {
  const [show, setShow] = useState(false);
  const myFun = () => {
    setShow(!show);
    console.warn("a");
  }
  return (
    <View style={styles.container}>
      {
        show &&
        <View style={styles.box}>
          <Text style={styles.textWrap}>Box</Text>
        </View>
      }
      <Button
        title='Toggle'
        onPress={myFun}
      />
      <ChildCompA />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "red",
  },
  textWrap: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center"
  }
});
