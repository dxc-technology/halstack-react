import { DxcTextInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {  
    return (
      <DxcInset space="2rem">
        <DxcFlex direction="column" gap="2rem" alignItems="center">
          <DxcTextInput label="Prefix" prefix="+34"/>
          <DxcTextInput label="Suffix" suffix="USD"/>
        </DxcFlex>
      </DxcInset>
    );
  }`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
