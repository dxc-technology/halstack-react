import { DxcContainer, DxcInset, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  const suggestions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <DxcInset space="2rem">
      <DxcContainer
        background={{ color: "var(--border-color-neutral-brighter)" }}
        border={{ 
          color: "var(--border-color-neutral-medium)",
          width: "var(--border-width-s)",
          style: "var(--border-style-default)"
        }}
        borderRadius="var(--border-radius-s)"
        boxShadow="var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread) var(--shadow-light)"
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
                        style: "var(--border-style-default)"
                        width: "var(--border-width-s)",
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
