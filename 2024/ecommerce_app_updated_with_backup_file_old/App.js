import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DrawerNavigator from "./components/navigation/DrawerNavigator";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Hind-Bold": require("./assets/fonts/hind/Hind-Bold.ttf"),
    "Hind-Light": require("./assets/fonts/hind/Hind-Light.ttf"),
    "Hind-Medium": require("./assets/fonts/hind/Hind-Medium.ttf"),
    "Hind-Regular": require("./assets/fonts/hind/Hind-Regular.ttf"),
    "Hind-SemiBold": require("./assets/fonts/hind/Hind-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log("Fonts loaded successfully.");
    } else {
      console.log("Fonts are still loading.");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Simple loading screen
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
