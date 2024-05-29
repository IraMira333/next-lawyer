import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className=" flex justify-between items-center gap-3 px-3 py-2 bigmob:py-3 bigmob:px-5 border-b border-[#e1e1e1] shadow-custom">
      <Link href="/">
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
