
function List() {
    const fruits =   [{name:'Apple',calories: 55},
                                                {name:'Orange', calories: 65},
                                                {name:'Mango', calories: 85},
                                                {name:'Banana', calories: 105},
                                                {name:'Pineapple', calories: 103},
                                                {name:'Coconut', calories: 104}]

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // AlPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE AlPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories) // NUMERICAL
    //fruits.sort((a,b) => b.calories - a.calories) // REVERSE NUMERICAL

    const lowCalories = fruits.filter(fruit => fruit.calories < 100)
    const highCalories = fruits.filter(fruit => fruit.calories > 100 )

    const listItems = highCalories.map(highCalories =>
                                <li key={highCalories.name}>{highCalories.name}: &nbsp;
                                <b>{highCalories.calories}</b>
                                </li>)

    return <ol>{listItems}</ol>
}

export default List;