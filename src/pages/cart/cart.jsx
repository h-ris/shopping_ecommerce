import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
    const {cartItems, getSubtotal} = useContext(ShopContext);
    const subtotal = getSubtotal();

    const navigate = useNavigate();

    const handleCheckout = () => {
        const confirmed = window.confirm("Do you want to continue the checkout process?");
        if (confirmed) {
            alert("Checkout successful!");
            window.location.reload();
        } else {
            navigate(".");
        }
    }

    for (const item in cartItems){

    if(cartItems[item] !==0) {
    return (
    <div className="cart">
        <div><h1> Your Cart Items </h1></div>
        <div className="cartItems">
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] >0 ){
                return <CartItem data={product} />
            }
            return navigate("/");
        })}
        </div>

        <div className="checkout">
            <p> Subtotal: ${subtotal}</p>
            <button onClick={() => navigate("/") }> Continue Shopping </button>
            <button onClick={handleCheckout}> Checkout </button>
        </div>
    </div>
    )}
    }   
    return <h2>Your cart is empty!</h2>
}