import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AiOutlineSend } from "react-icons/ai";

const Menu = ({
  className,
  classNameIcon,
  onClick,
}: {
  className: string;
  classNameIcon?: string;
  onClick?: () => void;
}) => {
  const t = useTranslations("Menu");
  const navTextStyle =
    "font-lora font-medium tab:text-base pc:text-lg cursor-pointer hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] uppercase";
  const menuList = [
    { title: t("interpol"), path: "/interpol" },
    { title: t("services"), path: "/services" },
    { title: t("legislation"), path: "/legislation" },
    { title: t("contacts"), path: "/contacts" },
  ];
  return (
    <>
      {menuList.map((item) => (
        <li key={item.title} className="mt-2 tab:mt-0 flex items-center">
          <div className={`tab:hidden ${classNameIcon}`}>
            <AiOutlineSend size={12} color="orange" />
          </div>
          <Link
            className={`${navTextStyle} ${className}`}
            href={item.path}
            onClick={onClick}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
