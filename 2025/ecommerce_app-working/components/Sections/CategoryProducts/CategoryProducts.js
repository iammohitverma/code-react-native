import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { mvStyles } from "../../css/MohitStyle";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ShopProducts(categoryId) {
    const catID = categoryId.categoryId; 
    
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const url = `https://shop.tmdemo.in/api/category/products/${catID}`;
        
        const token = await AsyncStorage.getItem("token"); //get from localStorage

        try {
            const response = await axios.get(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                }, 
            });

            if (response.data) { 
               setProducts(response.data.data);
            }
        } catch (error) {
            console.error(
                "Error fetching data:",
                error.response?.data || error.message
            );
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <View style={[mvStyles.py_40, mvStyles.px_20]}>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return (
                        <ProductCard key={index} item={item} width={175} height={175} />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                contentContainerStyle={{}}
            />
        </View>
    );
}

export default ShopProducts;
