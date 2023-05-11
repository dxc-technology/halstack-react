import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <Placeholder height="50px" />
        <DxcInset space="1rem">
          <Placeholder height="50px" />
        </DxcInset>
        <Placeholder height="50px" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcFlex,
  Placeholder,
};

export default { code, scope };
