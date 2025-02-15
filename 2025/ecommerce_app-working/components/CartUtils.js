import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";

// Function to get current cart data from AsyncStorage
export const getCartItems = async (userId) => {
  try {
    const cartItems = await AsyncStorage.getItem(`cartItems_${userId}`);
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
      `cartItems_${userId}`,
      JSON.stringify({ userId, products })
    );
    Toast.show("Product is added to cart!");
    return { userId, products }; // Return updated cart data
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return { userId, products: [] }; // Return empty cart data in case of error
  }
};

// Function to remove an item from the cart
export const removeItemFromCart = async (userId, productId) => {
  try {
    const cart = await getCartItems(userId);
    let { products } = cart;

    // Find the product in the cart
    const productIndex = products.findIndex(
      (item) => item.itemId === productId
    );

    if (productIndex !== -1) {
      // Remove the product from the cart
      products = products.filter((item) => item.itemId !== productId);

      // Save the updated cart data
      await AsyncStorage.setItem(
        `cartItems_${userId}`,
        JSON.stringify({ userId, products })
      );
      Toast.show("Product removed from cart!");
    } else {
      Toast.show("Product not found in cart.");
    }

    return { userId, products }; // Return the updated cart data
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return { userId, products: [] }; // Return empty cart data in case of error
  }
};

// Function to add or update the quantity of an item in the cart
export const updateItemQuantity = async (
  userId,
  productId,
  newQty,
  addmore
) => {
  try {
    const cart = await getCartItems(userId);
    const { products } = cart;

    // Check if the product already exists in the cart
    const productIndex = products.findIndex(
      (item) => item.itemId === productId
    );

    if (productIndex !== -1) {
      // If product exists, update the quantity
      addmore
        ? (products[productIndex].qty += newQty)
        : (products[productIndex].qty = newQty);
    } else {
      // If product doesn't exist, add it with the given qty
      products.push({ itemId: productId, qty: newQty });
    }

    // Save updated cart data
    await AsyncStorage.setItem(
      `cartItems_${userId}`,
      JSON.stringify({ userId, products })
    );
    Toast.show("Cart updated!");
    return { userId, products }; // Return updated cart data
  } catch (error) {
    console.error("Error updating item quantity:", error);
    return { userId, products: [] }; // Return empty cart data in case of error
  }
};

// Function to clear the cart for a specific user
export const clearCart = async (userId) => {
  try {
    await AsyncStorage.removeItem(`cartItems_${userId}`);
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};
