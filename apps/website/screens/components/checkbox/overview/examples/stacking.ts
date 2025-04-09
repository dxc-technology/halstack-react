import { DxcCheckbox, DxcInset, DxcFlex, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          <DxcTypography
            color="var(--color-fg-neutral-dark)"
            fontSize="var(--typography-label-m)"
            fontWeight="var(--typography-label-semibold)"
          >
            Vertical
          </DxcTypography>
          <DxcCheckbox label="Option 01" labelPosition="after" />
          <DxcCheckbox label="Option 02" labelPosition="after" />
          <DxcCheckbox label="Option 03" labelPosition="after" />
        </DxcFlex>
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          <DxcTypography
            color="var(--color-fg-neutral-dark)"
            fontSize="var(--typography-label-m)"
            fontWeight="var(--typography-label-semibold)"
          >
            Horizontal
          </DxcTypography>
          <DxcFlex gap="var(--spacing-gap-l)">
            <DxcCheckbox label="Option 01" labelPosition="after" />
            <DxcCheckbox label="Option 02" labelPosition="after" />
            <DxcCheckbox label="Option 03" labelPosition="after" />
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcFlex,
  DxcTypography,
};

export default { code, scope };
