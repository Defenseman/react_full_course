import React, {useState} from "react";
import styles from './styles.module.css'


function UpdateState() {
    const [state, setState] = useState({mark: 'Haval',
                                                       model: 'Dargo',
                                                       year: 2024});

    const updateMark = (event) => {
        setState(s => ({...s, mark: event.target.value}))
    }

    const updateModel = (event) => {
        setState(s => ({...s, model:event.target.value}))
    }
    const updateYear = (event) => {
        setState(s => ({...s, year: event.target.value }))
    }

    return (
        <div className={styles.container}>
            <h1>Choose your favorite car</h1>
            <label>
                <p>Mark:</p>
                <input value={state.mark} onChange={updateMark} type='text'/><br/>
            </label>
            <label>
                <p>Model:</p>
                <input value={state.model} onChange={updateModel} type='text'/><br/>
            </label>
            <label>
                <p>Year:</p>
                <input value={state.year} onChange={updateYear} type='number'/>
            </label>
            <h2>My favorite car is: {state.mark} {state.model} {state.year}</h2>
        </div>

    )
}

export default UpdateState