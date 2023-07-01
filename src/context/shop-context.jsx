// define the states for the application

import React, {createContext, useState} from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getSubtotal = () => {
        let subtotal = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let cartItem = PRODUCTS.find((product) => product.id === Number(item));
                subtotal += cartItems[item] * cartItem.price;
            }
        }
        return subtotal;
    }
    
    const addToCart = (itemID) =>{
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
    }


    const rmvFromCart = (itemID) =>{
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }

    const updateCount = (newAmt, itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: newAmt }))
    }


    const contextValue = {cartItems, addToCart, rmvFromCart, updateCount, getSubtotal};
    
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};