import { legislationChangesData } from "@/mockedData/legislationChangesData";
import { useTranslations } from "next-intl";
import { LegislativeChangesItem } from "./LegislativeChangesItem";
import { Video } from "./Video";

export const LegislativeChangesList = () => {
  const t = useTranslations("Legislation");
  const textList = [t("infoP1"), t("infoP2"), t("infoP3")];
  const textList2 = [t("infoP4"), t("infoP5"), "video", t("infoP6")];
  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px] tab:text-base">
      <div className="min-w-[288px] max-w-[600px] mx-auto tab:max-w-[700px] pc:max-w-full pc:flex pc:gap-12">
        <div className="pc:w-3/5">
          <div className="tab:flex gap-4 mb-5  justify-center items-center">
            <h3
              id="category"
              className=" text-accent text-base leading-[21px] tab:text-lg pc:text-2xl font-semibold mb-4 tab:mb-0"
            >
              {t("legislativeChangesTitle")}
            </h3>
          </div>
          <ul className="pc:text-justify">
            {legislationChangesData.map((item) => (
              <li
                key={`${item.data.id}F`}
                className="flex gap-2 text-start mb-2 pc:text-justify"
              >
                <LegislativeChangesItem item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" pc:w-2/5 mt-5 pc:mt-0 border border-accent rounded-lg p-4 pc:p-6 bg-accentBg ">
          <h3 className=" text-accent text-base leading-[21px] tab:text-lg font-semibold mb-4 text-center pc:text-right ">
            {t("infoTitle")}
          </h3>
          <div className="tab:text-base leading-[18px] indent-6  pc:text-justify">
            {textList.map((text, index) => (
              <p key={`${index}+a`} className="">
                {text}
              </p>
            ))}
          </div>
          <h3 className=" text-accent text-base leading-[21px] tab:text-lg font-semibold my-4 text-center pc:text-right ">
            {t("infoTitle2")}
          </h3>
          <div className="tab:text-base leading-[18px] indent-6  pc:text-justify">
            {textList2.map(
              (text, index) =>
                index !== 2 ? (
                  <p key={`${index}+a`} className="">
                    {text}
                  </p>
                ) : null,
              // <div key="video" className="my-3 mx-auto w-fit">
              //   <Video />
              // </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
