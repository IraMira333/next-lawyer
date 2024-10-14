import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroLegislation = () => {
  const t = useTranslations("Legislation");

  return (
    <section className="relative bg-accentBg pc:bg-primary ">
      <div className="tab:flex flex-row-reverse">
        <Image
          src="/photorealistic-lawyer-environment.webp"
          alt={t("heroPicture")}
          width={2688}
          height={1792}
          className=" w-full h-full tab:w-[50%] pc:w-[86%] max-h-[300px] pc:max-h-[500px] tab:h-auto object-cover"
          priority
        />
        <div className="pc:absolute pc:right-[55%] pc:top-[30%] py-10 px-4 ml-auto tab:px-5 tab:py-[45px] pc:py-[88px] pc:px-[38px] tab:my-auto tab:max-w-[450px] pc:max-w-[533px]  pc:max-h-[600px] pc:bg-accentBg">
          <h1 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
            {" "}
            {t("title")}
          </h1>
          <p className="text-center text-sm pc:text-base leading-[18px] pc:leading-[21px] tab:text-left">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
