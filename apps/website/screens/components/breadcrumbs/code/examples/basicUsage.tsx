import { DxcBreadcrumbs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const items = [
    {
      label: "Select component",
      href: "/components/select",
    },
    {
      label: "Specifications",
      href: "/components/select/specifications",
    },
    {
      label: "Design Tokens",
      href: "/components/select/specifications/#design-tokens",
    },
    {
      label: "Color",
    }
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBreadcrumbs items={items} />
    </DxcInset>
  );
}`;

const scope = {
  DxcBreadcrumbs,
  DxcInset,
};

export default { code, scope };
