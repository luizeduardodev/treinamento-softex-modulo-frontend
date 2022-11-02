import styles from "./Header.module.css";

const Header = () => {
    return (
        <nav className={styles.nav_container}>
            <h1>Luiz Eduardo</h1>

            <ul className={styles.ul_container}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>Sobre</li>
                <li className={styles.item}>Contato</li>
            </ul>
        </nav>
    );
};

export default Header;
