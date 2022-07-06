import {
  DxcTextInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {  
    return (
      <DxcInset space="2rem">
        <DxcStack gutter="2rem" alignX="center">
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
