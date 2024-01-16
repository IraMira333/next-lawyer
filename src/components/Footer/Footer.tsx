import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5 className={styles.footerH5}>
          <span className={styles.footerSpan}>Антоній Курц</span>Адвокатське
          Бюро
        </h5>
        <p> Україна, Київ вул. Деревлянська, 9</p>
        <ul className="">
          <li className="">
            <a href="tel:+380930324874" className="">
              +38 (093) 032-48-74
            </a>
          </li>
          <li className="">
            <a href="mailto:antonio.kurzwell@gmail.com" className="">
              antonio.kurzwell@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
