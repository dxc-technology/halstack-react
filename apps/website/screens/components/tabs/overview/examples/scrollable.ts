import { DxcContainer, DxcTabs, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center">
        <DxcContainer width="350px">
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
        </DxcContainer>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcTabs,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
