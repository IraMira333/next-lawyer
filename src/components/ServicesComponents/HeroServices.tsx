import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroServices = () => {
  const t = useTranslations("Services");

  return (
    <section
      className="relative bg-[#3333337f] min-h-[100px] aspect-[320/100] max-h-[200px] tab:min-h-[240px] tab:aspect-[768/240] tab:max-h-[360px] 
    pc:min-h-[400px] pc:aspect-[1280/400] pc:max-h-[500px] w-full flex"
    >
      <Image
        src="https://drive.google.com/uc?export=view&id=1aKWhqUuMFl87qiGqPNXpCy5u5Tm4bBcg"
        alt="Top view over career guidance items for judges"
        width={1024}
        height={662}
        priority
        className="absolute w-full top-0 left-0 min-h-[100px] aspect-[320/100] max-h-[200px] tab:min-h-[240px] tab:aspect-[768/240] tab:max-h-[360px]
        pc:min-h-[400px] pc:aspect-[1280/400] pc:max-h-[500px] object-cover z-[-1]"
      />
      <h2 className="font-lora text-3xl text-light font-semibold ml-4 tab:ml-[38px] tab:text-4xl pc:text-[56px] pc:leading-[60px] my-auto">
        {t("title")}
      </h2>
    </section>
  );
};
