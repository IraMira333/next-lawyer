import Link from "next/link";
import { useLocale } from "next-intl";

const Menu = ({ className }: { className: string }) => {
  const locale = useLocale();
  return (
    <>
      <li>
        <Link
          className={`font-lora  font-medium tab:text-sm cursor-pointer hover:text-accent focus:text-accent ${className}`}
          href={`/${locale}/services`}
        >
          ПОСЛУГИ
        </Link>
      </li>

      <li>
        <Link
          className={`font-lora  font-medium tab:text-sm cursor-pointer hover:text-accent focus:text-accent ${className}`}
          href={`/${locale}/contacts`}
        >
          КОНТАКТИ
        </Link>
      </li>
    </>
  );
};

export default Menu;
