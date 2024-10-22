// Props - readonly properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import styles from './styles.module.css';
import PropTypes from 'prop-types'

function Students(props) {
    return (
        <div className = {styles.students}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Students.propsTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Students.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: null
}

export default Students;