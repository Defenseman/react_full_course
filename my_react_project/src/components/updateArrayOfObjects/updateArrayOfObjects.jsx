import React, {useState} from "react";

/*function UpdateArrayOfObjects() {
    const [objects, setObjects] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");


    const addCars = () => {
        const newCar = {make: carMake, model: carModel, year: carYear}
        setObjects(objects => [...objects, newCar])
    }

    const removeCars = (index) => {

    }

    const handleCarYear = (event) => {
        setYear(event.target.value)
    }

    const handleCarModel = (event) => {
        setModel(event.target.value);
    }

    const handleCarMake = (event) => {
        setMake(event.target.value);
    }

    return (
        <div>
            <h1>Objects of Cars</h1>

            <ul>{objects.map((car, index) =>
                <li key={index}>
                    {car.make}{car.model}{car.year}
                </li>)}
            </ul>

            <input value={carMake} onChange={handleCarMake}/><br/><br/>
            <input value={carModel} onChange={handleCarModel}/><br/><br/>
            <input placeholder={carYear} value={carYear} onChange={handleCarYear}/><br/><br/>

            <button onClick={addCars}>Submit</button>
        </div>
    )
}*/

function UpdateArrayOfObjects() {
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState();
    const [model, setModel] = useState();

    const handleAddCar = () => {
        const newCar = { make: carMake, model: carModel, year: carYear};
        setCars(c => [...c, newCar]);
    }
    const handleRemoveCar = (index) => {

    }
    const yearChange = (event) => {
        setYear(event.target.value)
    }
    const makeChange = (event) => {
        setMake(event.target.value)
    }
    const modelChange = (event) => {
        setModel(event.target.value)
    }

    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
            {/*<input type="text" value={carMake} onChange={makeChange}/>
            <input type="text" value={carModel} onChange={modelChange}/>
            <input type="number" value={carYear} onChange={yearChange}/>*/}
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}

export default UpdateArrayOfObjects;