import { DxcInset, DxcBreadcrumbs } from "@dxc-technology/halstack-react";
const BreadcrumbPreview = () => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBreadcrumbs
        items={[
          { label: "Components" },
          { label: "Select" },
          { label: "Specifications" },
          { label: "Design Tokens" },
          { label: "Typography" },
        ]}
      />
    </DxcInset>
  );
};

export default BreadcrumbPreview;
