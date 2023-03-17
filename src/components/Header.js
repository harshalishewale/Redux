import React from "react";
import './home.css'
const Header = (props) => {
    return (
        <>
            <div id="length">{props.cardData.length}</div>
            <div><img id="shoppingcart" src="./img/shopppingcart.png" /></div>
        </>
    )
}
export default Header;