import { IconMail } from "../icons/IconMail";
import { IconPhone } from "../icons/IconPhone";

export const PhoneEmail = () => {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2 mb-3 pc:mb-4 hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="w-6 h-6 flex justify-center items-center">
          <IconPhone className=" " />
        </div>
        <a href="tel:+380930324874" className="font-lora">
          +38 (093) 032-48-74
        </a>
      </div>
      <div className="flex gap-2 mb-4 pc:mb-[30px]  hover:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="w-6 h-6 flex justify-center items-center">
          <IconMail className=" " />
        </div>
        <a href="mailto:antonio.kurzwell@gmail.com" className="">
          antonio.kurzwell@gmail.com
        </a>
      </div>
    </div>
  );
};
