import { DxcInset, DxcQuickNav } from "@dxc-technology/halstack-react";

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

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcQuickNav links={links}></DxcQuickNav>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcQuickNav,
};

export default { code, scope };
