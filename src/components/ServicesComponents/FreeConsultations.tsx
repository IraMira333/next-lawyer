import { useLocale, useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";
import { Link } from "@/i18n/navigation";
import { FreeItem } from "./FreeItem";
import { freeConsultationsList } from "../assets/freeConsultationsList";
import { LocaleType } from "../../../types/LocaleType";

export const FreeConsultations = () => {
  const t = useTranslations("FreeConsultatios");
  const locale = useLocale();

  return (
    <section className="text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <ul className="mb-8 tab:mb-12">
          {freeConsultationsList.map((item) => (
            <li
              key={item.id}
              className="group mb-2 tab:mb-4 tab:w-[90%] hover:scale-105 p-2 bg-accentBg transition-all duration-300 ease-in-out border border-accentBg shadow-hero rounded-md odd:ml-3 odd:mr-auto even:ml-auto even:mr-3"
            >
              <Link
                href={`/free-consultations#${item.id}`}
                className="font-semibold  w-full group-hover:underline transition-all duration-300 ease-in-out"
              >
                {item[locale as LocaleType].question}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
          {freeConsultationsList.map((item, i) => (
            <li
              key={i}
              id={item.id}
              className="tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px] tab:relative"
            >
              <div
                className="max-w-full mx-auto rounded tab:rounded-none overflow-hidden tab:ml-0 
                    tab:min-w-[247px] tab:max-w-[247px] pc:min-w-[391px] pc:max-w-[391px]  mb-2 "
              >
                <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3 border-b-[2px] tab:border-b-0 border-accent pb-1">
                  {item[locale as LocaleType].question}
                </h3>
              </div>
              <FreeItem item={item[locale as LocaleType].answer} />
              <div className="tab:flex tab:flex-col tab:justify-between">
                <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
                  <SquareBig />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
