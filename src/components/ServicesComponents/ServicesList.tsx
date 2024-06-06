import Image from "next/image";

export const ServicesList = () => {
  return (
    <section className="px-4 py-10 tab:px-5 pc:px-9 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-10 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        Я допомагаю
      </h2>
      <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
          alt="picture"
          width={1000}
          height={1500}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
      <div className="max-w-[338px] mx-auto rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1vO0di27-lFh5lmZddB3MpAfQV7zmjxFf"
          alt="picture"
          width={3584}
          height={5376}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
      <div className="max-w-[338px] mx-auto pc:mx-0 rounded overflow-hidden tab:ml-0 pc:min-w-[371px] ">
        <Image
          src="https://drive.google.com/uc?export=view&id=1RN9lVZyaPzGeRay-2W_GOt_Bf0YH29Lq"
          alt="picture"
          width={1250}
          height={827}
          className="aspect-[256/194] tab:aspect-[338/256] pc:aspect-[246/196] flex object-cover "
        />
      </div>
    </section>
  );
};
