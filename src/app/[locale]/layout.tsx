import { Lora, Raleway, Roboto_Slab } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { getTranslations } from "next-intl/server";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-raleway",
  display: "swap",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-robotoSlab",
  display: "swap",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Site" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en",
        "ru-RU": "/ru",
        "uk-UA": "/uk",
      },
    },
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html
      lang={locale}
      className={`${lora.variable} ${raleway.variable} ${robotoSlab.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="image" property="og:image" content="/imageForSharing.jpg" />
        <meta name="twitter:image" content="/imageForSharing.jpg" />
        <meta name="robots" content="index, follow" />
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <div className="flex flex-col min-h-[100%]">
            <Header />

            <main className="flex-[1_0_auto]">
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
