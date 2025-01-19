import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'RM';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            if (!prevCartItems[itemId]) {
                // Add the item if it's not already in the cart
                return { ...prevCartItems, [itemId]: 1 };
            }
            // If already in the cart, do nothing
            return prevCartItems;
        });
    };

    // Remove a product from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            delete updatedCart[itemId]; // Remove the item from the cart
            return updatedCart;
        });
    };

    // Get the total count of unique items in the cart
    const getCartCount = () => {
        return Object.keys(cartItems).length; // Count unique items
    };

    // Get the total price of items in the cart
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const product = products.find((p) => p._id === itemId);
            if (product) {
                totalAmount += product.price;
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
