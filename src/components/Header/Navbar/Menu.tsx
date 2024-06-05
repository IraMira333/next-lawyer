import Link from "next/link";
import { useLocale } from "next-intl";

const Menu = ({ className }: { className: string }) => {
  const locale = useLocale();
  return (
    <>
      <li>
        <Link
          className={`font-lora font-medium cursor-pointer hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${className}`}
          href={`/${locale}/services`}
        >
          ПОСЛУГИ
        </Link>
      </li>

      <li>
        <Link
          className={`font-lora font-medium cursor-pointer hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${className}`}
          href={`/${locale}/contacts`}
        >
          КОНТАКТИ
        </Link>
      </li>
    </>
  );
};

export default Menu;
