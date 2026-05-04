import { DxcFlex, DxcTimeInput } from "@dxc-technology/halstack-react";
const TimeInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcTimeInput label="Start time" helperText="We'll use this time to schedule your appointment." />
      <DxcTimeInput
        label="End time"
        helperText="We'll use this time to schedule your appointment."
        error="Incorrect time"
      />
    </DxcFlex>
  );
};

export default TimeInputPreview;
