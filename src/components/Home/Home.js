import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import Question from '../Question/Question';
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className='home-container'>
            <div className='container'>
                <h1>ULRA-ACTIVE-CLUB</h1>
                <h2>Select today's exercise</h2>
                <div className='cart-container'>

                    {
                        players.map(player => <Cart player={player}></Cart>)
                    }
                </div>
                <div className='question-container'>
                    <Question></Question>
                </div>
            </div>
            <div className='info'>
                <Data></Data>
            </div>
        </div>
    );
};

export default Home;