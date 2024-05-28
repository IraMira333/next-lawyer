import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const locale = useLocale();
  return (
    <>
      <button className="bg-transparent bigmob:hidden" onClick={toggle}>
        <Image src="/burger-menu-opt.svg" alt="Menu" width={32} height={32} />
      </button>

      <ul className="hidden bigmob:flex gap-5">
        <li>
          <Link
            className="font-robotoCond text-nav font-bold text-sm cursor-pointer hover:text-accent focus:text-accent"
            href={`/${locale}/services`}
          >
            ПОСЛУГИ
          </Link>
        </li>

        <li>
          <Link
            className="font-robotoCond text-nav font-bold text-sm cursor-pointer hover:text-accent focus:text-accent"
            href={`/${locale}/contacts`}
          >
            КОНТАКТИ
          </Link>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
