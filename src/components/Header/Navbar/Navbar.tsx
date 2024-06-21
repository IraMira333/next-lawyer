"use client";
import { useState, useEffect } from "react";
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
  return (
    <>
      <div className="tab:hidden">
        <MenuButtonBurger
          isHeaderMenuOpened={isHeaderMenuOpened}
          toggleHeaderMenuOpen={toggleHeaderMenuOpen}
        />
      </div>
      <MobileMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
      <ul className="hidden tab:flex gap-3 tab:gap-4 pc:gap-5">
        <Menu className="text-nav" />
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
