"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between gap-2 px-3 py-2 bigmob:py-3 border-b border-[#e1e1e1]">
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
        {isOpen && <Sidebar toggle={toggle} />}
        <Navbar toggle={toggle} />
      </nav>
    </header>
  );
};

export default Header;
