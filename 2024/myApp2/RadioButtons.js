import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => setSelectedOption(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.selectedCircle} />}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
});