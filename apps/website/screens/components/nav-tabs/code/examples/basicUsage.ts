import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcNavTabs>
        <DxcNavTabs.Tab href="#" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 2</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#">Tab 3</DxcNavTabs.Tab>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
};

export default { code, scope };
