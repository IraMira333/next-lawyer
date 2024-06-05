import Image from "next/image";
import { useTranslations } from "next-intl";

const HomePart = () => {
  const t = useTranslations("Home");
  return (
    <>
      <section className="relative bg-accentBg">
        <Image
          src="https://drive.google.com/uc?export=view&id=1nU-GhAzB-1NfuYQpGd_ydPsQYBfQGTZ4"
          alt={t("heroImage")}
          width={5184}
          height={3456}
          className=" w-full h-full "
          priority
        />
        <div className="py-10 px-4 ml-auto mr-auto">
          <h1 className="font-lora text-accent text-3xl font-semibold mb-3 text-center ">
            {t("lawyer1")} <br />
            {t("lawyer2")}
          </h1>
          <h2 className="font-lora text-base italic font-medium text-center mb-3">
            {t("title")}
          </h2>
          <p className="text-center text-sm tab:text-base tab:leading-7 tab:text-right">
            {t("description")}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 ">
        <h2 className="font-lora text-accent text-center mb-5 text-[28px] leading-8 tab:text-xl font-medium">
          {t("whomTitle")}
        </h2>
        <ul>
          <li>
            <div className="min-w-[288px] min-h-[320px] max-w-[500px] mx-auto border border-accent rounded-lg overflow-hidden p-4">
              <Image
                src="https://drive.google.com/uc?export=view&id=1TxHoVZ7l8A-1jaaQ7Kk8a876LJoQ8gp0"
                alt="picture"
                width={1000}
                height={1500}
                className="w-full h-[191px] flex object-cover "
              />
              <div>
                <h3 className="text-base leading-[21px] font-semibold my-4">
                  {t("whomBox1Title")}
                </h3>
                <ul className="pl-4 ">
                  <li>
                    <p>{t("whomBox1Li1")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li2")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li3")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li4")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox1Li5")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="min-w-[300px] min-h-[320px] max-w-[500px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1IqNfGR28avp-RAPWZpA9eKU-oOtjKK9D"
                alt="picture"
                width={218}
                height={212}
                className="flex object-cover w-[218px] h-[212px] mx-auto"
              />
              <h3 className="font-robotoSlab text-lg text-center my-3 ">
                {t("whomBox2Title")}
              </h3>
            </div>
          </li>
          <li>
            <div className="min-w-[300px] min-h-[320px] max-w-[500px] mx-auto border rounded-[10px] overflow-hidden p-[10px] pb-5 mb-6 shadow-card">
              <Image
                src="https://drive.google.com/uc?export=view&id=1MPAY2L7nUrptE6boiesM4iKHNZmpnWQY"
                alt="picture"
                width={218}
                height={212}
                className="flex object-cover w-[218px] h-[212px] mx-auto"
              />
              <div>
                <h3 className="font-robotoSlab text-lg text-center my-3">
                  {t("whomBox3Title")}{" "}
                </h3>
                <ul className="list-square pl-4 marker-square bigmob:leading-6">
                  <li>
                    <p>{t("whomBox3Li1")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li2")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li3")}</p>
                  </li>
                  <li>
                    <p>{t("whomBox3Li4")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="bg-accentBg pt-8 px-3 tab:px-5 pb-[60px] shadow-custom">
        <div className="max-w-[500px] tab:max-w-[1000px] ml-auto mr-auto">
          <h2 className="font-lora text-accent text-center mb-5 text-lg tab:text-xl font-medium">
            {t("whomOtherServicesTitle")}
          </h2>
          <ul>
            <li>
              <Image
                src="https://drive.google.com/uc?export=view&id=16EMZ2DM4nXKKzhffY1R5ndEgY0Uqmuyz"
                alt="picture"
                width={218}
                height={212}
                className="flex object-cover mx-auto tab:min-w-[350px] tab:max-h-[auto]"
              />
              <h3 className="font-robotoSlab text-lg text-center mt-3">
                {t("whomBox4Title1")}
              </h3>

              <ul>
                <li>
                  <h4 className="font-robotoSlab text-base text-start my-2 tab:ml-4">
                    {t("whomBox4Li1")}
                  </h4>
                  <p className="text-justify bigmob:leading-6">
                    {t("whomBox4Li1P1")}
                  </p>
                </li>
                <li>
                  <h4 className="font-robotoSlab text-base text-start my-2 tab:ml-4">
                    {t("whomBox4Li2")}
                  </h4>
                  <p className="text-justify bigmob:leading-6">
                    {t("whomBox4Li2P1")}
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-robotoSlab text-lg text-center my-3">
                {t("whomBox4Title2")}
              </h3>
              <p className="text-justify bigmob:leading-6">
                {t("whomBox4Li3")}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-3 pt-6 pb-[60px]">
        <div className="max-w-[500px] ml-auto mr-auto">
          <div>
            <div className="max-w-[384px] ml-auto">
              <h2 className="font-robotoSlab text-base font-medium text-accent text-right mb-4 ">
                {t("whyTitle")}
              </h2>
              <h3 className="font-lora italic text-xl mb-5">{t("whyP4")}</h3>
            </div>
            <Image
              src="/ak-second-photo.jpeg"
              alt="Lawyer Photo"
              width={213}
              height={142}
              // width={426}
              // height={284}
              className=""
            />
          </div>
          <div>
            <div className="mt-3 text-justify tab:text-base font-light">
              <p className="indent-6">{t("whyP1")}</p>
              <p className="indent-6">{t("whyP2")}</p>
              <p className="indent-6">{t("whyP3")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePart;
