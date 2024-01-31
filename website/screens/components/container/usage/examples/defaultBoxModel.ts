import { DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcContainer
        padding="xsmall"
        margin="small"
        width="300px"
        height="150px"
        border={{ width: "4px", style: "solid", color: "color_black" }}
      >
        <p>Container with default box model "content-box"</p>
      </DxcContainer>
  </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcInset,
};

export default { code, scope };
