import styles from './styles.module.css';

function ClickEvents() {
    let count = 0;
    const clickEvent = (name) => {
        count++
        if (count <= 2) {
            console.log(`Ouch! ${name} stop clicking me!`);
        } else if (count >= 3 && count <= 4) {
            console.log(`${name} you clicked me ${count} times!`);
        } else {
            console.log(`${name} I'm serious. STOP CLICKING ME!`);
        }
    }

    const clickEvent2 = (e) => {
        e.target.style.backgroundColor = "#d81313"
        e.target.textContent = "OUCH!🤕"
    };
    const imageUrl = '../src/assets/Gendalf.jpg'

    const clickEvent3 = (e) => {
        e.target.style.display = 'none'
    }

  //return <button className={styles.button} onClick={() => clickEvent("Ilya")}>Click me! 🤪</button>
  //return <button className={styles.button} onClick={(e) => clickEvent2(e)}>Click me! 🤪</button>
    return <img src={imageUrl} className={styles.image} onDoubleClick={(e) => clickEvent3(e)}></img>
}

export default ClickEvents;