export type DataType = {
  id: string;
  link: string;
  categoryName:
    | "citizenship"
    | "immigration"
    | "status"
    | "citizensRights"
    | "entryExit";
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
  {
    data: {
      id: "07",
      link: "https://zakon.rada.gov.ua/laws/show/3857-12#Text",
      categoryName: "citizensRights",
    },
    ua: {
      legislationTitle:
        "Закон України «Про порядок виїзду з України і в'їзду в Україну громадян України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "08",
      link: "https://zakon.rada.gov.ua/laws/show/1710-17#Text",
      categoryName: "entryExit",
    },
    ua: {
      legislationTitle: "Закон України «Про прикордонний контроль» ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "09",
      link: "https://zakon.rada.gov.ua/laws/show/3671-17#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Закон України «Про біженців та осіб, які потребують додаткового або тимчасового захисту»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "10",
      link: "https://zakon.rada.gov.ua/laws/show/2947-14#Text",
      categoryName: "citizensRights",
    },
    ua: {
      legislationTitle: "Сімейний кодекс України ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "11",
      link: "https://zakon.rada.gov.ua/laws/show/215/2001#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Указ Президента України «Порядок провадження за заявами і поданнями з питань громадянства України та виконання прийнятих рішень» ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "12",
      link: "https://zakon.rada.gov.ua/laws/show/5067-17#Text",
      categoryName: "citizensRights",
    },
    ua: {
      legislationTitle: "Закон України «Про зайнятість населення»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "13",
      link: "https://zakon.rada.gov.ua/laws/show/302-2015-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Про затвердження порядку оформлення, видачі, обміну, пересилання, вилучення, повернення державі, визнання недійсним та знищення паспорта громадянина України» ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "14",
      link: "https://zakon.rada.gov.ua/laws/show/265-2022-%D0%BF#n426",
      categoryName: "citizensRights",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок декларування та реєстрації місця проживання (перебування)»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "15",
      link: "https://zakon.rada.gov.ua/laws/show/322-2018-%D0%BF#Text",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, скасування, пересилання, вилучення, повернення державі, визнання недійсною та знищення посвідки на тимчасове проживання»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "16",
      link: "https://zakon.rada.gov.ua/laws/show/321-2018-%D0%BF#Text",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, скасування, пересилання, вилучення, повернення державі, визнання недійсною та знищення посвідки на постійне проживання»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "17",
      link: "https://zakon.rada.gov.ua/laws/show/1983-2002-%D0%BF#n34",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок провадження за заявами про надання дозволу на імміграцію і поданнями про його скасування та виконання прийнятих рішень»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "18",
      link: "https://zakon.rada.gov.ua/laws/show/118-2017-%D0%BF#Text",
      categoryName: "entryExit",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Правила оформлення віз для в’їзду в Україну і транзитного проїзду через її територію»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "19",
      link: "https://zakon.rada.gov.ua/laws/show/152-2014-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення, видачі, обміну, пересилання, вилучення, повернення державі, визнання недійсним та знищення паспорта громадянина України для виїзду за кордон»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "20",
      link: "https://zakon.rada.gov.ua/laws/show/1111-2003-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Правила оформлення і видачі тимчасового посвідчення громадянина України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "21",
      link: "https://zakon.rada.gov.ua/laws/show/150-2012-%D0%BF#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок продовження строку перебування та тимчасового проживання, продовження та скорочення строку тимчасового перебування іноземців та осіб без громадянства на території України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "22",
      link: "https://zakon.rada.gov.ua/laws/show/57-95-%D0%BF#Text",
      categoryName: "entryExit",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Правила перетинання державного кордону громадянами України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "23",
      link: "https://zakon.rada.gov.ua/laws/show/884-2013-%D0%BF#Text",
      categoryName: "entryExit",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок підтвердження достатнього фінансового забезпечення іноземців та осіб без громадянства для в’їзду в Україну, перебування на території України, транзитного проїзду через територію України і виїзду за її межі та визначення розміру такого забезпечення»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "24",
      link: "https://zakon.rada.gov.ua/laws/show/68-2023-%D0%BF#n57",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Про затвердження технічного опису, зразка бланка, форм заяв для отримання, внесення змін та продовження строку дії дозволу на застосування праці іноземців та осіб без громадянства в Україні»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "25",
      link: "https://zakon.rada.gov.ua/laws/show/285-2017-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок оформлення та видачі посвідчення особи на повернення в Україну»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "26",
      link: "https://zakon.rada.gov.ua/laws/show/317-2021-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок розгляду заяв про визнання особою без громадянства»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "27",
      link: "https://zakon.rada.gov.ua/laws/show/85-2020-%D0%BF#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «Порядок ведення обліку громадян України, які проживають за межами України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "28",
      link: "https://zakon.rada.gov.ua/laws/show/2503-12#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Постанова ВРУ «Положення про паспорт громадянина України» ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "29",
      link: "https://zakon.rada.gov.ua/laws/show/z1549-12#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «Про затвердження зразків документів, які подаються для встановлення належності до громадянства України, прийняття до громадянства України, оформлення набуття громадянства України, припинення громадянства України, скасування рішень про оформлення набуття громадянства України, та журналів обліку»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "30",
      link: "https://zakon.rada.gov.ua/laws/show/z0806-12#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «Інструкція про примусове повернення і примусове видворення з України іноземців та осіб без громадянства»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "31",
      link: "https://zakon.rada.gov.ua/laws/show/z1432-17#Text",
      categoryName: "immigration",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «Про затвердження Вимог до організації роботи з оформлення віз для в’їзду в Україну і транзитного проїзду через її територію 30.10.2017»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "32",
      link: "https://zakon.rada.gov.ua/laws/show/z1083-12#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ ДПСУ «Інструкція з організації здійснення перевірки документів громадян України, іноземців та осіб без громадянства, які перетинають державний кордон» ",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "33",
      link: "https://zakon.rada.gov.ua/laws/show/z0006-20#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ ДПСУ «Інструкція про порядок прийняття органами охорони державного кордону Державної прикордонної служби України рішень про заборону в’їзду в Україну іноземцям та особам без громадянства»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "34",
      link: "https://zakon.rada.gov.ua/laws/show/z1241-16#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «Про затвердження Порядку провадження за заявами про оформлення документів для виїзду громадян України за кордон на постійне проживання»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "35",
      link: "https://zakon.rada.gov.ua/laws/show/z0944-15#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «Про затвердження порядку обчислення строку тимчасового перебування в Україні іноземців, які є громадянами держав з безвізовим порядком в’їзду»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "36",
      link: "https://zakon.rada.gov.ua/laws/show/z0620-19#Text",
      categoryName: "citizenship",
    },
    ua: {
      legislationTitle:
        "Наказ МВС України «ТИМЧАСОВИЙ ПОРЯДОК оформлення і видачі паспорта громадянина України»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "37",
      link: "https://zakon.rada.gov.ua/laws/show/280-2013-п#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Постанова КМУ «ПОРЯДОК надання Державній прикордонній службі та виконання нею доручень уповноважених державних органів щодо осіб, які перетинають державний кордон»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "38",
      link: "https://zakon.rada.gov.ua/laws/show/z1091-17#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ МВС «Про затвердження Порядку дій уповноважених службових осіб Державної прикордонної служби України в разі виявлення в пунктах пропуску через державний кордон України та контрольних пунктах в’їзду на тимчасово окуповану територію України та виїзду з неї осіб, стосовно яких надано доручення, та порядку взаємодії органів охорони державного кордону з уповноваженими державними органами, які надали доручення»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "39",
      link: "https://zakon.rada.gov.ua/laws/show/z0869-18#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ МВС «Порядок проведення підрозділами органів охорони державного кордону Державної прикордонної служби України процедури здійснення контролю другої лінії іноземців та осіб без громадянства під час в’їзду в Україну»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
  {
    data: {
      id: "40",
      link: "https://zakon.rada.gov.ua/laws/show/z1146-11#Text",
      categoryName: "status",
    },
    ua: {
      legislationTitle:
        "Наказ МВС «Правила розгляду заяв та оформлення документів, необхідних для вирішення питання про визнання біженцем або особою, яка потребує додаткового захисту, втрату і позбавлення статусу біженця та додаткового захисту і скасування рішення про визнання особи біженцем або особою, яка потребує додаткового захисту»",
    },
    en: {
      legislationTitle: "",
    },
    ru: {
      legislationTitle: "",
    },
  },
];
