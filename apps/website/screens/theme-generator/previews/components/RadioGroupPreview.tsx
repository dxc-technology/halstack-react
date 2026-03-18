import { DxcRadioGroup, DxcFlex } from "@dxc-technology/halstack-react";

const RadioGroupPreview = () => {
  const options = [
    { label: "Basic Plan", value: "basic" },
    { label: "Pro Plan", value: "pro" },
    { label: "Enterprise Plan", value: "enterprise" },
  ];

  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcRadioGroup label="Choose your subscription plan" options={options} />
      <DxcRadioGroup
        label="Choose your subscription plan"
        options={options}
        error="You must select a subscription plan."
      />
    </DxcFlex>
  );
};

export default RadioGroupPreview;
