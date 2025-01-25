import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to get current cart data from AsyncStorage
export const getCartItems = async (userId) => {
  try {
    const cartItems = await AsyncStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : { userId: userId, products: [] }; // Return an empty cart structure if no cart is found
  } catch (error) {
    console.error("Error getting cart items:", error);
    return { userId: null, products: [] }; // Return empty cart structure in case of error
  }
};

// Function to add an item to the cart (or update its quantity)
export const addItemToCart = async (userId, productId) => {
  try {
    const cart = await getCartItems(userId);
    const { products } = cart;

    // Check if the product already exists in the cart
    const productIndex = products.findIndex(
      (item) => item.itemId === productId
    );

    if (productIndex !== -1) {
      // If product exists, increment the quantity
      products[productIndex].qty += 1;
    } else {
      // If product doesn't exist, add it with qty = 1
      products.push({ itemId: productId, qty: 1 });
    }

    // Save updated cart data
    await AsyncStorage.setItem(
      "cartItems",
      JSON.stringify({ userId, products })
    );
    return { userId, products }; // Return updated cart data
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return { userId, products: [] }; // Return empty cart data in case of error
  }
};

// Function to clear the cart
export const clearCart = async () => {
  try {
    await AsyncStorage.removeItem("cartItems");
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};
