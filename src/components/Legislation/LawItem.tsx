import { legislationType } from "@/mockedData/legislation";
import { SquareSmall } from "../shared/SquareSmall";

export const LawItem = ({ item }: { item: legislationType }) => {
  return (
    <>
      <div className="mt-2">
        <SquareSmall />
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        href={item.link}
      >
        {item.legislationTitle}
      </a>
    </>
  );
};
