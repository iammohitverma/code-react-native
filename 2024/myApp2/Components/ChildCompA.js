import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function ChildCompA() {
    const [name, setName] = useState("");
    useEffect(() => {
        // Perform some side effect
        console.log('Component mounted');
        setName("Mohit");

        // Cleanup function
        return () => {
            console.log('Component unmounted');
            setName("Verma.");
        };
    }); // Empty dependency array ensures this runs only once, like componentDidMount

    return (
        <View>
            <Text>{name}</Text>
            <Text>Hello I am ChildCompA</Text>
        </View>
    );
}

