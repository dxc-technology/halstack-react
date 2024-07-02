import { DxcBreadcrumbs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const items = [
    { label: "Components" },
    { label: "Select" },
    { label: "Specifications" },
    { label: "Design Tokens" },
    { label: "Typography" }
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
