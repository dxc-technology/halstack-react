import { DxcInset, DxcGrid } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcGrid>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </DxcGrid>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcGrid,
  Placeholder,
};

export default { code, scope };
