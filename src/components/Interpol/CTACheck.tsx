import { useTranslations } from "next-intl";
import { CheckModal } from "../Modal/CheckModal";

export const CTACheck = () => {
  const t = useTranslations("Interpol");
  return (
    <section
      id="form"
      className="bg-accentGradientLight shadow-inner-top-bottom py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9 "
    >
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto tab:flex tab:justify-between tab:items-center tab:gap-6 pc:gap-32">
        <div>
          <h2 className="font-lora text-xl tab:text-2xl italic font-semibold text-center tab:text-left uppercase mb-2">
            {t("ctaTitle")}
          </h2>
          <p className="tab:text-xl text-center tab:text-left ">
            {t("ctaText")}
          </p>
        </div>
        <CheckModal />
      </div>
    </section>
  );
};
