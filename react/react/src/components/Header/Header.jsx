import styles from "./Header.module.css";

const Header = ({ name, itemUm, itemDois, itemTres }) => {
    return (
        <nav className={styles.nav_container}>
            <h1>{name}</h1>

            <ul className={styles.ul_container}>
                <li className={styles.item}>{itemUm}</li>
                <li className={styles.item}>{itemDois}</li>
                <li className={styles.item}>{itemTres}</li>
            </ul>
        </nav>
    );
};

export default Header;
