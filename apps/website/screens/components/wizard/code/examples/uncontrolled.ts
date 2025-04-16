import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onStepClick = (i) => {
    console.log(i);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcWizard
        defaultCurrentStep={1}
        onStepClick={onStepClick}
        steps={[
          {
            label: "Cart",
          },
          {
            label: "Address",
          },
          {
            label: "Payment",
          },
        ]}
      ></DxcWizard>
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
};

export default { code, scope };
