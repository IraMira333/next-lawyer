import Link from "next/link";
import styles from "../Header.module.scss";
import Image from "next/image";
import { useLocale } from "next-intl";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const locale = useLocale();
  return (
    <>
      <button className={styles.burgerMenu} onClick={toggle}>
        <Image src="/burger-menu-opt.svg" alt="Menu" width={32} height={32} />
      </button>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href={`/${locale}/services`}>
            ПОСЛУГИ
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link className={styles.navLink} href={`/${locale}/contacts`}>
            КОНТАКТИ
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
