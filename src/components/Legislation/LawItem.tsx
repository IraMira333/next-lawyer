import { legislationType } from "@/mockedData/legislation";
import Link from "next/link";
import { SquareSmall } from "../shared/SquareSmall";

export const LawItem = ({ item }: { item: legislationType }) => {
  return (
    <>
      <div className="mt-2">
        <SquareSmall />
      </div>
      <Link href={item.link}></Link>;
    </>
  );
};
