import { DxcDateInput, DxcFlex } from "@dxc-technology/halstack-react";

const DateInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcDateInput
        label="Project start date"
        helperText="Select the date when the project begins."
        format="MM/dd/yyyy"
        clearable
        placeholder
      />
      <DxcDateInput
        label="Project start date - disabled"
        helperText="Cannot change the start date at this stage."
        format="MM/dd/yyyy"
        clearable
        placeholder
        disabled
        error="Date cannot be modified."
      />
      <DxcDateInput
        label="Project start date - Error"
        helperText="Select the correct start date."
        format="MM/dd/yyyy"
        clearable
        placeholder
        error="Invalid date format."
      />
    </DxcFlex>
  );
};

export default DateInputPreview;
