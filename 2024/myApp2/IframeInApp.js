// npm i react-native-webview
import { StatusBar, StyleSheet, View, Text, Platform, } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar />
      <WebView source={{ uri: 'https://techmind.co.in/' }} style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

