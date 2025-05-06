import { DxcSwitch, DxcInset, DxcFlex, DxcTypography } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-xxl)" justifyContent="center">
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          <DxcTypography
            color="var(--color-fg-neutral-dark)"
            fontSize="var(--typography-label-m)"
            fontWeight="var(--typography-label-semibold)"
          >
            Vertical
          </DxcTypography>
          <DxcSwitch label="Option 01" />
          <DxcSwitch label="Option 02" />
          <DxcSwitch label="Option 03" />
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
            <DxcSwitch label="Option 01" />
            <DxcSwitch label="Option 02" />
            <DxcSwitch label="Option 03" />
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcFlex,
  DxcTypography,
};

export default { code, scope };
