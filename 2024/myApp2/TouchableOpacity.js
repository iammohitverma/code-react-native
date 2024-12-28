import { StyleSheet, Alert, TouchableOpacity, View, Text } from 'react-native';

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
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button} >Touch Here</Text>
      </TouchableOpacity>
    </View >
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
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    backgroundColor: "#357da1",
    color: "#fff",
    padding: 40,
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: 800,
    textTransform: "uppercase"
  },
});
