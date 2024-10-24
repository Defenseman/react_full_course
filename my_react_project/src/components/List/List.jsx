import styles from './styles.module.css';
import PropTypes from 'prop-types';

function List(props) {

    const items = props.items
    const category = props.category

    const listItems = items.map(item =>
        <li key={item.name}>{item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>)

    return (
        <>
            <h3 className={styles.category}>
                {category}
            </h3>
            <ol className={styles.item}>
                {listItems}
            </ol>
        </>)
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;