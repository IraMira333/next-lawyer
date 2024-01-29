import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/fullLogoAKLawyer2.png"
          alt="Vercel Logo"
          width={200}
          height={60}
          priority
        />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/services">
              ПОСЛУГИ
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/contacts">
              КОНТАКТИ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
