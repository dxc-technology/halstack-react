import { DxcContainer, DxcParagraph, DxcPopover } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <DxcContainer height="100px" padding="var(--spacing-padding-m)" boxSizing="border-box">
      <DxcPopover
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        popoverContent={<DxcParagraph>Popover content.</DxcParagraph>}
      >
        <DxcParagraph>Click me to see the popover.</DxcParagraph>
      </DxcPopover>
    </DxcContainer>
  );
}`;

const scope = {
  useState,
  DxcContainer,
  DxcParagraph,
  DxcPopover,
};

export default { code, scope };
