import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

export const FloatComponent = ({
  text,
  alt,
  src,
  textLink,
}: {
  text: string[];
  alt: string;
  src: string;
  textLink: string;
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={625}
        height={381}
        className="float-left mr-3 mb-2 h-auto w-[40%] max-w-[400px]"
      />
      {text.map((paragraph, index) => (
        <p key={index} className="mb-2">
          {paragraph}
        </p>
      ))}
      <div className="text-right -mt-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold text-right inline-flex items-center gap-1 hover:text-accent focus:text-accent active:text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          href="https://citizenship.gov.ua/reyestracziya/"
        >
          {textLink}
          <LuExternalLink />
        </a>
      </div>
    </div>
  );
};
