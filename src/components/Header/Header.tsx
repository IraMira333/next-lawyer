import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import Modal from "../Modal/Modal";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/fullLogoAKLawyer2.png"
          alt="AKLawyer Logo"
          width={200}
          height={60}
          priority
        />
      </Link>

      <nav className={styles.nav}>
        <Link href="/menu" className={styles.burgerMenu}>
          <Image src="/burger-menu-opt.svg" alt="Menu" width={32} height={32} />
        </Link>

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
