import Link from "next/link";
import styles from "../Header.module.scss";

const Sidebar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  return (
    <>
      <Link href="/" className={styles.modal} />
      <div className={styles.modalBox}>
        <ul>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/" onClick={toggle}>
              ГОЛОВНА
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/services" onClick={toggle}>
              ПОСЛУГИ
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/contacts" onClick={toggle}>
              КОНТАКТИ
            </Link>
          </li>
        </ul>
        <div>
          <button type="button" onClick={toggle}>
            Закрити
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
