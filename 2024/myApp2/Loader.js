import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Button } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false);
  const setLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000)
  }
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator /> */}
      <ActivityIndicator size="large" animating={show} />
      <Button title='Show Loader' onPress={setLoader} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 40,
  },
});