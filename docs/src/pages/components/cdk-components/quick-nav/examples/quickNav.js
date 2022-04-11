import { DxcQuickNav } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const links = [
    {
      label: "Overview",
      links: [
        {
          label: "Introduction",
          href: "introduction",
        },
      ],
    },
    {
      label: "Principles",
      href: "principles",
      links: [
        { label: "Color", href: "color" },
        { label: "Spacing", href: "spacing" },
        { label: "Typography", href: "typography" },
      ],
    },
  ];

  return (
    <div style={{ margin: "30px" }}>
      <DxcQuickNav title="Sections" links={links}></DxcQuickNav>
    </div>
  );
}`;

const scope = {
  DxcQuickNav,
  useState,
};

export default { code, scope };
