import { useTranslations } from "next-intl";
import { Color, SquareSmall } from "../shared/SquareSmall";

export const InterpolIs = () => {
  const t = useTranslations("Interpol");
  const infoList = [
    { title: t("title1"), text: t("text1") },
    {
      title: t("title2"),
      text: t.rich("text2", {
        indent: (chunk) => <span className="block indent-7">{chunk}</span>,
      }),
    },
    { title: t("title3"), text: t("text3") },
  ];
  interface Notice {
    color: Color;
    text: string;
  }
  const notices: Notice[] = [
    { text: "list1Item1", color: "red" },
    { text: "list1Item2", color: "green" },
    { text: "list1Item3", color: "orange" },
    { text: "list1Item4", color: "blue" },
    { text: "list1Item5", color: "yellow" },
    { text: "list1Item6", color: "black" },
    { text: "list1Item7", color: "violet" },
    { text: "list1Item8", color: "grey" },
  ];
  return (
    <section className="py-10 px-4 tab:px-5 tab:py-[60px] pc:px-9">
      <div className="max-w-[500px] tab:max-w-[900px] pc:max-w-[1800px] ml-auto mr-auto">
        <div className="">
          {infoList.map((item, index) => (
            <div key={index} className="">
              <h3 className="text-lg tab:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 tab:text-lg mb-6 text-justify indent-7">
                {item.text}
              </p>
            </div>
          ))}
          <div className="">
            <h3 className="text-lg tab:text-2xl font-semibold">
              {t("titleList1")}
            </h3>
            <div className="h-[2px] w-full bg-accent  "></div>

            <ul className="mt-[23px] mb-6 tab:mb-0 grid grid-cols-1 tab:grid-cols-2 gap-x-6">
              {notices.map((item) => (
                <li key={item.color} className="mb-4">
                  <div className="flex gap-2 text-start mb-2">
                    <div className="mt-1">
                      <SquareSmall color={item.color} size />
                    </div>
                    <p className="leading-[18px] tab:text-base">
                      {t.rich(item.text, {
                        bold: (chunk) => (
                          <span className="text-base font-semibold text-start tab:ml-4">
                            {chunk}
                          </span>
                        ),
                        br: () => <br />,
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* <div className="flex justify-center tab:justify-end tab:mt-[50px] pc:mt-[80px]">
              <ButtonDetails
                text={t("detailsButton")}
                url={`/${locale}/services#termination`}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
