import { DxcBreadcrumbs } from "@dxc-technology/halstack-react";

const BreadcrumbsPreview = () => {
  return <DxcBreadcrumbs items={[{ label: "Home" }, { label: "Projects" }, { label: "Project Alpha" }]} />;
};

export default BreadcrumbsPreview;
