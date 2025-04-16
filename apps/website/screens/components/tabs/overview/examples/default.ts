import { DxcTabs, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTabs>
        <DxcTabs.Tab label="Mail" active>
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Calendar">
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Contacts">
          <></>
        </DxcTabs.Tab>
        <DxcTabs.Tab label="Facebook">
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
