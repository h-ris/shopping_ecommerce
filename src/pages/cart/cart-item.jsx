import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, rmvFromCart, updateCount} = useContext(ShopContext);

    return ( <div className="cartItem">
        <img src={productImage} alt=""/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p> ${price} </p>

            <div className="countHandler">
                <button onClick={() => rmvFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCount(Number(e.target.value), id)}></input>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
    )
}