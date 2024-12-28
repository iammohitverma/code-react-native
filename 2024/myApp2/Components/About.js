import React from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
import styles from "./Css/CustomStyles";

export default function About({ navigation, route }) {
    // Extract parameters from route with default values
    const { itemId = "Unknown", name = "Guest" } = route.params || {};

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>About Page</Text>
            <Text>Item ID: {itemId}</Text>
            <Text>Name: {name}</Text>

            <Pressable
                onPress={() => {
                    navigation.navigate('Home'); // Navigate back to Home
                }}
            >
                <View style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>Go Back to Home</Text>
                </View>
            </Pressable>
        </View>
    );
}
