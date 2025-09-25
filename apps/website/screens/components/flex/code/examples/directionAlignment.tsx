import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xl)">
        <DxcFlex alignSelf="flex-end" >
          <Placeholder width="100px" height="50px" />
          <Placeholder width="100px" height="50px" />
        </DxcFlex>
        <Placeholder width="150px" height="50px" />
        <Placeholder width="150px" height="50px" />
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
