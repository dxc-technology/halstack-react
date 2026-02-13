import { DxcTextarea, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
const TextareaPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Textarea" />
      <DxcFlex gap="var(--spacing-padding-xxl)">
        <DxcTextarea label="Basic textarea" placeholder="Enter multiple lines of text..." rows={3} />
        <DxcTextarea label="Error textarea" placeholder="This field is required" rows={3} error="Error message." />
      </DxcFlex>
    </DxcFlex>
  );
};

export default TextareaPreview;
