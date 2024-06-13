import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Menu = ({ className }: { className: string }) => {
  const locale = useLocale();
  const t = useTranslations("Menu");

  return (
    <>
      <li>
        <Link
          className={`font-lora font-medium tab:text-base pc:text-lg cursor-pointer hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] uppercase ${className}`}
          href={`/${locale}/termination`}
        >
          {t("termination")}
        </Link>
      </li>
      <li>
        <Link
          className={`font-lora font-medium items-center tab:text-base pc:text-lg cursor-pointer hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] uppercase ${className}`}
          href={`/${locale}/services`}
        >
          {t("services")}
        </Link>
      </li>

      <li>
        <Link
          className={`font-lora font-medium tab:text-base pc:text-lg cursor-pointer hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] uppercase ${className}`}
          href={`/${locale}/contacts`}
        >
          {t("contacts")}
        </Link>
      </li>
    </>
  );
};

export default Menu;
