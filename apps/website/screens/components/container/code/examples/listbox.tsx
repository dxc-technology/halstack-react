import { DxcContainer, DxcInset, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  const suggestions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcContainer
        background={{ color: "var(--border-color-neutral-brighter)" }}
        border={{ 
          color: "var(--border-color-neutral-medium)",
          style: "var(--border-style-default)",
          width: "var(--border-width-s)"
        }}
        borderRadius="var(--border-radius-s)"
        boxShadow="var(--shadow-200)"
        boxSizing="border-box"
        maxHeight="304px"
        overflow={{ x: "hidden", y: "auto" }}
        padding={{ bottom: "var(--spacing-padding-xxs)", top: "var(--spacing-padding-xxs)" }}
        width="250px"
      >
        {suggestions.map((suggestion, index) => (
          <DxcContainer padding={{ left: "var(--spacing-padding-xs)", right: "var(--spacing-padding-xs)" }}>
            <DxcContainer
              border={
                index !== suggestions.length - 1
                  ? { 
                      bottom: { 
                        color: "var(--border-color-neutral-lighter)",
                        style: "var(--border-style-default)",
                        width: "var(--border-width-s)"
                      } 
                    }
                  : undefined
              }
              overflow="hidden"
              padding="var(--spacing-padding-xxs)"
            >
              <DxcTypography lineHeight="1.715em" textOverflow="ellipsis" whiteSpace="nowrap">
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
  DxcTypography,
};

export default { code, scope };
