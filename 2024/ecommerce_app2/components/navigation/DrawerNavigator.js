import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator"; // New file
import CustomDrawerContent from "./Parts/CustomDrawerContent"; // New file

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: { backgroundColor: "#fff" },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Main"
      component={StackNavigator}
      options={{ title: "Home" }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
