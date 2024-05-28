import Image from "next/image";
import { useTranslations } from "next-intl";

const HomePart = () => {
  const t = useTranslations("Home");
  return (
    <>
      <section className="relative px-2 pt-0 pb-[60px] z-0 shadow-hero">
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

      <section className="px-2 pt-9 pb-[60px]">
        <h2 className="font-robotoCond text-accent text-center mb-5 text-lg font-medium">
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
                className="w-[218px] h-[212px] flex object-cover mx-auto"
              />
              <div>
                <h3 className="font-robotoCond text-lg text-center my-3">
                  {t("whomBox1Title")}
                </h3>
                <ul className="list-square pl-4 marker-square ">
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
                className="flex object-cover w-[218px] h-[212px] mx-auto"
              />
              <h3 className="font-robotoCond text-lg text-center my-3">
                {t("whomBox2Title")}
              </h3>
            </div>
          </li>
          <li>
            <div className="min-w-[300px] min-h-[320px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1MPAY2L7nUrptE6boiesM4iKHNZmpnWQY"
                alt="picture"
                width={218}
                height={212}
                className="flex object-cover w-[218px] h-[212px] mx-auto"
              />
              <div>
                <h3 className="font-robotoCond text-lg text-center my-3">
                  {t("whomBox3Title")}{" "}
                </h3>
                <ul className="list-square pl-4 marker-square">
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
      <section className="bg-accentBg pt-8 px-3 pb-[60px] shadow-custom">
        <h2 className="font-robotoCond text-accent text-center mb-5 text-lg font-medium">
          {t("whomOtherServicesTitle")}
        </h2>
        <ul>
          <li>
            <Image
              src="https://drive.google.com/uc?export=view&id=16EMZ2DM4nXKKzhffY1R5ndEgY0Uqmuyz"
              alt="picture"
              width={218}
              height={212}
              className="flex object-cover mx-auto"
            />
            <h3 className="font-robotoCond text-lg text-center mt-3">
              {t("whomBox4Title1")}
            </h3>

            <ul>
              <li>
                <h4 className="font-robotoCond text-base text-start my-2">
                  {t("whomBox4Li1")}
                </h4>
                <p className="text-justify ">{t("whomBox4Li1P1")}</p>
              </li>
              <li>
                <h4 className="font-robotoCond text-base text-start my-2">
                  {t("whomBox4Li2")}
                </h4>
                <p className="text-justify ">{t("whomBox4Li2P1")}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-robotoCond text-lg text-center my-3">
              {t("whomBox4Title2")}
            </h3>
            <p className="text-justify ">{t("whomBox4Li3")}</p>
          </li>
        </ul>
      </section>
      <section className="px-2">
        <div>
          <div className="max-w-[384px]">
            <h2 className="font-robotoCond text-base font-medium text-accent text-right mb-4 mt-6 ">
              {t("whyTitle")}
            </h2>
            <h3 className="font-lora italic text-xl mb-5">{t("whyP4")}</h3>
          </div>
          <Image
            src="/ak-second-photo.jpeg"
            alt="Lawyer Photo"
            width={213}
            height={142}
            // width={426}
            // height={284}
            className=""
          />
        </div>
        <div>
          <div className="my-3 text-justify text-base font-light">
            <p className="indent-6">{t("whyP1")}</p>
            <p className="indent-6">{t("whyP2")}</p>
            <p className="indent-6">{t("whyP3")}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePart;
