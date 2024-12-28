import { StyleSheet, Alert, TouchableHighlight, View, Text } from 'react-native';

export default function App() {
  const onPress = () => {
    console.log("a");
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      // [
      //   {
      //     text: 'Cancel',
      //     onPress: () => Alert.alert('Cancel Pressed'),
      //     style: 'cancel',
      //   },
      // ],
      // {
      //   cancelable: true,
      //   onDismiss: () =>
      //     Alert.alert(
      //       'This alert was dismissed by tapping outside of the alert dialog.',
      //     ),
      // },
    )
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <Text style={styles.button}>Touch Here</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#357da1",
    padding: 40,
    paddingVertical: 15,
    fontSize: 20,
    color: "#fff",
    fontWeight: 800,
    textTransform: "uppercase",
    shadowColor: "red",
    elevation: 100,
  },
});
