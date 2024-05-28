import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./Home.module.scss";

const HomePart = () => {
  const t = useTranslations("Home");
  return (
    <>
      <section className="relative container pt-0 pb-[60px] z-0 shadow-hero">
        <Image
          src="https://drive.google.com/uc?export=view&id=10BLyZMPzVFCSKxNchJR3nlVmTiJCO5co"
          alt={t("heroImage")}
          fill
          sizes="100vw"
          className="mb-8 object-cover z-[-1] "
          priority
        />
        <h1 className=" font-lora text-xl leading-[50px] mb-5 text-center">
          <span className="block text-accent text-start mb-4">
            {t("lawyer")}
          </span>
          {t("title")}
        </h1>
        <p className=" leading-6 text-center">{t("description")}</p>
      </section>
      <div className="">
        <Image
          src="/choosing-career-types-of-lawyers.jpg"
          alt="Lawyer Photo"
          width={250}
          height={143}
          // width={700}
          // height={400}
          className="relative -mt-11 mb-5 mx-auto"
        />
      </div>

      <section className="container pt-9 pb-[60px]">
        <h2 className=" font-robotoCond text-accent text-center mb-5 text-lg font-medium">
          {t("whomTitle")}
        </h2>
        <ul>
          <li>
            <div className="min-w-[300px] min-h-[320px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
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
          <li>
            <div className="min-w-[300px] min-h-[320px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1IqNfGR28avp-RAPWZpA9eKU-oOtjKK9D"
                alt="picture"
                width={218}
                height={212}
                className={styles.whoDoIHelpImage}
              />
              <h4 className={styles.whoDoIHelpTitle}>{t("whomBox2Title")}</h4>
            </div>
          </li>
          <li>
            <div className="min-w-[300px] min-h-[320px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1MPAY2L7nUrptE6boiesM4iKHNZmpnWQY"
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
        </ul>
      </section>
      <section className={`${styles.servisesSection} ${styles.accentBG}`}>
        <h2 className={styles.titleThirdSection}>
          {t("whomOtherServicesTitle")}
        </h2>
        <ul>
          <li>
            <Image
              src="https://drive.google.com/uc?export=view&id=16EMZ2DM4nXKKzhffY1R5ndEgY0Uqmuyz"
              alt="picture"
              width={218}
              height={212}
              className={styles.whoDoIHelpImage}
            />
            <h3>{t("whomBox4Title1")}</h3>

            <ul>
              <li>
                <h4>{t("whomBox4Li1")}</h4>
                <p>{t("whomBox4Li1P1")}</p>
              </li>
              <li>
                <h4>{t("whomBox4Li2")}</h4>
                <p>{t("whomBox4Li2P1")}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>{t("whomBox4Title2")}</h3>
            <p>{t("whomBox4Li3")}</p>
          </li>
        </ul>
      </section>
      <section className={`${styles.whyMeSection} `}>
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
        <div>
          <div className={styles.aboutMeHomeDiv}>
            <p>{t("whyP1")}</p>
            <p>{t("whyP2")}</p>
            <p>{t("whyP3")}</p>
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <button className={styles.buttonBio}>{t("biographyButton")}</button>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default HomePart;
