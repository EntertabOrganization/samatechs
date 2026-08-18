import { Hero } from "@/components/sections/Hero";
import { AdvisoryPillars } from "@/components/sections/AdvisoryPillars";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhySamatechs } from "@/components/sections/WhySamatechs";
import { PartnerExperience } from "@/components/sections/PartnerExperience";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AdvisoryPillars />
      <WhoWeServe />
      <WhySamatechs />
      <PartnerExperience />
      <ClosingCTA />
    </>
  );
}
