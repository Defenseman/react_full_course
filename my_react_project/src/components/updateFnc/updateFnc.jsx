// Update function - A function passed as an argument to setState() usually
//                   ex. setYears(y => y + 1)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous function
//                   Good practice to use update functions

import React, {useState} from 'react';
import styles from './styles.module.css'

function UpdateFnc() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count => count + 1)
        setCount(count => count + 1);
    }
    const resetCount = () => {
        setCount(0)
    }
    const decreaseCount = () => {
        setCount(count => count - 1)  // Here is two ways of using
        setCount(c => c - 1);         // This one is preferred
    }


    return (
        <div className={styles.container}>
            <p>{count}</p>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default UpdateFnc;
