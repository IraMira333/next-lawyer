import AccessibilityPage from "@/components/Accessibility/AccessibilityPage";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Accessibility" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: `/${locale}/accessibility`,
      languages: {
        en: "/en/accessibility",
        ru: "/ru/accessibility",
        ua: "/ua/accessibility",
      },
    },
    title: t("sectionTitle1"),
    description: t("description2"),
    openGraph: {
      title: t("sectionTitle1"),
      description: t("description2"),
      type: "website",
    },
  };
}

export default function Accessibility() {
  return <AccessibilityPage />;
}
