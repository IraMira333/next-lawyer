import { LocalePrefix } from "next-intl/routing";
export const defaultLocale = "ua" as const;
export const locales = ["en", "ru", "ua"] as const;

export const localePrefix = "as-needed" satisfies LocalePrefix;