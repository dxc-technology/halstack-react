import { DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcContainer
        border={{ color: "color_purple_400", width: "2px", style: "dashed" }}
        borderRadius="0.25rem"
        padding="xsmall"
        width="fit-content"
      >
        Example text
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcInset,
};

export default { code, scope };
