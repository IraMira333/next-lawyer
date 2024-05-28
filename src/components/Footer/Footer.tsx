import { GoogleMapsEmbed } from "@next/third-parties/google";

const Footer = () => {
  return (
    <footer className="bg-accentBg border-t border-[#e1e1e1] p-4 flex-[0_0_auto]">
      <div>
        <h5 className="font-lora text-xl font-medium">
          <span className="text-accent mr-2">Антоній Курц</span>Адвокатське Бюро
        </h5>
        <p> Україна, Київ вул. Деревлянська, 13</p>
        <ul className="">
          <li className="">
            <a href="tel:+380930324874" className="">
              +38 (093) 032-48-74
            </a>
          </li>
          <li className="">
            <a href="mailto:antonio.kurzwell@gmail.com" className="">
              antonio.kurzwell@gmail.com
            </a>
          </li>
        </ul>
        <GoogleMapsEmbed
          apiKey="AIzaSyAIa77Mdd2R_4EgZJoZrTMg5u56WDlf-hM"
          height={200}
          width="100%"
          mode="place"
          q="вулиця+Деревлянська,+13,+Київ,+04119"
        />
      </div>
    </footer>
  );
};

export default Footer;
