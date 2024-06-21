import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { AiOutlineSend } from "react-icons/ai";

const Menu = ({ className }: { className: string }) => {
  const locale = useLocale();
  const t = useTranslations("Menu");
  const navTextStyle =
    "font-lora font-medium tab:text-base pc:text-lg cursor-pointer hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] uppercase";

  return (
    <>
      <li className="mt-2 tab:mt-0 flex items-center">
        <div className="tab:hidden">
          <AiOutlineSend size={12} color="orange" />
        </div>
        <Link
          className={`${navTextStyle} ${className}`}
          href={`/${locale}/services`}
        >
          {t("services")}
        </Link>
      </li>
      <li className="mt-2 tab:mt-0 flex items-center">
        <div className="tab:hidden">
          <AiOutlineSend size={12} color="orange" />
        </div>
        <Link
          className={`${navTextStyle} ${className}`}
          href={`/${locale}/legislation`}
        >
          {t("legislation")}
        </Link>
      </li>

      <li className="mt-2 tab:mt-0 flex items-center">
        <div className="tab:hidden">
          <AiOutlineSend size={12} color="orange" />
        </div>
        <Link
          className={`${navTextStyle} ${className}`}
          href={`/${locale}/contacts`}
        >
          {t("contacts")}
        </Link>
      </li>
    </>
  );
};

export default Menu;
