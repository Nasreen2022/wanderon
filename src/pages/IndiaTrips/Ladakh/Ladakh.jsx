import AdventureActivitiesSection from "./AdventureActivitiesSection";
import LadakhHero from "./LadakhHero";
import LadakhPackages from "./LadakhPackages";
import LadakhPackagesCitiesSection from "./LadakhPackagesCitiesSection";
import OurBlogsSection from "./OurBlogsSection";
export default function Ladakh() {
  return (
    <>
      <LadakhHero />
      <LadakhPackages />
      <AdventureActivitiesSection />
      <LadakhPackagesCitiesSection />
      <OurBlogsSection />
    </>
  );
}