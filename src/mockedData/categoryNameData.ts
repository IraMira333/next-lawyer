export type СategoryNamesProp = {
  categoryName: string;
  ua: string;
  ru: string;
  en: string;
};

export const categoryNames: СategoryNamesProp[] = [
  {
    categoryName: "all",
    ua: "Всі категорії",
    ru: "Все категории",
    en: "All categories",
  },
  {
    categoryName: "citizenship",
    ua: "Громадянство",
    ru: "Гражданство",
    en: "Citizenship",
  },
  {
    categoryName: "immigration",
    ua: "Імміграція",
    ru: "Иммиграция",
    en: "Immigration",
  },
  {
    categoryName: "status",
    ua: "Правовий статус іноземців",
    ru: "Правовий статус іноземців",
    en: "Legal status of foreigners",
  },
  {
    categoryName: "citizensRights",
    ua: "Права громадян",
    ru: "Права граждан",
    en: "Citizens' rights",
  },
  {
    categoryName: "entryExit",
    ua: "В'їзд та виїзд з України",
    ru: "Въезд и выезд из Украины",
    en: "Entry and exit from Ukraine",
  },
];
