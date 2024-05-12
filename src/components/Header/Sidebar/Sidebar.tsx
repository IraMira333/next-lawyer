import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import styles from "../Header.module.scss";
import { useLocale } from "next-intl";

const Sidebar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const locale = useLocale();

  return (
    <>
      <Link href="/" className={styles.modal} />
      <div className={styles.modalBox}>
        <button
          type="button"
          onClick={toggle}
          className={styles.closeMenuButton}
        >
          <IoMdClose size={24} color="black" />
        </button>
        <ul>
          <li className={styles.navItem} style={{ marginTop: "10px" }}>
            <AiOutlineSend
              size={12}
              color="orange"
              style={{ marginRight: "5px" }}
            />
            <Link
              className={styles.navLink}
              href={`/${locale}`}
              onClick={toggle}
            >
              ГОЛОВНА
            </Link>
          </li>
          <li className={styles.navItem} style={{ marginTop: "10px" }}>
            <AiOutlineSend
              size={12}
              color="orange"
              style={{ marginRight: "5px" }}
            />
            <Link
              className={styles.navLink}
              href={`/${locale}/services`}
              onClick={toggle}
            >
              ПОСЛУГИ
            </Link>
          </li>

          <li className={styles.navItem} style={{ marginTop: "10px" }}>
            <AiOutlineSend
              size={12}
              color="orange"
              style={{ marginRight: "5px" }}
            />
            <Link
              className={styles.navLink}
              href={`/${locale}/contacts`}
              onClick={toggle}
            >
              КОНТАКТИ
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Sidebar;
