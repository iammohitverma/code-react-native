import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';

export default function App() {
  console.log(JSON.stringify(Platform));

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>OS = {Platform.OS}</Text>
      <Text>Model = {Platform.constants.Model}</Text>
      <Text>Brand = {Platform.constants.Brand}</Text>
      <Text>OS Version = {Platform.Version}</Text>
      <Text>isTV = {Platform.isTV.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

