import { DxcInset, DxcGrid } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcGrid
        gap={{ rowGap: "0.5rem", columnGap: "0.75rem" }}
        templateColumns={["repeat(4, 1fr)"]}
        templateRows={["40px", "200px", "60px"]}
        templateAreas={[
          "header header header header",
          "sidenav main main main",
          "sidenav footer footer footer",
        ]}
      >
        <DxcGrid.GridItem areaName="header" as="header">
          <Placeholder height="100%" />
        </DxcGrid.GridItem>
        <DxcGrid templateColumns={["repeat(4, 1fr)"]} gap="0.25rem" areaName="main" as="main">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </DxcGrid>
        <DxcGrid.GridItem areaName="sidenav" as="nav">
          <Placeholder height="100%" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem areaName="footer" as="footer">
          <Placeholder height="100%" />
        </DxcGrid.GridItem>
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
