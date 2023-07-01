import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

    return (
        <div className="product">
            <img src= {productImage} alt=""/>
            
            <div className="description">
                <p><b> {productName} </b></p>
                <p> ${price} </p>
            </div>

            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add to cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
            </button>
        </div>
    );
};