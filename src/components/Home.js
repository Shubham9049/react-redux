import React from 'react'
import phone from "../Asserts/phone.png"
import cart from "../Asserts/cart.png"

function Home(){
    return (
        <div>
            <div className="add-to-cart">
                <img src={cart} alt="" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                  <img src={phone} alt="error" />
                </div>
                <div className="text-wrapper item">
                 <span>I-PHONE</span>
                 <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                 <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Home