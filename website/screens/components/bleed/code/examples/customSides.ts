import { DxcBleed, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <Placeholder height="large" />
        <DxcBleed top="0.5rem" right="1rem" bottom="1.5rem" left="1.5rem">
          <Placeholder height="large" />
        </DxcBleed>
        <Placeholder height="large" />
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
