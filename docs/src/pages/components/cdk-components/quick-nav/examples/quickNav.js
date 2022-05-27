import { DxcQuickNav } from "@dxc-technology/halstack-react";

const code = `() => {
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

  return <div style={{ margin: "20px"}}><DxcQuickNav links={links}></DxcQuickNav></div>;
}`;

const scope = {
  DxcQuickNav,
};

export default { code, scope };
