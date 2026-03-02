import { DxcNavTabs } from "@dxc-technology/halstack-react";

const TabsPreview = () => {
  return (
    <DxcNavTabs iconPosition="left">
      <DxcNavTabs.Tab href="#" active icon="favorite" notificationNumber onClick={() => {}}>
        Tab 1
      </DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#" disabled icon="favorite" notificationNumber={5} onClick={() => {}}>
        Tab 2
      </DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#" icon="favorite" notificationNumber={120} onClick={() => {}}>
        Tab 3
      </DxcNavTabs.Tab>
      <DxcNavTabs.Tab href="#" icon="favorite">
        Tab 4
      </DxcNavTabs.Tab>
    </DxcNavTabs>
  );
};

export default TabsPreview;
