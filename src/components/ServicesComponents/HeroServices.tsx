import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroServices = () => {
  const t = useTranslations("Services");

  return (
    <section className="relative bg-[#0c0c0c7f]  w-full flex px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 ">
      <Image
        src="https://drive.google.com/uc?export=view&id=1aKWhqUuMFl87qiGqPNXpCy5u5Tm4bBcg"
        alt={t("heroPicture")}
        width={1024}
        height={662}
        priority
        className="absolute w-full top-0 left-0 h-full object-cover z-[-1]"
      />
      <div className="min-w-[288px] w-[500px] mx-auto tab:w-[900px] pc:w-[1800px] my-auto">
        <div className="min-w-[288px] max-w-[400px] pc:max-w-[600px] text-left">
          <h2 className="font-lora text-3xl text-light font-semibold tab:text-4xl pc:text-[56px] pc:leading-[60px] mb-5">
            {t("title")}
          </h2>
          <p className=" text-light text-lg leading-[18px] pc:leading-[21px] text-left">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
