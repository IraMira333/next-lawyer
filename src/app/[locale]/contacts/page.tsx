import Contacts from "@/components/Contacts/Contacts";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Contacts" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: `/${locale}/contacts`,
      languages: {
        en: "/en/contacts",
        ru: "/ru/contacts",
        ua: "/ua/contacts",
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

export default function ContactsPage() {
  return <Contacts />;
}
