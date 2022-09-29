import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, id, age, img, time } = props.activity;


    return (
        <div className='one-cart'>
            <img src={img}></img>
            <div class='details'>
                <h3>{name}</h3>
                <h4>Age: {age}</h4>
                <h4>Time required:{time}</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.activity)} class='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Cart;