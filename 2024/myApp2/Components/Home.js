import { View, Text, StatusBar, Pressable } from "react-native";
import styles from "./Css/CustomStyles";

export default function Home({ navigation }) {
    const name = "Mohit";

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>Home Page</Text>
            <Pressable
                onPress={() => {
                    // Pass data directly when navigating to About
                    navigation.navigate('About', { itemId: 15, name: name });
                }}
            >
                <View style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>Press Here</Text>
                </View>
            </Pressable>
        </View>
    );
}
