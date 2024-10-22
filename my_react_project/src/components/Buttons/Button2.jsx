import button from "./Button.jsx";

function Button2() {
        const styles = {
            fontSize: "2.5rem",
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            backgroundColor: 'hsl(36,87%,52%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            margin: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
        }
    return (
        <button style={styles}>Click Me!</button>
    );
}

export default Button2;