import { legislationData } from "@/mockedData/legislation";
import { useTranslations } from "next-intl";
import { LawItem } from "./LawItem";

export const Legislation = () => {
  const t = useTranslations("Legislation");

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("title")}
      </h2>
      <ul>
        {legislationData.map((data) => (
          <li key={data.id} className="flex gap-2 text-start mb-2">
            <LawItem item={data} />
          </li>
        ))}
      </ul>
    </section>
  );
};
