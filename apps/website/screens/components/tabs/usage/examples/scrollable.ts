import { DxcTabs, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center">
        <div style={{ width: "400px" }}>
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
        </div>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTabs,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
