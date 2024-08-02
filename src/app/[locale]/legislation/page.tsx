import { Legislation } from "@/components/Legislation/Legislation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Legislation" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: `/${locale}/legislation`,
      languages: {
        en: "/en/legislation",
        ru: "/ru/legislation",
        ua: "/ua/legislation",
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

export default function LegislationPage() {
  return <Legislation />;
}
