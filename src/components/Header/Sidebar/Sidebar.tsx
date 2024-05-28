import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const Sidebar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const locale = useLocale();

  return (
    <>
      <Link
        href="/"
        className="w-[100%] h-[100vh] bg-[#00000080] fixed top-0 left-0 z-10 backdrop-blur-sm"
      />
      <div className="w-[200px] h-[50%] bg-white fixed top-0 right-0 z-[11] p-5 overflow-hidden">
        <button
          type="button"
          onClick={toggle}
          className=" bg-transparent border-0 "
        >
          <IoMdClose size={24} color="black" />
        </button>
        <ul>
          <li className="mt-2 flex items-center">
            <AiOutlineSend size={12} color="orange" />
            <Link
              className="font-robotoCond ml-1 text-nav font-bold text-sm cursor-pointer hover:text-accent focus:text-accent"
              href={`/${locale}`}
              onClick={toggle}
            >
              ГОЛОВНА
            </Link>
          </li>
          <li className="mt-2 flex items-center">
            <AiOutlineSend size={12} color="orange" />
            <Link
              className="font-robotoCond ml-1  text-nav font-bold text-sm cursor-pointer hover:text-accent focus:text-accent"
              href={`/${locale}/services`}
              onClick={toggle}
            >
              ПОСЛУГИ
            </Link>
          </li>

          <li className="mt-2 flex items-center">
            <AiOutlineSend size={12} color="orange" />
            <Link
              className="font-robotoCond ml-1 text-nav font-bold text-sm cursor-pointer hover:text-accent focus:text-accent"
              href={`/${locale}/contacts`}
              onClick={toggle}
            >
              КОНТАКТИ
            </Link>
          </li>
          <li className="ml-4 mt-2">
            <LanguageSwitcher />
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Sidebar;
