import {
  DxcTooltip,
  DxcButton,
  DxcInset,
} from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="2rem">
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
