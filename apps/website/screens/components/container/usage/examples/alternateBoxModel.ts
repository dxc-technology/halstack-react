import { DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcContainer
        boxSizing="border-box"
        margin="small"
        border={{ width: "4px", style: "solid", color: "color_black" }}
        padding="xsmall"
        width="300px"
        height="150px"
      >
        <p>Container with default box model "border-box"</p>
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcInset,
};

export default { code, scope };
