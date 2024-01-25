import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/fullLogoAKLawyer2.png"
        alt="Vercel Logo"
        width={200}
        height={60}
        priority
      />
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
