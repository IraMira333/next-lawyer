import { Hero } from "./Hero";
import { WhenYouNeedOurHelp } from "./WhenYouNeedOurHelp";
import { CitizenshipServices } from "./CitizenshipServices";
import { WhyWe } from "./WhyWe";
import AccessibilitySection from "./AccessibilitySection";

const HomePart = () => {
  return (
    <>
      <Hero />
      <WhenYouNeedOurHelp />
      <AccessibilitySection />
      <CitizenshipServices />
      <WhyWe />
    </>
  );
};
export default HomePart;
