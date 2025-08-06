import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-l)">
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active icon="favorite">
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="favorite">
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="favorite">
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
};

export default { code, scope };
