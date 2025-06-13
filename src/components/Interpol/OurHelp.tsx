import { useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import Image from "next/image";

export const OurHelp = () => {
  const t = useTranslations("Interpol");
  const helpList = [
    t("helpItem1"),
    t("helpItem2"),
    t("helpItem3"),
    t("helpItem4"),
    t("helpItem5"),
  ];
  const whyList = [
    "whyItem1",
    "whyItem2",
    "whyItem3",
    "whyItem4",
    "whyItem5",
    "whyItem6",
  ];

  return (
    <section className="bg-accentBg text-base tab:text-lg py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9 text-justify">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        <h3 className="text-lg tab:text-2xl font-semibold mb-1 text-accent">
          {t("helpTitle")}
        </h3>
        <p className="mb-4">{t("helpText")}</p>
        {helpList.map((item) => (
          <li key={item} className="flex gap-2 text-start mb-2">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p className="">{item}</p>
          </li>
        ))}
        <h2 className=" mx-auto font-lora text-2xl tab:text-3xl font-medium text-accent text-center mb-4 uppercase pc:text-4xl mt-7">
          {t("whyTitle")}
        </h2>
        <div className="tab:flex tab:items-center tab:gap-4 pc:gap-[67px] ">
          <div className="pc:flex tab:justify-between pc:flex-col tab:w-[40%] ">
            <div className=" mx-auto tab:mx-0 tab:min-w-[270px] rounded overflow-hidden mb-4 pc:ml-auto">
              <Image
                src="/office.jpg"
                alt={t("whyTitle")}
                width={1190}
                height={790}
                className="aspect-[288/193] tab:aspect-[263/176] pc:aspect-[234/156] flex object-cover "
              />
            </div>
          </div>
          <div className="tab:w-[60%]">
            <ul className="text-base pc:text-lg">
              {whyList.map((item) => (
                <li key={item} className="mb-1">
                  {t.rich(item, {
                    bold: (chunk) => (
                      <span className="font-semibold ">{chunk}</span>
                    ),
                  })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
