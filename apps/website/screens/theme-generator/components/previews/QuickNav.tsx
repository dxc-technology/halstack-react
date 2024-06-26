import React from "react";
import { DxcQuickNav } from "@repo/ui";
import Mode from "../Mode";

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

const QuickNav = () => (
  <Mode text="Default">
    <DxcQuickNav links={links} />
  </Mode>
);

export default QuickNav;
