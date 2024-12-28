import { StyleSheet, View, Pressable, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="black"
        // barStyle="dark-content"
        barStyle="light-content"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 20,
    // paddingTop: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});