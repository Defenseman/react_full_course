import profilePic from "../assets/Gendalf.jpg"

function Card() {
    return (
            <div className="card">
                <img className='profilePic' src={profilePic} alt='Gendalf image'/>
                <h1 className="h1Gendalf">Gendalf</h1>
                <p className='description'> Gendalf - Wizard from medieval "Lord of the Ring" lore </p>
            </div>
    );
}

export default Card;