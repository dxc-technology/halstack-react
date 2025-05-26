import { DxcTextInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {  
    return (
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="center">
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
