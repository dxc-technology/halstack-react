import { DxcNumberInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {  
    return (
      <DxcInset space="2rem">
        <DxcFlex direction="column" gap="2rem" alignItems="center">
          <DxcNumberInput label="Introduce a quantity" prefix="USD" />
          <DxcNumberInput label="Introduce a quantity" suffix="EUR" />
        </DxcFlex>
      </DxcInset>
    );
  }`;

const scope = {
  DxcNumberInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
