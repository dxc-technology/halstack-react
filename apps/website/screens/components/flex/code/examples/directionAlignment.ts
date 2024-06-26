import { DxcInset, DxcFlex } from "@repo/ui";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" alignItems="center" gap="2rem">
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
