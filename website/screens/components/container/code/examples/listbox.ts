import { DxcContainer, DxcInset, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  const suggestions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <DxcInset space="2rem">
      <DxcContainer
        boxSizing="border-box"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        border={{ width: "1px", style: "solid", color: "color_grey_400" }}
        borderRadius="0.25rem"
        background={{ color: "color_white" }}
        padding={{ top: "xxsmall", bottom: "xxsmall" }}
        maxHeight="304px"
        width="250px"
        overflow={{ x: "hidden", y: "auto" }}
      >
        {suggestions.map((suggestion, index) => (
          <DxcContainer padding={{ left: "xsmall", right: "xsmall" }}>
            <DxcContainer
              border={
                index !== suggestions.length - 1
                  ? { bottom: { width: "1px", style: "solid", color: "color_grey_200" } }
                  : undefined
              }
              padding="xxsmall"
              overflow="hidden"
            >
              <DxcTypography whiteSpace="nowrap" textOverflow="ellipsis" lineHeight="1.715em">
                {suggestion}
              </DxcTypography>
            </DxcContainer>
          </DxcContainer>
        ))}
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcInset,
  DxcTypography
};

export default { code, scope };
