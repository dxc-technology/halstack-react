import { DxcTooltip, DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcTooltip label="Tooltip Test" position="top">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    );
  }`;

const scope = {
  DxcTooltip,
  DxcButton,
  DxcInset,
};

export default { code, scope };
