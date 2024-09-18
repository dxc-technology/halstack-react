import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcTabs>
        <DxcTabs.Tab label="Mail" defaultActive>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Calendar">
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Contacts">
          <></>
        </DxcTabs.Tab></DxcTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
};

export default { code, scope };
