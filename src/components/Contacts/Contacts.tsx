import { GoogleMapsEmbed } from "@next/third-parties/google";
import { IconMap } from "../icons/IconMap";
import { IconMail } from "../icons/IconMail";
import { IconPhone } from "../icons/IconPhone";
import Image from "next/image";
import { useTranslations } from "next-intl";

const KEY = process.env.NEXT_PUBLIC_MAPAPIKEY;

const Contacts = () => {
  const t = useTranslations("Contacts");

  return (
    <div className="relative  w-full">
      <div>
        <Image
          src="https://drive.google.com/uc?export=view&id=13gvMy9nsHl8dGy9myy3PJ_ojrwSiYhtU"
          alt="A picture with a statuette of the goddess of justice"
          width={6240}
          height={4160}
          className=" w-full h-full tab:h-[74vh] tab:min-h-[820px] pc:min-h-[964px] object-cover "
          priority
        />
      </div>
      <div
        className="tab:absolute bg-primary top-8 left-5  pc:left-[38px] py-10 px-4 tab:p-5 tab:rounded-lg 
      tab:min-w-[364px] pc:min-w-[634px] tab:w-[48%] pc:w-[46%] pc:py-10 "
      >
        <h2 className="font-lora text-[28px] tab:text-3xl leading-8 font-medium uppercase text-accent text-center mb-4 pc:mb-[30px] pc:text-[40px]">
          {t("title")}
        </h2>

        <ul className="">
          <li className="flex gap-2 mb-3 pc:mb-4 pc:justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-6 h-6 flex justify-center items-center">
              <IconMap className="" />
            </div>
            <a href="https://maps.app.goo.gl/6VUmP4aH14mykUke7">
              {t("address1")}
            </a>
          </li>

          <li className="flex gap-2 mb-3 pc:mb-4 pc:justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-6 h-6 flex justify-center items-center">
              <IconPhone className=" " />
            </div>
            <a href="tel:+380930324874" className="">
              +38 (093) 032-48-74
            </a>
          </li>
          <li className="flex gap-2 mb-4 pc:mb-[30px] pc:justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-6 h-6 flex justify-center items-center">
              <IconMail className=" " />
            </div>
            <a href="mailto:antonio.kurzwell@gmail.com" className="">
              antonio.kurzwell@gmail.com
            </a>
          </li>
        </ul>
        {KEY && (
          <>
            <div className="tab:hidden">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={225}
                width="100%"
                mode="place"
                q="вулиця+Деревлянська,+13,+Київ,+04119"
              />
            </div>
            <div className="hidden tab:block pc:hidden">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={176}
                width="100%"
                mode="place"
                q="вулиця+Деревлянська,+13,+Київ,+04119"
              />
            </div>
            <div className="hidden pc:block">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={249}
                width="100%"
                mode="place"
                q="вулиця+Деревлянська,+13,+Київ,+04119"
              />
            </div>
          </>
        )}
        <div className="h-[2px] w-full bg-accent mt-3"></div>

        <ul className="mt-7">
          <li className="flex gap-2 mb-3 pc:mb-4 pc:justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-6 h-6 flex justify-center items-center">
              <IconMap className="" />
            </div>
            <a href="https://maps.app.goo.gl/fMhmHsBRRLKgFh7v9">
              {t("address2")}
            </a>
          </li>
          <li className="flex gap-2 mb-3 pc:mb-4 pc:justify-center hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-6 h-6 flex justify-center items-center">
              <IconPhone className=" " />
            </div>
            <a href="tel:+380633650465" className="">
              +38 (063) 365-04-65
            </a>
          </li>
        </ul>
        {KEY && (
          <>
            <div className="tab:hidden">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={225}
                width="100%"
                mode="place"
                q="Viacheslava+Chornovola+St,+27,+Kyiv,+02000"
              />
            </div>
            <div className="hidden tab:block pc:hidden">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={176}
                width="100%"
                mode="place"
                q="Viacheslava+Chornovola+St,+27,+Kyiv,+02000"
              />
            </div>
            <div className="hidden pc:block">
              <GoogleMapsEmbed
                apiKey={KEY}
                height={249}
                width="100%"
                mode="place"
                q="Viacheslava+Chornovola+St,+27,+Kyiv,+02000"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contacts;
