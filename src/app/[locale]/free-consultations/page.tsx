import { InterpolPage } from "@/components/Interpol/InterpolPage";
import { FreeConsultations } from "@/components/ServicesComponents/FreeConsultations";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "FreeConsultatios" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en/free-consultations",
        "ru-RU": "/ru/free-consultations",
        "uk-UA": "/free-consultations",
      },
    },
    title: t("title"),
    description: t("descriptionSite"),
    openGraph: {
      title: t("title"),
      description: t("descriptionSite"),
      type: "website",
    },
  };
}

export default function FreeConsultationsPage() {
  return <FreeConsultations />;
}
