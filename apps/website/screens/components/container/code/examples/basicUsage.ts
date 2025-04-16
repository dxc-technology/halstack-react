import { DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
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
