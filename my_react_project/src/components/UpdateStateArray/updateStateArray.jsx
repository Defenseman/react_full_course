import React, {useState} from "react";

function UpdateStateArray() {
    const [foods, setFoods] = React.useState(["Almond", "Chocolate", "Mango"]);

    const addFood = () => {
        const inputFood = document.getElementById("inputFood").value
        document.getElementById("inputFood").value = "";
        setFoods(foods => [...foods, inputFood])
    }

    const removeFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>List of Food</h1>
            <ul>{foods.map((food, index) =>
                <li key={index} onClick={() => removeFood(index)}>{food}</li>
            )}
            </ul>
            <input id="inputFood" placeholder="Enter food name"/>
            <button onClick={addFood}>Add</button>
        </div>
    )

}


export default UpdateStateArray;