import React from 'react';
import './Data.css'

const Data = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    for (const act of cart) {
        total = total + act.time;
    }

    return (
        <div className='data'>
            <div>

                <h3>Mousumi Akter</h3>
                <h3>A web developer</h3>
                <div className='my-data'>
                    <div>
                        <h2>45<small>kg</small></h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5.2</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>20y</h2>
                        <p>Age</p>
                    </div>
                </div>

                <h3>Add A Break</h3>
                <div className='button'>
                    <button><h4>10m</h4></button>
                    <button><h4>20m</h4></button>
                    <button><h4>30m</h4></button>
                    <button><h4>40m</h4></button>

                </div>
                <div className='time'>
                    <h3> Activities time</h3>
                    <div className='exercise'>
                        <h4>Total time</h4>
                        <p>{total} minute</p>
                    </div>
                    <div className='break'>
                        <h4>Break time</h4>
                        <p>00 minute</p>
                    </div>
                </div>

                <button className='activity-btn'>
                    <h4>Activity Completed
                    </h4>
                </button>

            </div>
        </div>
    );
};

export default Data;