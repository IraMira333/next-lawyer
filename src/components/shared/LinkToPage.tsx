import { Link } from "@/i18n/navigation";
import { IconArrow } from "../icons/IconArrow";

export const LinkToPage = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link
      aria-label="go to ditails page"
      href={link}
      className={`flex w-fit gap-[13px] font-lora font-semibold text-formLight py-3 tab:text-base pc:text-lg leading-6 px-6  border-[2px]  rounded items-center mx-auto mt-4 tab:m-0 whitespace-pre
                  hover:bg-accentGradient hover:border-accent hover:text-white group transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                 `}
    >
      {name}
      <IconArrow className="text-accent group-hover:text-white" />
    </Link>
  );
};
