export type DataChangesType = {
  id: string;
  link: string;
};

export type LawChangesDataTranslation = {
  legislationTitle: string;
};

export type LegislationChangesType = {
  data: DataChangesType;
  uk: LawChangesDataTranslation;
  en: LawChangesDataTranslation;
  ru: LawChangesDataTranslation;
};

export const legislationChangesData: LegislationChangesType[] = [
  {
    data: {
      id: "01",
      link: "https://zakon.rada.gov.ua/laws/show/3897-20#n111",
    },
    uk: {
      legislationTitle:
        "Подання та розгляд вже поданих заяв громадян Російської Федерації, стосовно набуття громадянства України, зупиняється до спливу 12 місяців з дня припинення чи скасування воєнного стану в Україні.",
    },
    en: {
      legislationTitle:
        "The submission and consideration of already submitted applications of citizens of the Russian Federation regarding the acquisition of Ukrainian citizenship shall be suspended until the expiration of 12 months from the date of termination or cancellation of martial law in Ukraine.",
    },
    ru: {
      legislationTitle:
        "Подача та рассмотрение уже поданных заявлений граждан Российской Федерации относительно приобретения гражданства Украины приостанавливается на срок до 12 месяцев со дня прекращения или отмены военного положения в Украине.",
    },
  },
];
