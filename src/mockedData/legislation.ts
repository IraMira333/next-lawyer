export type DataType = {
  id: string;
  link: string;
  categoryName: "citizenship" | "immigration" | "status" | "citizensRights";
};

export type LawDataTranslation = {
  legislationTitle: string;
};

export type LegislationType = {
  data: DataType;
  ua: LawDataTranslation;
  en: LawDataTranslation;
  ru: LawDataTranslation;
};

export const legislationData: LegislationType[] = [
  {
    data: {
      id: "01",
      link: "https://zakon.rada.gov.ua/laws/show/994_004#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle: "Європейська Конвенція про громадянство 1997 року",
    },
    en: {
      legislationTitle: "Європейська Конвенція про громадянство 1997 року",
    },
    ru: {
      legislationTitle: "Європейська Конвенція про громадянство 1997 року",
    },
  },
  {
    data: {
      id: "02",
      link: "https://zakon.rada.gov.ua/laws/show/2235-14#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle: "Закон України «Про громадянство України»",
    },
    en: {
      legislationTitle: "Закон України «Про громадянство України»",
    },
    ru: {
      legislationTitle: "Закон України «Про громадянство України»",
    },
  },
  {
    data: {
      id: "03",
      link: "https://zakon.rada.gov.ua/laws/show/1636-12#Text",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle: "Закон України «Про громадянство України» 1991 рік",
    },
    en: {
      legislationTitle: "Закон України «Про громадянство України» 1991 рік",
    },
    ru: {
      legislationTitle: "Закон України «Про громадянство України» 1991 рік",
    },
  },
  {
    data: {
      id: "04",
      link: "https://zakon.rada.gov.ua/laws/show/2491-14#Text",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle: "Закон України «Про імміграцію»",
    },
    en: {
      legislationTitle: "Закон України «Про імміграцію»",
    },
    ru: {
      legislationTitle: "Закон України «Про імміграцію»",
    },
  },
  {
    data: {
      id: "05",
      link: "https://zakon.rada.gov.ua/laws/show/3773-17#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Закон України «Про правовий статус іноземців та осіб без громадянства»",
    },
    en: {
      legislationTitle:
        "Закон України «Про правовий статус іноземців та осіб без громадянства»",
    },
    ru: {
      legislationTitle:
        "Закон України «Про правовий статус іноземців та осіб без громадянства»",
    },
  },
  {
    data: {
      id: "06",
      link: "https://zakon.rada.gov.ua/laws/show/1382-15#Text",
      categoryName: "citizensRights",
    },
    ua: {
      legislationTitle:
        "Закон України «Про свободу пересування та вільний вибір місця проживання в Україні»",
    },
    en: {
      legislationTitle:
        "Закон України «Про свободу пересування та вільний вибір місця проживання в Україні»",
    },
    ru: {
      legislationTitle:
        "Закон України «Про свободу пересування та вільний вибір місця проживання в Україні»",
    },
  },
];
