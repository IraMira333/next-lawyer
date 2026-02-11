import { useTranslations } from "next-intl";
import { CheckModal } from "../Modal/CheckModal";
import Image from "next/image";
import { LinkToPage } from "../shared/LinkToPage";

export const CTAFree = () => {
  const t = useTranslations("Services");
  return (
    <section id="form" className="bg-modalBg py-6 px-4 tab:px-5 tab:py-9 pc:px-9 ">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto tab:flex tab:justify-between tab:items-center tab:gap-6 pc:gap-32">
        <div className="hidden tab:block tab:w-[20%] pc:w-[15%] desk:w-[12%]">
          <Image src="/cta-free.png" alt="decor icon" width={300} height={300} />
        </div>
        <div className="tab:w-[60%] pc:w-[50%]">
          <h2 className="font-lora text-accent text-lg tab:text-xl italic font-semibold text-center tab:text-left uppercase mb-4">
            {t("freeTitle")}
          </h2>
          <p className="text-light tab:text-base text-center tab:text-left mb-4">
            {t("freeText")}
          </p>
          <LinkToPage name={t("freeBtn")} link="/free-consultations" />
        </div>
      </div>
    </section>
  );
};
