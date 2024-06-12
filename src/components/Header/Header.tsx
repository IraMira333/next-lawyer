import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import { useLocale } from "next-intl";

const Header = () => {
  const locale = useLocale();

  return (
    <header className=" flex justify-between items-center gap-3 px-4 py-[17px] tab:px-5 tab:py-4 pc:px-10 border-b border-[#e1e1e1]">
      <Link href={`/${locale}`}>
        <Image
          src="/logoFullDark.svg"
          alt="AKLawyer Logo"
          width={520}
          height={80}
          priority
          className="w-[200px] h-auto tab:w-[300px]"
        />
      </Link>

      <nav className="flex justify-end items-center text-nav">
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
