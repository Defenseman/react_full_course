// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function OnChangeComponent() {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState('Visa');
    const [shipping, setShipping] = useState('Pick Up');

    const nameAdder = (event) => {
        setName(event.target.value);
    }
    const ageAdder = (event) => {
        setAge(event.target.value);
    }
    const commentAdder = (event) => {
        setComment(event.target.value);
    }
    const paymentMethod = (event) => {
        setPayment(event.target.value);
    }
    const shippingMethod = (event) => {
        setShipping(event.target.value);
    }

    return (
        <>
            <input onChange={nameAdder} placeholder='Enter your name'/>
            <p>Name: {name}</p>
            <input onChange={ageAdder} placeholder='Enter your age' type='number'/>
            <p>Age: {age}</p>
            <textarea onChange={commentAdder} placeholder='Delivery instruction'/>
            <p>Comment: {comment}</p>
            <select onChange={paymentMethod}>
                <option value=''>Select payment</option>
                <option value='Visa'>Visa</option>
                <option value='MasterCard'>MasterCard</option>
                <option value='PayPal'>PayPal</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type='radio' value='Pick Up' checked={shipping === 'Pick Up'} onChange={shippingMethod}
                       style={{display: "inline-block"}}/>
                <p style={{display: "inline-block", cursor: "pointer"}}>Pick Up</p><br/>
            </label>
            <label>
                <input type='radio' value='Delivery' checked={shipping === 'Delivery'} onChange={shippingMethod}
                       style={{display: "inline-block"}}/>
                <p style={{display: "inline-block", cursor: "pointer"}}>Delivery</p>
                <p>Shipping: {shipping}</p>
            </label>
        </>
    )
}

export default OnChangeComponent;