import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="#" active icon="favorite" notificationNumber>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" disabled icon="favorite" notificationNumber={5}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="#" icon="favorite" notificationNumber={120}>
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
