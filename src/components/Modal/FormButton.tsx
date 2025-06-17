import { IconArrow } from "../icons/IconArrow";

export const FormButton = ({
  text,
  onClick,
  send,
  disabled,
}: {
  text: string;
  onClick?: () => void;
  send?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      aria-label="form button"
      type={send ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
      className={` ${
        send ? "text-formLight border-accent" : "border-nav"
      } flex gap-[13px] font-lora font-semibold text-lg leading-6 px-6 py-4 border-[2px]  rounded items-center mx-auto mt-4 tab:m-0 whitespace-pre
                  hover:bg-accentGradient hover:border-accent hover:text-white group transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${
                    disabled
                      ? "cursor-not-allowed pointer-events-none opacity-60"
                      : ""
                  }`}
    >
      {text}
      <IconArrow className="text-accent group-hover:text-white" />
    </button>
  );
};
