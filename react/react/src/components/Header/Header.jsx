import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <nav className={styles.nav_container}>
            <ul className={styles.ul_container}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
