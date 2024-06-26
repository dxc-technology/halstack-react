import { DxcBreadcrumbs, DxcInset } from "@repo/ui";

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
    <DxcInset space="2rem">
      <DxcBreadcrumbs items={items} />
    </DxcInset>
  );
}`;

const scope = {
  DxcBreadcrumbs,
  DxcInset,
};

export default { code, scope };
