import { DxcButton, DxcContainer, DxcParagraph, DxcPopover } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <DxcContainer height="100px" padding="var(--spacing-padding-m)" boxSizing="border-box">
      <DxcPopover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        popoverContent={<DxcParagraph>Popover content.</DxcParagraph>}
      >
        <DxcButton
          label="Open popover"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </DxcPopover>
    </DxcContainer>
  );
}`;

const scope = {
  useState,
  DxcContainer,
  DxcButton,
  DxcParagraph,
  DxcPopover,
};

export default { code, scope };
