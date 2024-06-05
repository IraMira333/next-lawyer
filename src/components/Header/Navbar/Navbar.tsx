"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { MenuButtonBurger } from "../Sidebar/MenuButtonBurger";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Navbar = () => {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  useEffect(() => {
    isHeaderMenuOpened
      ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
      : (document.body.style.overflow = "");
  }, [isHeaderMenuOpened]);
  const locale = useLocale();
  return (
    <>
      <div className="bigmob:hidden">
        <MenuButtonBurger
          isHeaderMenuOpened={isHeaderMenuOpened}
          toggleHeaderMenuOpen={toggleHeaderMenuOpen}
        />
      </div>
      <MobileMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
      <ul className="hidden bigmob:flex gap-3">
        <Menu />
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
