import { DxcBreadcrumbs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const items = [
    {
      label: "Select component",
      href: "/components/select",
    },
    {
      label: "Code",
      href: "/components/select/code",
    },
    {
      label: "Examples",
      href: "/components/select/code/#examples",
    },
    {
      label: "Uncontrolled",
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
