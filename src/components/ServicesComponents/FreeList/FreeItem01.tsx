import { SquareSmall } from "@/components/shared/SquareSmall";
import { useTranslations } from "next-intl";

export const FreeItem01 = () => {
  const t = useTranslations("FreeConsultatios.freeAnswer01");

  return (
    <ul className="text-sm tab:text-base tab:leading-[21px]">
      <li className="flex gap-2 text-start mb-2">
        <div className="">
          <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
            1
          </span>
        </div>
        <p>
          {t.rich("item11", {
            bold: (chunk) => <span className="font-semibold">{chunk}</span>,
          })}
        </p>
      </li>
      <li className="flex gap-2 text-start mb-2">
        <div className="mt-2">
          <SquareSmall />
        </div>
        <p>{t("subItem11")}</p>
      </li>
      <li className="flex gap-2 text-start mb-2">
        <div className="mt-2">
          <SquareSmall />
        </div>
        <p>{t("subItem12")}</p>
      </li>
      <li className="flex gap-2 text-start mb-2">
        <div className="mt-2">
          <SquareSmall />
        </div>
        <p>{t("subItem13")}</p>
      </li>
      <li className="flex gap-2 text-start mb-2">
        <div className="">
          <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
            2
          </span>
        </div>
        <p>
          {t.rich("item12", {
            bold: (chunk) => <span className="font-semibold">{chunk}</span>,
          })}
        </p>
      </li>
      <li className="flex gap-2 text-start mb-2">
        <div className="">
          <span className="text-base leading-[21px] tab:text-lg font-semibold mb-3 text-accent">
            3
          </span>
        </div>
        <p>
          {t.rich("item13", {
            bold: (chunk) => <span className="font-semibold">{chunk}</span>,
          })}
        </p>
      </li>
    </ul>
  );
};
