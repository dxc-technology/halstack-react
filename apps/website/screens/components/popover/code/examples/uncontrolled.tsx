import { DxcContainer, DxcParagraph, DxcPopover } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcContainer height="100px" padding="var(--spacing-padding-m)" boxSizing="border-box">
        <DxcPopover
        actionToOpen="hover"
        popoverContent={<DxcParagraph>Popover content.</DxcParagraph>}>
            <DxcParagraph>Hover me to see the popover.</DxcParagraph>
        </DxcPopover>
    </DxcContainer>
  );
}`;

const scope = {
  DxcContainer,
  DxcParagraph,
  DxcPopover,
};

export default { code, scope };
