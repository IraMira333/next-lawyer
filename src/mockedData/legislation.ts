export type legislationType = {
  id: string;
  legislationTitle: string;
  link: string;
  category: string;
};
const generateId = (): string => {
  return "_" + Math.random().toString(36).substring(2, 9);
};

export const legislationData: legislationType[] = [
  {
    id: generateId(),
    legislationTitle: "Європейська Конвенція про громадянство 1997 року",
    link: "https://zakon.rada.gov.ua/laws/show/994_004#Text",
    category: "Громадянство",
  },
  {
    id: generateId(),
    legislationTitle: "Закон України «Про громадянство України»",
    link: "https://zakon.rada.gov.ua/laws/show/2235-14#Text",
    category: "Громадянство",
  },
  {
    id: generateId(),
    legislationTitle: "Закон України «Про громадянство України» 1991 рік",
    link: "https://zakon.rada.gov.ua/laws/show/1636-12#Text",
    category: "Імміграція",
  },
  {
    id: generateId(),
    legislationTitle: "Закон України «Про імміграцію»",
    link: "https://zakon.rada.gov.ua/laws/show/2491-14#Text",
    category: "Імміграція",
  },
  {
    id: generateId(),
    legislationTitle:
      "Закон України «Про правовий статус іноземців та осіб без громадянства»",
    link: "https://zakon.rada.gov.ua/laws/show/3773-17#Text",
    category: "Правовий статус іноземців",
  },
  {
    id: generateId(),
    legislationTitle:
      "Закон України «Про свободу пересування та вільний вибір місця проживання в Україні»",
    link: "https://zakon.rada.gov.ua/laws/show/1382-15#Text",
    category: "Права громадян",
  },
];
