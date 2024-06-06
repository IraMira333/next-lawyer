import Image from "next/image";

export const HeroServices = () => {
  return (
    <section className="relative bg-[#3333337f] h-[100px] w-full flex">
      <Image
        src="https://drive.google.com/uc?export=view&id=1aKWhqUuMFl87qiGqPNXpCy5u5Tm4bBcg"
        alt="Top view over career guidance items for judges"
        width={1024}
        height={662}
        priority
        className="absolute top-0 left-0 h-[100px] object-cover z-[-1]"
      />
      <h2 className="font-lora text-3xl text-light font-semibold ml-4 my-auto">
        Наші послуги
      </h2>
    </section>
  );
};
