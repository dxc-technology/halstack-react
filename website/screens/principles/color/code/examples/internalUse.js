import {
  DxcInset,
  DxcTextInput,
  DxcFooter,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFooter>
        <DxcTextInput label="Enter your surname" defaultValue="Harris" />
      </DxcFooter>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcTextInput,
  DxcFooter,
};

export default { code, scope };
