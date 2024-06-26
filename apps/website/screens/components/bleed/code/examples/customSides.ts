import { DxcBleed, DxcInset, DxcFlex } from "@repo/ui";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <Placeholder height="50px" />
        <DxcBleed top="0.5rem" right="1rem" bottom="1.5rem" left="1.5rem">
          <Placeholder height="50px" />
        </DxcBleed>
        <Placeholder height="50px" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcBleed,
  DxcInset,
  DxcFlex,
  Placeholder,
};

export default { code, scope };
