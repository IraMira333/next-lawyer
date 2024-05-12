import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ua", "en", "ru"],

  // Used when no locale matches
  defaultLocale: "ua",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ua|ru|en)/:path*"],
};
