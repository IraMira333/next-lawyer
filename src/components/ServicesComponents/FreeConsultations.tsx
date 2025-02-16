import { useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";
import { SquareSmall } from "../shared/SquareSmall";
import { FreeItem01 } from "./FreeList/FreeItem01";

export const FreeConsultations = () => {
  const t = useTranslations("Services");

  return (
    <section className="text-base tab:text-lg px-4 py-10 tab:px-5 pc:px-[38px] pc:py-[60px]">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] mx-auto">
        <h2 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
          {t("freeTitle")}
        </h2>
        <p className="indent-7 mb-5 ">{t("freeText")}</p>
        <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
          <li className="tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px] tab:relative">
            <div
              className="max-w-full mx-auto rounded tab:rounded-none overflow-hidden tab:ml-0 
                    tab:min-w-[230px] tab:max-w-[300px] pc:min-w-[391px] pc:max-w-[391px]  mb-2 "
            >
              <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3 border-b-[2px] tab:border-b-0 border-accent pb-1">
                {t("freeQuestion01")}
              </h3>
            </div>
            <FreeItem01 />
            <div className="tab:flex tab:flex-col tab:justify-between">
              <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
                <SquareBig />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
