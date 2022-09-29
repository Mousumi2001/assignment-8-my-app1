import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='ans'>
            <h2>Some question and answer:</h2>
            <div>
                <h2>How does React Work?</h2>
                <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
            </div>
            <div>
                <h2>What is the difference between state and props in React?</h2>
                <p>Props are immutable so we cannot modify the props from inside the component. 1. Props are read-only. State changes can be asynchronous. 2. Props are immutable. State is mutable. 3. Props allow you to pass data from one component to other components as an argument. State holds information about the components.4.</p>
            </div>
            <div>
                <h2>What is the use of useeffect without data load?</h2>
                <p>When you call useEffect in your component, this is effectively queuing or scheduling an effect to maybe run, after the render is done. After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.
                </p>
            </div>
        </div>
    );
};

export default Question;