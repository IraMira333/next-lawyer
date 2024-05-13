import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./Home.module.scss";

const HomePart = () => {
  const t = useTranslations("Home");
  return (
    <>
      <section className={styles.accentBG}>
        <h1 className={styles.homeTitleH1}>
          <span className={styles.spanTitleHome}>{t("lawyer")}</span>
          {t("title")}
        </h1>
        <p className={styles.homeP1}>{t("description")}</p>
      </section>
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

      <section className={styles.accentBG}>
        <h2 className={styles.titleThirdSection}>{t("whomTitle")}</h2>
        <ul className={styles.whoDoIHelpList}>
          <li className={styles.whoDoIHelpItem}>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
                className={styles.whoDoIHelpImage}
              />
              <div>
                <h4 className={styles.whoDoIHelpTitle}>{t("whomBox1Title")}</h4>
                <ul className={styles.listStyle}>
                  <li>
                    <p>{t("whomBox1Li1")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li2")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li3")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li4")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li5")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.whoDoIHelpItem}>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
                className={styles.whoDoIHelpImage}
              />
              <h4 className={styles.whoDoIHelpTitle}>{t("whomBox2Title")}</h4>
            </div>
          </li>
          <li>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/uaDocs.avif"}
                alt="picture"
                width={218}
                height={212}
                className={styles.whoDoIHelpImage}
              />
              <div>
                <h4 className={styles.whoDoIHelpTitle}>
                  {t("whomBox3Title")}{" "}
                </h4>
                <ul className={styles.listStyle}>
                  <li>
                    <p>{t("whomBox3Li1")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li2")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li3")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li4")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.whoDoIHelpItem}>
            <div className={styles.whoDoIHelpBox}>
              <Image
                src={"/lawyers.png"}
                alt="picture"
                width={218}
                height={212}
                className={styles.whoDoIHelpImage}
              />
              <div>
                <h4 className={styles.whoDoIHelpTitle}>{t("whomBox4Title")}</h4>
                <ul className={styles.listStyle}>
                  <li>
                    <p>{t("whomBox4Li1")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox4Li2")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.displayFlex}>
          <div className={styles.divWhy}>
            <h2 className={styles.titleWhy}>{t("whyTitle")}</h2>
            <h3 className={styles.titleBecause}>{t("whyP4")}</h3>
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
          <p>{t("whyP1")}</p>
          <p>{t("whyP2")}</p>
          <p>{t("whyP3")}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className={styles.buttonBio}>{t("biographyButton")}</button>
        </div>
      </section>
    </>
  );
};
export default HomePart;
