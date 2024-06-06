import { SquareSmall } from "../shared/SquareSmall";

export const AdditionalServices = () => {
  return (
    <section className="bg-accentBg px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        Додаткові послуги
      </h2>
      <p className="leading-[18px] text-center mb-5">
        Також ви можете звернутись до нас, якщо вам необхідно отримати:
      </p>
      <ul className="min-w-[288px] max-w-[500px] mx-auto tab:max-w-[900px] pc:max-w-[1800px]">
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
            Консультацію чи повний правовий супровід з питань імміграції та
            проживання
          </h3>
          <div className="h-[2px] w-full bg-accent -mt-1 tab:w-[90%] "></div>
          <ul className="tab:text-base tab:leading-[21px]  mt-4">
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>
                отримання дозволу на імміграцію в Україну та оформлення посвідки
                на постійне проживання
              </p>
            </li>
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>оформлення посвідки на тимчасове проживання</p>
            </li>
            <li className="flex gap-2 text-start">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>продовження строку перебування </p>
            </li>
          </ul>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
            Консультацію чи повний правовий супровід з питань громадянства
            України
          </h3>
          <div className="h-[2px] w-full bg-accent -mt-1 tab:w-[90%] "></div>
          <ul className="tab:text-base tab:leading-[21px]  mt-4">
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>набуття громадянства України</p>
            </li>
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>
                оформлення документів про вихід з попереднього громадянства чи
                доведення обставин наявності у особи незалежної від неї причини
                неможливості вийти з такого громадянства
              </p>
            </li>
          </ul>
        </li>
        <li className="tab:relative pc:flex pc:gap-4 border border-accent rounded-lg overflow-hidden p-4 mb-4 pc:p-5 pc:mb-5">
          <h3 className="text-base leading-[21px] tab:text-lg font-semibold">
            Консультацію чи правову допомогу у зв'язку з прийняттям рішення
            припинити громадянство України
          </h3>
          <div className="h-[2px] w-full bg-accent -mt-1 tab:w-[90%] "></div>
          <ul className="tab:text-base tab:leading-[21px]  mt-4">
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>вихід з громадянства України</p>
            </li>
            <li className="flex gap-2 text-start mb-2">
              <div className="mt-2">
                <SquareSmall />
              </div>
              <p>втрата громадянства України</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
