import { DxcBreadcrumbs, DxcInset } from "@repo/ui";

const code = `() => {
  const items = [
    { label: "Components" },
    { label: "Select" },
    { label: "Specifications" },
    { label: "Design Tokens" },
    { label: "Color" }
  ];

  return (
    <DxcInset space="2rem">
      <DxcBreadcrumbs items={items} showRoot={false} />
    </DxcInset>
  );
}`;

const scope = {
  DxcBreadcrumbs,
  DxcInset,
};

export default { code, scope };
