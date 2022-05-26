import { DxcButton, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
            <DxcRow gutter="large" align="center">
                <DxcButton
                    mode="primary"
                    label="Primary Disabled"
                    disabled
                />
                <DxcButton
                    mode="secondary"
                    label="Secondary Disabled"
                    disabled
                />
                <DxcButton
                    mode="text"
                    label="Text Disabled"
                    disabled
                />
            </DxcRow>
        </DxcInset>
    );
  }`;

  const scope = {
    DxcButton,
    DxcRow,
    DxcInset,
  };
  
  export default { code, scope };