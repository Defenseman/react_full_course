import React, {useState} from "react";

function UpdateStateArray() {
    const [items, setItems] = useState(["Meat", "Milk", "Cheese"] )

    const addItem = () => {
        const inputItem = document.getElementById("inputItem").value;
        document.getElementById("inputItem").value = "";
        setItems(items => [...items, inputItem])

    }
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h1>List</h1>
            <ul>{items.map((item, index) =>
                <li key={index} onClick={() => removeItem(index)}>{item}</li>
            )}
            </ul>
            <input id='inputItem' placeholder="Enter item's name"/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default UpdateStateArray;