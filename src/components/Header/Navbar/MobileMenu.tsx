import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const openedStyles = "h-80";
const closedStyles = "h-0";
export interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

const MobileMenu = ({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
  const locale = useLocale();

  return (
    <nav
      className={`absolute top-[65px] left-0 z-10 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
      
           bg-accentBg ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
    >
      <ul className="p-6">
        <li className="mt-2 flex items-center">
          <AiOutlineSend size={12} color="orange" />
          <Link
            className="font-lora ml-1 text-nav font-medium text-sm cursor-pointer hover:text-accent focus:text-accent"
            href={`/${locale}`}
            onClick={() => setIsHeaderMenuOpened(false)}
          >
            ГОЛОВНА
          </Link>
        </li>
        <li className="mt-2 flex items-center">
          <AiOutlineSend size={12} color="orange" />
          <Link
            className="font-lora ml-1  text-nav font-medium text-sm cursor-pointer hover:text-accent focus:text-accent"
            href={`/${locale}/services`}
            onClick={() => setIsHeaderMenuOpened(false)}
          >
            ПОСЛУГИ
          </Link>
        </li>

        <li className="mt-2 flex items-center">
          <AiOutlineSend size={12} color="orange" />
          <Link
            className="font-lora ml-1 text-nav font-medium text-sm cursor-pointer hover:text-accent focus:text-accent"
            href={`/${locale}/contacts`}
            onClick={() => setIsHeaderMenuOpened(false)}
          >
            КОНТАКТИ
          </Link>
        </li>
        <li className="ml-4 mt-2">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
