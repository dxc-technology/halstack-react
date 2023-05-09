import { DxcInset, DxcGrid } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

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
