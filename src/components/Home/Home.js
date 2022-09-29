import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import Question from '../Question/Question';
import './Home.css'

const Home = () => {
    const [activities, setActivities] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToCart = (activity) => {
        console.log('clicked')
        // cart.push(activity)
        const newCart = [...cart, activity];
        setCart(newCart);
    }



    return (
        <div className='home-container'>
            <div className='container'>
                <h1>MY DAILY ACTIVITY</h1>
                <h2>Select today's activity</h2>
                <div className='cart-container'>

                    {
                        activities.map(activity => <Cart
                            activity={activity}
                            handleAddToCart={handleAddToCart}
                        ></Cart>)
                    }
                </div>
                <div className='question-container'>
                    <Question></Question>
                </div>
            </div>
            <div className='info'>
                <Data cart={cart}></Data>
            </div>
        </div>
    );
};

export default Home;