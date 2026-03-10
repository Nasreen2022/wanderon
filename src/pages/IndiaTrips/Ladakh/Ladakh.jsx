import AdventureActivitiesSection from "./AdventureActivitiesSection";
import EnquirySection from "./EnquirySection";
import LadakhHero from "./LadakhHero";
import LadakhPackages from "./LadakhPackages";
import LadakhPackagesCitiesSection from "./LadakhPackagesCitiesSection";
import OurBlogsSection from "./OurBlogsSection";
import SecretSauceSection from "./SecretSauceSection";
export default function Ladakh() {
  return (
    <>
      <LadakhHero />
      <LadakhPackages />
      <AdventureActivitiesSection />
      <LadakhPackagesCitiesSection />
      <OurBlogsSection />
      <SecretSauceSection />
      <EnquirySection />
      
    </>
  );
}