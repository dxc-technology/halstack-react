import { DxcFlex, DxcTextarea } from "@dxc-technology/halstack-react";
const TextareaPreview = () => {
  return (
    <DxcFlex gap="2rem">
      <DxcTextarea label="Textarea" placeholder="Enter multiple lines of text..." rows={3} />
      <DxcTextarea label="Textarea" placeholder="Enter multiple lines of text..." rows={3} error="Error message" />
    </DxcFlex>
  );
};

export default TextareaPreview;
