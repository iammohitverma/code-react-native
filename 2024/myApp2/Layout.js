import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "yellow" }}>
      <View style={{
        backgroundColor: "red",
        flex: 1,

        margin: 10
      }}></View>
      <View style={{
        backgroundColor: "green",
        flex: 2,

        margin: 10
      }}></View>
      <View style={{
        backgroundColor: "pink",
        flex: 1,

        margin: 10
      }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
