import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTabs>
        <DxcTabs.Tab tabId="Mail" label="Mail" defaultActive>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab tabId="Calendar" label="Calendar">
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab tabId="Contacts" label="Contacts">
          <></>
        </DxcTabs.Tab>
      </DxcTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
};

export default { code, scope };
