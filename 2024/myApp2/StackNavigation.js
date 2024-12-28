import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Components/Home"
import AboutScreen from "./Components/About"


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     options={{ title: 'Home' }}
    //   >
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: "red" }, headerTitleStyle: { color: "#fff" } }} />
    //     <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About', headerStyle: { backgroundColor: "yellow" }, headerTitleStyle: { color: "#000" } }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "red" }, headerTitleStyle: { color: "#fff" } }} //for globally header style
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
