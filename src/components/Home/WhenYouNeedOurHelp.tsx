import Image from "next/image";
import { SquareSmall } from "../shared/SquareSmall";
import { ButtonDetails } from "../shared/ButtonDetails";
import { useLocale, useTranslations } from "next-intl";

export const WhenYouNeedOurHelp = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("whomTitle")}
      </h2>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
              alt="picture"
              width={1000}
              height={1500}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox1Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li5")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li6")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:static pc:mt-auto pc:ml-5 pc:mr-1">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions01`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
              alt="picture"
              width={3584}
              height={5376}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
            {t("whomBox2Title")}
          </h3>
          <ul className="mb-4 tab:text-base tab:leading-[21px]">
            <li className="flex gap-2 text-start">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>{t("whomBox2Li1")}</p>
            </li>
            <li className="flex gap-2 text-start">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>{t("whomBox2Li2")}</p>
            </li>
            <li className="flex gap-2 text-start">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>{t("whomBox2Li3")}</p>
            </li>
            <li className="flex gap-2 text-start">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>{t("whomBox2Li4")}</p>
            </li>
          </ul>
          <div className="tab:absolute top-4 right-[22px] pc:static pc:mt-auto pc:ml-5 pc:mr-1">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions02`}
            />
          </div>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 pc:p-5 pc:mb-5">
          <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
              alt="picture"
              width={1250}
              height={827}
              className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
            />
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox3Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li4")}</p>
              </li>
            </ul>
          </div>
          <div className="tab:absolute top-4 right-[22px] pc:static pc:mt-auto pc:ml-5 pc:mr-1">
            <ButtonDetails
              text={t("detailsButton")}
              url={`/${locale}/services#solutions03`}
            />
          </div>
        </li>
      </ul>
    </section>
  );
};
