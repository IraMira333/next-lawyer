import Image from "next/image";
import Link from "next/link";
import Menu from "../Header/Navbar/Menu";
import { IconMail } from "../icons/IconMail";
import { IconMap } from "../icons/IconMap";
import { IconPhone } from "../icons/IconPhone";

const Footer = () => {
  return (
    <footer className=" bg-footer pt-[60px] tab:pt-10 tab:pb-[43px] pb-[65px] border-t border-[#e1e1e1] px-4 flex-[0_0_auto]">
      <Link href="/">
        <Image
          src="/logoFullLight.svg"
          alt="AKLawyer Logo"
          width={520}
          height={80}
          priority
          className="w-[200px] h-auto tab:w-[300px] mx-auto mb-10 pc:mb-8"
        />
      </Link>
      <ul className="flex gap-3 justify-center mb-4 pc:mb-5">
        <Menu className="text-white " />
      </ul>
      <ul className="text-white mb-10 tab:flex tab:gap-4 justify-center pc:mb-[35px] pc:text-base">
        <li className="flex gap-2 items-center mb-2 justify-center">
          <div className="w-6 h-6 flex justify-center items-center">
            <IconMap className="text-white " />
          </div>
          <a href="https://maps.app.goo.gl/6VUmP4aH14mykUke7">
            Україна, Київ вул. Деревлянська, 13
          </a>
        </li>

        <li className="flex gap-2 items-center mb-2 justify-center">
          <div className="w-6 h-6 flex justify-center items-center">
            <IconMail className="text-white " />
          </div>
          <a href="mailto:antonio.kurzwell@gmail.com" className="">
            antonio.kurzwell@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center justify-center">
          <div className="w-6 h-6 flex justify-center items-center">
            <IconPhone className="text-white " />
          </div>
          <a href="tel:+380930324874" className="">
            +38 (093) 032-48-74
          </a>
        </li>
      </ul>
      <p className="text-white text-xs flex justify-center">
        &#169; 2024 Всі права захищені
      </p>
    </footer>
  );
};

export default Footer;
