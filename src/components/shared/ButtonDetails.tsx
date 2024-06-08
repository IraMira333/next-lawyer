import { IconArrow } from "../icons/IconArrow";

export const ButtonDetails = ({ url, text }: { url: string; text: string }) => {
  return (
    <a href={url} className="">
      <button
        aria-label="details button"
        type="button"
        className="flex gap-[13px] font-lora text-lg leading-6 px-4 py-2 border border-nav rounded items-center
        hover:bg-accentGradient hover:border-accent hover:text-white group"
      >
        {text} <IconArrow className="text-accent group-hover:text-white" />
      </button>
    </a>
  );
};
