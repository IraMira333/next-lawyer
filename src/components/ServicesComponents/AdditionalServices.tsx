import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";

export const AdditionalServices = () => {
  const t = useTranslations("Services");

  return (
    <section className="bg-accentBg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("additionalServicesTitle")}
      </h2>
      <p className="leading-[18px] text-center mb-5 tab:text-base pc:mb-10">
        {t("additionalServicesP1")}
      </p>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] tab:flex tab:flex-wrap tab:gap-4 justify-center pc:max-w-[1800px]">
        <li className="tab:relative border border-accent rounded-lg overflow-hidden p-4 mb-4 tab:mb-0 pc:p-5 pc:mb-5">
          <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
            {t("additionalServicesList1Title")}
          </h3>
          <div className="h-[2px] w-full bg-accent "></div>
          <ul className="tab:text-base tab:leading-[21px]  mt-4">
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p> {t("additionalServicesList1Item1")}</p>
            </li>
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p> {t("additionalServicesList1Item2")}</p>
            </li>
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>{t("additionalServicesList1Item3")}</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
