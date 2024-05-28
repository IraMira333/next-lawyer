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
    <header className="flex justify-around p-[10px] border-b border-[#e1e1e1]">
      <Link href="/">
        <Image
          src="/fullLogoAKLawyer2.png"
          alt="AKLawyer Logo"
          width={200}
          height={60}
          priority
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
