import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export const Shop = () => {

    // const [isVisible, setIsVisible] = useState(true);

    // const toggleVisibility = () => {
    //   setIsVisible(!isVisible);
    // };

    return <div className="shop">
        <div className="shopTitle">
        {/* <div className={`shopTitle ${isVisible ? 'visible' : 'hidden'}`}> */}
            <h2>Welcome to Ris's online store</h2>
            {/* <button onClick={toggleVisibility}>Click to dismiss</button> */}
        </div>

        <div className="products">
            {PRODUCTS.map((product) => (
                <Product key="{product}" data={product} />
            ))}
        </div>
    </div>
}