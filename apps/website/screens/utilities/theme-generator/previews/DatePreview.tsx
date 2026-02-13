import { DxcDateInput, DxcFlex } from "@dxc-technology/halstack-react";

const DatePreview = () => {
  return (
    <DxcFlex gap="2rem">
      <DxcDateInput
        label="Start date"
        helperText="Please enter the start date."
        format="MM/dd/yyyy"
        clearable
        placeholder
      />
      <DxcDateInput
        label="Start date - disabled"
        helperText="Please enter the start date."
        format="MM/dd/yyyy"
        clearable
        placeholder
        disabled
        error="Invalid date format."
      />
      <DxcDateInput
        label="Start date - Error"
        helperText="Please enter the start date."
        format="MM/dd/yyyy"
        clearable
        placeholder
        error="Invalid date format."
      />
    </DxcFlex>
  );
};

export default DatePreview;
