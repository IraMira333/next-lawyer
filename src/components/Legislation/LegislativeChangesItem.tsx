import { useLocale, useTranslations } from "next-intl";
import { SquareSmall } from "../shared/SquareSmall";
import { LocaleType } from "../../../types/LocaleType";
import { LegislationChangesType } from "@/mockedData/legislationChangesData";

export const LegislativeChangesItem = ({ item }: { item: LegislationChangesType }) => {
  const locale = useLocale();
  const t = useTranslations("Legislation");

  return (
    <>
      <div className="mt-2">
        <SquareSmall />
      </div>
      <p className=" whitespace-pre-line">
        {item[locale as LocaleType]?.legislationTitle}
        <span className="">
          {item.data.link.map((link, ind) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-2 hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              href={link}
            >
              {item.data.link.length > 1 ? t("link") + (ind + 1) : t("link")}
            </a>
          ))}
        </span>
      </p>
    </>
  );
};
