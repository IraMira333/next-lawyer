import { legislationChangesData } from "@/mockedData/legislationChangesData";
import { useTranslations } from "next-intl";
import { LawItem } from "./LawItem";

export const LegislativeChangesList = () => {
  const t = useTranslations("Legislation");

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px] tab:text-base">
      <div className="min-w-[288px] max-w-[600px] mx-auto tab:max-w-[700px] pc:max-w-[900px]">
        <div className="tab:flex gap-4 mb-5 pc:mb-7 justify-center items-center">
          <h3
            id="category"
            className=" text-accent text-base leading-[21px] tab:text-lg font-semibold mb-4 tab:mb-0"
          >
            {t("legislativeChangesTitle")}
          </h3>
        </div>
        <ul>
          {legislationChangesData.map((item) => (
            <li key={item.data.id} className="flex gap-2 text-start mb-2">
              <LawItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
