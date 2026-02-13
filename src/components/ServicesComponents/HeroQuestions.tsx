import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroQuestions = () => {
  const t = useTranslations("FreeConsultatios");

  return (
    <section className="relative bg-accentBg pc:bg-primary">
      <div className="tab:flex flex-row-reverse">
        <Image
          src="/questions.jpg"
          alt={t("heroPicture")}
          width={1600}
          height={1060}
          className=" w-full h-full scale-x-[-1] max-h-[400px] object-right-bottom pc:max-h-[600px] tab:w-[50%] pc:w-[86%] tab:h-auto object-cover"
          priority
        />
        <div className="pc:absolute pc:right-[55%] py-10 px-4 ml-auto tab:px-5 tab:py-[45px] pc:py-[88px] pc:px-[38px] tab:my-auto tab:max-w-[450px] pc:max-w-[533px]  pc:max-h-[600px] pc:bg-accentBg">
          <h1 className="font-lora text-3xl text-accent font-semibold tab:text-4xl pc:text-[56px] pc:leading-[60px] mb-5">
            {t("title")}
          </h1>
          <p className="text-center text-sm pc:text-base leading-[18px] pc:leading-[21px] tab:text-left max-w-[500px] mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
