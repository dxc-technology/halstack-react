import React, { useState } from "react";
import { DxcFlex, DxcHeading, DxcPopover, DxcParagraph } from "@dxc-technology/halstack-react";

const PopoverPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Popover" />
      <DxcFlex direction="column" gap="1rem">
        <DxcPopover actionToOpen="hover" popoverContent={<DxcParagraph>Popover content.</DxcParagraph>}>
          <DxcParagraph>Hover me to see the popover.</DxcParagraph>
        </DxcPopover>

        <DxcPopover
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          popoverContent={<DxcParagraph>Popover content.</DxcParagraph>}
        >
          <DxcParagraph>Click me to see the popover.</DxcParagraph>
        </DxcPopover>
      </DxcFlex>
    </DxcFlex>
  );
};

export default PopoverPreview;
