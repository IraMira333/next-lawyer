"use client";
import { usePathname } from "next/navigation";
import styles from "../Header/Header.module.scss";
import Link from "next/link";

export default function Modal() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname === "/") return null;
  return (
    <>
      <Link href="/" className={styles.modal} />
      <div className={styles.modalBox}>
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
        <div>
          <button type="button" onClick={() => console.log("Yes")}>
            Close
          </button>
        </div>
      </div>
    </>
  );
  // return (
  //   <div>
  // <ul className={styles.navList}>
  //   <li className={styles.navItem}>
  //     <Link className={styles.navLink} href="/services">
  //       ПОСЛУГИ
  //     </Link>
  //   </li>

  //   <li className={styles.navItem}>
  //     <Link className={styles.navLink} href="/contacts">
  //       КОНТАКТИ
  //     </Link>
  //   </li>
  // </ul>
  // <div className="flex justify-center mt-4">
  //   {/* Using useRouter to dismiss modal*/}
  //   <button
  //     onClick={() => console.log("Yes")}
  //     className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
  //   >
  //     Close
  //   </button>
  // </div>
  //   </div>
  // );
}
