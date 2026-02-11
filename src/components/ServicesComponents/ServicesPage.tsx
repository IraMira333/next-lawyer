import { AdditionalServices } from "./AdditionalServices";
import { CTAFree } from "./CTAFree";
import { FreeConsultations } from "./FreeConsultations";
import { HeroServices } from "./HeroServices";
import { ServicesList } from "./ServicesList";

export const ServicesPage = () => {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <CTAFree />
      <AdditionalServices />
    </>
  );
};
