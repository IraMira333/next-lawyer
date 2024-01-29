import Image from "next/image";
import styles from "./Home.module.scss";

const HomePart = () => {
  return (
    <>
      <div>
        <section className={styles.accentBG}>
          <h1 className={styles.homeTitleH1}>
            <span className={styles.spanTitleHome}>
              Курц Антоній Володимирович
            </span>
            Надання правової допомоги та захисту прав іноземних громадян в
            Україні
          </h1>
          <p className={styles.homeP1}>
            Імміграційний адвокат Курц Антоній Володимирович здійснює захист
            порушених прав іноземних громадян та громадян України у відносинах з
            Державною міграційною службою України.
          </p>
        </section>
      </div>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/choosing-career-types-of-lawyers.jpg"
          alt="Lawyer Photo"
          width={250}
          height={143}
          // width={700}
          // height={400}
          className={styles.firstImage}
        />
      </div>

      <section className={styles.secondSection}>
        <div className={styles.displayFlex}>
          <div className={styles.divWhy}>
            <h2 className={styles.titleWhy}>
              ЧOMY КУРЦ АНТОНІЙ ВОЛОДИМИРОВИЧ?
            </h2>
            <h3 className={styles.titleBecause}>
              - Я впевнений, я маю силу і знання вам допомогти...
            </h3>
          </div>
          <Image
            src="/ak-second-photo.jpeg"
            alt="Lawyer Photo"
            width={213}
            height={142}
            // width={426}
            // height={284}
            className={styles.secondImage}
          />
        </div>
        <div className={styles.aboutMeHomeDiv}>
          <p>
            Практикою у сфері міграційного права займаюсь більше п’ятнадцяти
            років. За цей час я досконало вивчив склад мислення, поведінку та
            стиль роботи посадових та службових осіб міграційної служби України
            та працівників інших правоохоронних органів України.
          </p>
          <p>
            Нажаль, порушення законодавства, корупційні діяння, зневажливе
            ставлення до прав і свобод громадян трапляються повсякчасно.
            Іноземці відчувають себе безпомічними та розгубленими перед
            свавіллям посадовців. На цей час я вже не можу спокійно дивитись на
            цей жах.
          </p>
        </div>
        <button className={styles.buttonBio}>Біографія</button>
      </section>
      <section className={styles.accentBG}>
        <h2 className={styles.titleThirdSection}>
          КОМУ Я НАДАЮ ПРАВОВУ ДОПОМОГУ{" "}
        </h2>
        <ul className={styles.whoDoIHelpList}>
          <li className={styles.whoDoIHelpItem}>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
              />
              <h4 className={styles.whoDoIHelpTitle}>
                Постраждалим від дій ДМС України
              </h4>
            </div>

            {/* <h4>
              Особам, які зіткнулись з протиправними діями органів ДМС України у
              випадках:
            </h4>
            <ul>
              <li>
                <p>
                  скасування дозволу на імміграцію та визнання недійсною
                  посвідки на постійне проживання;
                </p> 
              </li>
              <li>
                <p>
                  скасовано рішення про оформлення набуття громадянства України,
                  визнано недійсним та/чи вилучено паспорт громадянина України;
                </p>
              </li>
              <li>
                <p>відмовлено в оформленні дозволу на імміграцію в Україну;</p>
              </li>
              <li>
                <p>прийнято рішення про заборону в’їзду в Україну.</p>
              </li>
            </ul>*/}
          </li>
          <li>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
              />

              <h4 className={styles.whoDoIHelpTitle}>
                Потребуючим захисту у зв'язку з порушенням міграційного
                законодавства
              </h4>
            </div>
            {/* <h4>
              Особам, які потребують захисника в зв’язку з притягненням до
              адміністративної відповідальності за порушення міграційного
              законодавства
            </h4> */}
          </li>
          <li>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
              />

              <h4 className={styles.whoDoIHelpTitle}>
                Іноземцям, які мають намір звернутись до органів ДМС України
              </h4>
            </div>
            {/* <h4>
              Іноземцям, які мають намір звернутись до органів ДМС України з
              метою:
            </h4>
            <ul>
              <li>
                <p>набуття громадянства України</p>
                <p>отримання посвідки на постійне/тимчасове проживання</p>
                <p>продовження терміну перебування на території України</p>
                <p>отримання статусу особи без громадянства</p>
              </li>
            </ul> */}
          </li>
        </ul>
      </section>
    </>
  );
};
export default HomePart;
