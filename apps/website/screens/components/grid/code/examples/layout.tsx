import { DxcInset, DxcGrid } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcGrid
        gap={{ rowGap: "var(--spacing-gap-s)", columnGap: "var(--spacing-gap-ml)" }}
        templateColumns={["repeat(4, 1fr)"]}
        templateRows={["var(--height-xl)", "200px", "var(--height-xxxl)"]}
        templateAreas={[
          "header header header header",
          "sidenav main main main",
          "sidenav footer footer footer",
        ]}
      >
        <DxcGrid.Item areaName="header" as="header">
          <Placeholder height="100%" />
        </DxcGrid.Item>
        <DxcGrid templateColumns={["repeat(4, 1fr)"]} gap="var(--spacing-gap-xs)" areaName="main" as="main">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </DxcGrid>
        <DxcGrid.Item areaName="sidenav" as="nav">
          <Placeholder height="100%" />
        </DxcGrid.Item>
        <DxcGrid.Item areaName="footer" as="footer">
          <Placeholder height="100%" />
        </DxcGrid.Item>
      </DxcGrid>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcGrid,
  Placeholder,
};

export default { code, scope };
