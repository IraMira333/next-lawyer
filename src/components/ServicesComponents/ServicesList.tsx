import Image from "next/image";
import { SquareSmall } from "../shared/SquareSmall";
import { useTranslations } from "next-intl";
import { SquareBig } from "../shared/SquareBig";

export const ServicesList = () => {
  const t = useTranslations("Home");

  return (
    <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        Я допомагаю
      </h2>
      <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
          alt="picture"
          width={1000}
          height={1500}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
      <div className="flex ">
        <span className="font-lora text-accent text-[26px] leading-8 ml-auto">
          01
        </span>
      </div>
      <div>
        <h3 className="text-base leading-[21px] tab:text-lg font-semibold my-4">
          {t("whomBox1Title")}
        </h3>
        <ul className="mb-4 tab:text-base tab:leading-[21px]">
          <li className="flex gap-2 text-start">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("whomBox1Li1")}</p>
          </li>
          <li className="flex gap-2 text-start">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("whomBox1Li2")}</p>
          </li>
          <li className="flex gap-2 text-start">
            <div className="mt-2">
              <SquareSmall />
            </div>
            <p>{t("whomBox1Li3")}</p>
          </li>
          <li className="flex gap-2 text-start">
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
      </div>
      <div>
        <p>
          На протязі років, в галузі державного управління змінилось багато що,
          але явища не ефективності чиновницьких рішень і бюрократії, виконання
          безглуздих вказівок керівництва  є сталими.
        </p>
        <p>
          Як правило, керівники державних територіальних органів і підрозділів
          міграційної служби України не розуміють викладені у заявах
          аргументовані  доводи та пояснення. Їм байдуже щодо тяжкості
          наслідків, що настають для окремої людини за результатом прийнятих
          ними необгрунтованих рішень. Єдиним доводом у суперечці  було та
          залишається рішення суду, яким встановлено їх протиправну поведінку з
          перспективою подальшої персональної відповідальності.
        </p>
      </div>
      <div className="flex justify-end tab:items-end ">
        <SquareBig />
      </div>
      <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
          alt="picture"
          width={3584}
          height={5376}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
      <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
          alt="picture"
          width={1250}
          height={827}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
    </section>
  );
};
