import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Components/Home"
import AboutScreen from "./Components/About"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'house-user';
            } else if (route.name === 'About') {
              iconName = focused ? 'address-card' : 'adn';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2d3436',
          activeBackgroundColor: '#ffeaa7',
          inactiveTintColor: '#636e72',
          inactiveBackgroundColor: '#dfe6e9',
          showLabel: true,
          labelStyle: { fontSize: 14 },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'My home', header: () => null, tabBarBadge: 5 }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'My About', header: () => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
