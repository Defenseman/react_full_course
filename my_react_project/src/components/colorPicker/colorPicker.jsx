import React, {useState} from "react";
import styles from './styles.module.css'

function ColorPicker() {
    const [color, setColor] = useState("#4ddbff");

    const colorPickerHandler = (event) => {
        setColor(event.target.value);
    }
    return (
      <div className={styles.container}>
          <h1>Color Picker</h1>
          <div className={styles.colorDisplay} style={{backgroundColor: color}}>
              <p>Selected color: {color}</p>
          </div>
          <label className={styles.label}>
              <p>Select a color:</p>
              <input type='color' value={color} onChange={colorPickerHandler}/>
          </label>
      </div>
    );
}

export default ColorPicker;