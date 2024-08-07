import { LocalePrefix } from "next-intl/routing";
export const defaultLocale = "uk" as const;
export const locales = ["en", "ru", "uk"] as const;

export const localePrefix = "as-needed" satisfies LocalePrefix;
