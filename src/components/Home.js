import React from "react";
import './home.css'
const Home = (props) => {
    console.log('home',props.cardData)
    return (
        <>
            <div id="home">Home cmp</div>
            <div className="maindiv">
                <div>
                    <img id="mobile" src="./img/mobile.jpeg" />
                </div>
                <div> Vivo Price :<br /> Rs.20000 </div>
                <div><button id="addtocart" onClick={()=>props.addToCartHandler({price:20000, name:'Vivo'})}>Add To Cart</button></div>
                <div><button id="removefromcart" onClick={()=>props.removefromCartHandler()}>Remove From Cart</button></div>
            </div>
        </>
    )
}
export default Home;