import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function App() {
  const handleOnPress = () => {
    console.log('Button pressed!');
  };
  const handleOnPressIn = () => {
    console.log('handleOnPressIn');
  };
  const handleOnPressOut = () => {
    console.log('handleOnPressOut');
  };
  const handleOnLongPress = () => {
    console.log('handleOnLongPress');
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={handleOnPress}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        onLongPress={handleOnLongPress}
      >
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
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