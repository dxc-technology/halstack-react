import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return(
        <DxcInset space="large">
            <DxcDateInput
            label="Default"
            placeholder="Placeholder"
            optional
            />
        </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
};

export default { code, scope };
