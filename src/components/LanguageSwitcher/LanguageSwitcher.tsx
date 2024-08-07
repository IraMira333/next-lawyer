"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales } from "@/config";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");

    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-2 tab:gap-3 tab:text-base pc:text-lg font-lora ml-5">
      {locales.map((curLocale) => (
        <li key={curLocale}>
          <Link
            href={redirectedPathName(curLocale)}
            className={
              curLocale === locale
                ? "text-accent hover:text-accent  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                : "text-nav hover:text-accent  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            }
          >
            {curLocale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
