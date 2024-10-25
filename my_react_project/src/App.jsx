import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './components/Buttons/Button.jsx'
import Button2 from "./components/Buttons/Button2.jsx";
import Students from "./components/Students/Students.jsx";
import UserGreeting from "./components/userGreeting/UserGreeting.jsx"
import List from './components/List/List.jsx'
import ClickEvents from './components/Click events/clickEvents.jsx'
import Component from "./components/reactHook/reactHook.jsx";
import OnChangeComponent from "./components/onChange/onChange.jsx"
import ColorPicker from "./components/colorPicker/colorPicker.jsx";
import UpdateFnc from "./components/updateFnc/updateFnc.jsx";

function App() {
    const fruits= [{id:1, name:'Apple',calories: 55},
                                                {id:2, name:'Orange', calories: 65},
                                                {id:3, name:'Mango', calories: 85},
                                                {id:4, name:'Banana', calories: 105},
                                                {id:5, name:'Pineapple', calories: 103},
                                                {id:6, name:'Coconut', calories: 104}]
    const vegetables= [{id:7, name:'Potatoes',calories: 110},
                                                {id:8, name:'Carrot', calories: 105},
                                                {id:9, name:'Celery', calories: 15},
                                                {id:10, name:'Onion', calories: 65},
                                                {id:11, name:'Tomato', calories: 70},
                                                {id:12, name:'Cucumber', calories: 59}]

    return (
        <>
            <Header/>
            <Food/>
            <Food/>
            <Footer/>
            <hr></hr>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <hr></hr>
            <Button/>
            <Button2/>
            <hr></hr>
            <Students name='Spongebob' age={30} isStudent={true}/>
            <Students name='Patrik' age={42} isStudent={false}/>
            <Students name='Squidward' age={49} isStudent={false}/>
            <Students name='Sandy' age={27} isStudent={true}/>
            <Students/>
            <hr></hr>
            <UserGreeting isLoggedIn={true} username='Defenseman'/>
            <UserGreeting isLoggedIn={true}/>
            <hr></hr>
            {fruits.length > 0 ? <List items={fruits} category='Fruits'/> : null}
            {vegetables.length > 0 && <List items={vegetables} category='Vegetables'/>}
            <List/>
            <hr></hr>
            <ClickEvents/>
            <hr></hr>
            <Component/>
            <hr></hr>
            <OnChangeComponent/>
            <hr></hr>
            <ColorPicker/>
            <hr></hr>
            <UpdateFnc/>
        </>
    );
}

export default App
