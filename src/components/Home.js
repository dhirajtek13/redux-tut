import React from 'react'


function Home(props) {
    return (
        <div>
           
            <h1>REDUX EXAMPPLE</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="/logo192.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className='add-cart'
                        onClick={
                            ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                            }>
                            Add To Cart
                    </button>
                    <button className='remove-cart'
                        onClick={
                            ()=>{props.removeFromCartHandler()}
                            }>
                            Remove From Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home