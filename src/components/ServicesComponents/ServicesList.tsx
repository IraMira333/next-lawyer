import Image from "next/image";
import { SquareSmall } from "../shared/SquareSmall";
import { useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";

export const ServicesList = () => {
  const t = useTranslations("Home");

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        Ми допомогаємо
      </h2>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px] tab:relative">
          <div
            id="solutions01"
            className="max-w-[338px] mx-auto rounded tab:rounded-none overflow-hidden tab:ml-0 
            tab:min-w-[169px] tab:max-w-[23%] pc:min-w-[391px] pc:max-w-[391px] pc:mr-[55px] mb-2 "
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
              alt="picture"
              width={1000}
              height={1500}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              01
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              {t("whomBox1Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li1")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li2")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li3")}</p>
              </li>
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li4")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>{t("whomBox1Li5")}</p>
              </li>
            </ul>
            <p className="mb-4 tab:text-base">
              На протязі років, в галузі державного управління змінилось багато
              що, але явища не ефективності чиновницьких рішень і бюрократії,
              виконання безглуздих вказівок керівництва є сталими.
            </p>
            <p className="mb-4 tab:text-base">
              Як правило, керівники державних територіальних органів і
              підрозділів міграційної служби України не розуміють викладені у
              заявах аргументовані доводи та пояснення. Їм байдуже щодо тяжкості
              наслідків, що настають для окремої людини за результатом прийнятих
              ними необгрунтованих рішень. Єдиним доводом у суперечці було та
              залишається рішення суду, яким встановлено їх протиправну
              поведінку з перспективою подальшої персональної відповідальності.
            </p>
            <p className="mb-4 tab:text-base">
              На даний час, в нашому адвокатському архіві десятки судових рішень
              з різних питань, якими було визнано протиправними рішення
              посадових осіб ДМС України та зобов'язано вчинити визначені судом
              дії спрямовані на поновлення прав осіб за захистом яких ми
              звертались.
            </p>
            <p className="tab:text-base">
              Ми володіємо актуальною судовою практикою в галузі міграційного
              права і постійно вдосконалюємо її.
            </p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                01
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
        <li className="tab:relative tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px]">
          <div
            id="solutions02"
            className="max-w-[338px] mx-auto rounded tab:rounded-none overflow-hidden 
            tab:min-w-[169px] tab:max-w-[23%] tab:ml-0 pc:min-w-[391px] pc:max-w-[391px] mb-2 pc:mb-[80px] pc:ml-[55px]"
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
              alt="picture"
              width={3584}
              height={5376}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              02
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold mb-3">
              Особам, які потребують захисника в зв’язку з притягненням до
              адміністративної відповідальності за порушення міграційного
              законодавства
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start mb-2">
                <div className="mt-2">
                  <SquareSmall />
                </div>
                <p>
                  Для осіб, які притягуються до відповідальності за ст.ст. 202,
                  203, 203(1), 204, 204(1), 205, 206(1) Кодексу України про
                  адміністративні правопорушення.
                </p>
              </li>
            </ul>

            <p className="mb-4 tab:text-base">
              Так, порушення законодавства трапляється. Наслідки, на перший
              погляд, незначних порушень у сфері міграційного законодавства,
              крім штрафу, в подальшому можуть призвести до суттєвих життєвих
              незручностей чи стати на заваді реалізації ваших прав.
            </p>
            <p className="tab:text-base">
              Якщо вас було викликано для складання протоколу про
              адміністративне правопорушення чи затримано працівниками
              правоохоронних органів на вулиці, за першої можливості зв'яжіться
              з нами за телефоном{" "}
              <span>
                <a
                  href="tel:+380930324874"
                  className=" cursor-pointer text-accent font-semibold"
                >
                  +38 (093) 032-48-74
                </a>
              </span>
            </p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                02
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
        <li className="tab:relative tab:flex tab:gap-4 pc:gap-[62px] tab:mb-10 pc:mb-[60px]">
          <div
            id="solutions03"
            className="max-w-[338px] mx-auto pc:mx-0 rounded tab:rounded-none overflow-hidden 
            tab:min-w-[169px] tab:max-w-[23%] tab:ml-0 pc:min-w-[391px] pc:max-w-[391px] mb-2 pc:mr-[55px]"
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
              alt="picture"
              width={1250}
              height={827}
              className="aspect-[256/194] tab:aspect-[169/235] pc:aspect-[391/543] flex object-cover "
            />
          </div>
          <div className="flex tab:hidden">
            <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
              03
            </span>
          </div>
          <div>
            <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
              {t("whomBox3Title")}
            </h3>
            <ul className="mb-4 tab:text-base tab:leading-[21px]">
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li1")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li2")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li3")}</p>
              </li>
              <li className="flex gap-2 text-start">
                <div className="mt-2">
                  <SquareSmall />
                </div>{" "}
                <p>{t("whomBox3Li4")}</p>
              </li>
            </ul>

            <p className="tab:text-base">
              Разом з вами визначимо підстави для звернення, підготуємо
              необхідні документи, а також надамо супровід для особистої подачі
              до територіального органу (підрозділу) міграційної служби. Можливо
              тільки здогадуватись, чому за присутності поруч з клієнтом
              досвідченого адвоката, трапляється мінімальна кількість відмов чи
              неприємних несподіванок.
            </p>
          </div>
          <div className="tab:flex tab:flex-col tab:justify-between">
            <div className="hidden tab:flex ">
              <span className="font-lora text-accent text-[40px] leading-[48px] ml-auto">
                03
              </span>
            </div>
            <div className="flex justify-end tab:absolute tab:right-0 bottom-0 mb-10 tab:m-0">
              <SquareBig />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
