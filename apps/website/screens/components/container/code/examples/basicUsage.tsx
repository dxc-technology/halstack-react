import { DxcContainer, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcContainer
        border={{ 
          color: "var(--border-color-primary-light)",
          width: "var(--border-width-m)",
          style: "var(--border-style-outline)"
        }}
        borderRadius="var(--border-radius-s)"
        padding="var(--spacing-padding-xs)"
        width="fit-content"
      >
        <DxcParagraph>Example text</DxcParagraph>
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcContainer,
  DxcInset,
  DxcParagraph,
};

export default { code, scope };
