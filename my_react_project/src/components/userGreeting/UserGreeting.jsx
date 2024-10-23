import styles from './styles.module.css'
import PropsType from 'prop-types'
import PropTypes from "prop-types";

function UserGreeting(props) {
    const welcomeMessage = <h2 className={styles.welcomeMessage}>Welcome: {props.username}</h2>;
    const notLoggedIn = <h2 className={styles.welcomeFailed}>You have to be logged in!</h2>;

    return (props.isLoggedIn ? welcomeMessage : notLoggedIn);
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}

export default UserGreeting;