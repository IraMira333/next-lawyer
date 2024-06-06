import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import { ButtonDetails } from "../shared/ButtonDetails";
import { SquareBig } from "../shared/squareBig";

const HomePart = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <>
      <section className="relative bg-accentBg pc:bg-primary">
        <div className="tab:flex flex-row-reverse">
          <Image
            src="https://drive.google.com/uc?export=view&id=1nU-GhAzB-1NfuYQpGd_ydPsQYBfQGTZ4"
            alt={t("heroImage")}
            width={5184}
            height={3456}
            className=" w-full h-full tab:w-[50%] pc:w-[86%] tab:h-auto object-cover"
            priority
          />
          <div className="pc:absolute pc:right-[56.5%] py-10 px-4 ml-auto tab:px-5 tab:py-[45px] pc:py-[88px] pc:px-[38px] tab:my-auto tab:max-w-[450px] pc:max-w-[533px] pc:h-[512px] pc:bg-accentBg">
            <h1 className="font-lora text-accent text-3xl tab:text-4xl pc:text-[56px] pc:leading-[60px] font-semibold mb-3 tab:mb-4 pc:mb-9 text-center tab:text-left">
              {t("lawyer1")} <br />
              {t("lawyer2")}
            </h1>
            <h2 className="font-lora text-base pc:text-xl italic font-medium text-center mb-3 pc:mb-5 tab:text-left">
              {t("title")}
            </h2>
            <p className="text-center text-sm pc:text-base leading-[18px] pc:leading-[21px] tab:text-left">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
        <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium">
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
              </ul>
            </div>
            <div className="tab:absolute top-4 right-[22px] pc:static pc:mt-auto pc:ml-5 pc:mr-1">
              <ButtonDetails url={`/${locale}/services`} />
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
            <div className="tab:absolute top-4 right-[22px] pc:static pc:mt-auto pc:ml-5 pc:mr-1">
              <ButtonDetails url={`/${locale}/services`} />
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
              <ButtonDetails url={`/${locale}/services`} />
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-accentBg py-10 px-4 tab:px-5 tab:py-[60px]">
        <div className="max-w-[500px] tab:max-w-[900px] ml-auto mr-auto">
          <h2 className="font-lora text-accent text-center mb-5 text-[28px] leading-8 tab:text-xl pc:text-[40px] pc:leading-[48px] font-medium">
            {t("whomOtherServicesTitle")}
          </h2>
          <ul className="tab:flex tab:gap-4">
            <li className="tab:w-[50%]">
              <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
                {t("whomBox4Title1")}
              </h3>
              <div className="h-[2px] w-full bg-accent -mt-1 tab:w-[80%]"></div>

              <ul className="mt-[23px] mb-6">
                <li className="mb-4">
                  <div className="flex gap-2 text-start mb-2">
                    <div className="mt-2">
                      <SquareSmall />
                    </div>
                    <h4 className="text-base font-semibold text-start tab:ml-4">
                      {t("whomBox4Li1")}
                    </h4>
                  </div>
                  <p className=" leading-[18px] tab:text-base">
                    {t("whomBox4Li1P1")}
                  </p>
                </li>
                <li>
                  <div className="flex gap-2 text-start mb-2">
                    <div className="mt-2">
                      <SquareSmall />
                    </div>
                    <h4 className="text-base font-semibold text-start tab:ml-4">
                      {t("whomBox4Li2")}
                    </h4>
                  </div>
                  <p className=" leading-[18px] tab:text-base">
                    {t("whomBox4Li2P1")}
                  </p>
                </li>
              </ul>
            </li>
            <li className="tab:w-[50%] tab:flex tab:flex-col">
              <div className="tab:flex-grow">
                <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
                  {t("whomBox4Title2")}
                </h3>
                <div className="h-[2px] w-full bg-accent -mt-1 tab:w-[90%]"></div>
                <p className=" leading-[18px] mt-3 tab:text-base mb-[22px]">
                  {t("whomBox4Li3")}
                </p>
              </div>
              <div className="max-w-[380px] mx-auto tab:mr-0 tab:min-w-[356px] tab:max-w-[46%] rounded overflow-hidden">
                <Image
                  src="https://drive.google.com/uc?export=view&id=16EMZ2DM4nXKKzhffY1R5ndEgY0Uqmuyz"
                  alt="picture"
                  width={2000}
                  height={1350}
                  className="aspect-[288/173] tab:aspect-[356/214] pc:aspect-[593/266] flex object-cover "
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-4 tab:px-5 py-10 tab:py-[60px]">
        <div className="max-w-[500px] tab:max-w-[900px] mx-auto ">
          <div className="tab:flex tab:justify-between">
            <div className="max-w-[384px] tab:max-w-[57%] mx-auto tab:mx-0">
              <h2 className="font-lora text-2xl tab:text-3xl font-medium text-accent text-center tab:text-left mb-4 uppercase">
                {t("whyTitle")}
              </h2>
              <h3 className="font-lora italic text-lg leading-[26px] mb-4 uppercase">
                {t("whyP4")}
              </h3>
            </div>
            <div className="max-w-[380px] mx-auto tab:mx-0 tab:min-w-[270px] tab:max-w-[34%] rounded overflow-hidden mb-4">
              <Image
                src="https://drive.google.com/uc?export=view&id=1GmIOtH5AhdDSIgpi71_tFZOQXOEO72wE"
                alt="Lawyer Photo"
                width={1280}
                height={854}
                className="aspect-[288/193] tab:aspect-[263/176] pc:aspect-[234/156] flex object-cover "
              />
            </div>
          </div>
          <div className="tab:flex tab:justify-between">
            <div className="tab:text-base leading-[18px] tab:min-w-[502px] tab:w-[75%]">
              <p className="indent-6">{t("whyP1")}</p>
              <p className="indent-6">{t("whyP2")}</p>
              <p className="indent-6">{t("whyP3")}</p>
            </div>
            <div className="flex justify-end tab:items-end ">
              <SquareBig />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePart;
