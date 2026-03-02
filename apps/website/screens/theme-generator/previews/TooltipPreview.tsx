import { DxcButton, DxcTooltip } from "@dxc-technology/halstack-react";

const TooltipPreview = () => {
  return (
    <DxcTooltip label="Tooltip">
      <DxcButton label="Button with Tooltip" />
    </DxcTooltip>
  );
};

export default TooltipPreview;
