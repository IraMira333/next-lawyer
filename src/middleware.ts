import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "./config";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
