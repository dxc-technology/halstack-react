import React from "react";
import { DxcQuickNav } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const QuickNav = () => {
  const links = [
    {
      label: "Overview",
    },
    {
      label: "Principles",
      links: [
        { label: "Color" },
        { label: "Spacing" },
        { label: "Typography" },
        { label: "Layout" },
        {
          label: "Themes",
          links: [{ label: "Light" }, { label: "Dark" }],
        },
      ],
    },
  ];

  return (
    <Mode text="Default">
      <DxcQuickNav links={links}></DxcQuickNav>
    </Mode>
  );
};

export default QuickNav;
