import { DxcNavTabs } from "@dxc-technology/halstack-react";

const TabsPreview = () => {
  return (
    <DxcNavTabs iconPosition="left">
      <DxcNavTabs.Tab href="#dashboard" active icon="dashboard" notificationNumber={2} onClick={() => {}}>
        Dashboard
      </DxcNavTabs.Tab>

      <DxcNavTabs.Tab href="#messages" disabled icon="message" notificationNumber={5} onClick={() => {}}>
        Messages
      </DxcNavTabs.Tab>

      <DxcNavTabs.Tab href="#notifications" icon="notifications" notificationNumber={120} onClick={() => {}}>
        Notifications
      </DxcNavTabs.Tab>

      <DxcNavTabs.Tab href="#settings" icon="settings" onClick={() => {}}>
        Settings
      </DxcNavTabs.Tab>
    </DxcNavTabs>
  );
};

export default TabsPreview;
