import { AdditionalServices } from "./AdditionalServices";
import { HeroServices } from "./HeroServices";
import { ServicesList } from "./ServicesList";

export const ServicesPage = () => {
  return (
    <>
      <HeroServices />
      <ServicesList />
      <AdditionalServices />
    </>
  );
};
