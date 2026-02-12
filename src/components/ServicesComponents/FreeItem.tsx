import { BlockType } from "../assets/freeConsultationsList";
import { TextTypeRender } from "../shared/TextTypeRender";

export const FreeItem = ({ item }: { item: BlockType[] }) => {
  return (
    <div className="tab:border-l tab:border-accent tab:pl-2 mb-4 pc:pl-4 text-sm tab:text-base tab:leading-[21px]">
      {item.map((block, i) => (
        <div key={i}>
          {block.title && (
            <h3 className="text-sm tab:text-base leading-[21px] pc:text-lg font-semibold mb-3">
              {block.title}
            </h3>
          )}

          {block.text && <TextTypeRender data={block.text} />}
        </div>
      ))}
    </div>
  );
};
