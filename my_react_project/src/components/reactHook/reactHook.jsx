import React, {useState} from "react";
import styles from './styles.module.css'

function Component() {

/*  const [name, setName] = useState("Guest")
    const updateName = (name) => {
        setName(name)
    }

    const [age, setAge] = useState(0)
    const incrementAge = () => {
       setAge(age + 1)
    }

    const [isStudent, setIsStudent] = useState(false)
    const toggleStudentStatus = () => {
        setIsStudent(!isStudent)
    }*/

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const reset = () => {
        setCount(0);
    }
    const decrease = () => {
        setCount(count - 1);
    }


    return (
        <>
            {/*<p>Name: {name}</p>
            <button onClick={() => updateName("Spongebob")}>Set name</button>
            <p>Age: {age}</p>
            <button onClick={() => incrementAge()}>Increment Age</button>
            <p>Is Student: {isStudent  ? "Yes" : "No"}</p>
            <button onClick={() => toggleStudentStatus()}>Toggle status</button>
            */}

            <div className={styles.container}>
                <p className={styles.display}>{count}</p>
                <button className={styles.buttons} onClick={increase}>Increase</button>
                <button className={styles.buttons} onClick={reset}>Reset</button>
                <button className={styles.buttons} onClick={decrease}>Decrease</button>
            </div>
        </>
    )
}

export default Component;