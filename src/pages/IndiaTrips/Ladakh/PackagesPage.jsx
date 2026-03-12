import React from "react";
import PackageTagsSection from "../../../component/PackageTagsSection";

import {
  internationalPackages,
  indiaPackages,
  otherPackages,
  ladakhInfo
} from "../../../data/ackageTagsData";

export default function PackagesPage() {
  return (
    <div className="space-y-10">
      <PackageTagsSection
        title="All About Ladakh"
        items={ladakhInfo}
      />

      <PackageTagsSection
        title="International Tour Packages"
        items={internationalPackages}
      />

      <PackageTagsSection
        title="India Tour Packages"
        items={indiaPackages}
      />

      <PackageTagsSection
        title="Other Packages"
        items={otherPackages}
      />

    </div>
  );
}