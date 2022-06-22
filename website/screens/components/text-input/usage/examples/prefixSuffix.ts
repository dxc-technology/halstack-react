import {
  DxcTextInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {  
    return (
      <DxcInset space="large">
        <DxcStack gutter="large" align="center">
          <DxcTextInput label="Prefix" prefix="+34"/>
          <DxcTextInput label="Suffix" suffix="USD"/>
        </DxcStack>
      </DxcInset>
    );
  }`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcStack,
};

export default { code, scope };
