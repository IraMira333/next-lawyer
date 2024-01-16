import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="./page-2.html" className={styles.navLink}>
              ПОСЛУГИ
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="./page-3.html" className={styles.navLink}>
              КОНТАКТИ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
