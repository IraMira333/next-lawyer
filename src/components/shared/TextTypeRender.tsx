import Image from "next/image";
import { TextSegment, TextType } from "../assets/freeConsultationsList";
import { SquareSmall } from "./SquareSmall";

export const TextTypeRender = ({ data }: { data: TextType[] }) => {
  const renderTextSegment = (text: string | TextSegment[]) => {
    if (typeof text === "string") return text;
    return text.map((segment, i) => {
      const { value, bold, subtitle } = segment;
      if (bold && subtitle) {
        return (
          <span key={i} className="font-semibold uppercase">
            {value}
          </span>
        );
      }
      if (bold) {
        return (
          <span key={i} className="font-semibold">
            {value}
          </span>
        );
      }
      if (subtitle) {
        return (
          <span key={i} className="uppercase">
            {value}
          </span>
        );
      }
      return <span key={i}>{value}</span>;
    });
  };

  return (
    <>
      {data.map((block, i) => {
        if (block.type === "text") {
          return (
            <p
              key={i}
              className={`text-sm tab:text-base tab:leading-[21px] ${
                block.gap ? "pc:mb-4 mb-2" : ""
              }`}
            >
              {renderTextSegment(block.text)}
            </p>
          );
        }

        if (block.type === "list") {
          if (block.numeric) {
            return (
              <ol
                key={i}
                className={`list-decimal pl-6 ${block.gap ? "pc:mb-4 mb-2" : ""}`}
              >
                {block.list.map((item, j) => (
                  <li
                    key={j}
                    className="mb-2 marker:text-accent text-sm tab:text-base tab:leading-[21px]"
                  >
                    {renderTextSegment(item)}
                  </li>
                ))}
              </ol>
            );
          }

          return (
            <ul key={i} className={`${block.gap ? "pc:mb-4 mb-2" : ""}`}>
              {block.list.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-start mb-2 text-sm tab:text-base tab:leading-[21px]"
                >
                  <div className="mt-2 shrink-0">
                    <SquareSmall />
                  </div>

                  <div className="flex-1">{renderTextSegment(item)}</div>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <div
              key={block.image}
              className={`mb-4 flex w-full justify-center overflow-hidden ${block.maxH ? block.maxH : "pc:max-h-[500px] max-h-[200px]"}`}
            >
              <Image
                src={block.image}
                alt={`content image ${i}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          );
        }
        if (block.type === "component") {
          return (
            <div key={`component-${i}`} className={block.gap ? "pc:mb-4 mb-2" : ""}>
              {block.component}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};
