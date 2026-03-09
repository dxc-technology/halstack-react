import { DxcButton, DxcTooltip } from "@dxc-technology/halstack-react";

const TooltipPreview = () => {
  return (
    <DxcTooltip label="This is a tooltip message that provides additional information about the button.">
      <DxcButton label="Hover this button to see the tooltip" />
    </DxcTooltip>
  );
};

export default TooltipPreview;
