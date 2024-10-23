import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './components/Buttons/Button.jsx'
import Button2 from "./components/Buttons/Button2.jsx";
import Students from "./components/Students/Students.jsx";
import UserGreeting from "./components/userGreeting/UserGreeting.jsx"

function App() {
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
          <Students name='Spongebob' age={30} isStudent={true} />
          <Students name='Patrik' age={42} isStudent={false} />
          <Students name='Squidward' age={49} isStudent={false} />
          <Students name='Sandy' age={27} isStudent={true} />
          <Students/>
          <hr></hr>
          <UserGreeting isLoggedIn={true} username='Defenseman' />
          <UserGreeting isLoggedIn={true} />
      </>
  );
}

export default App
