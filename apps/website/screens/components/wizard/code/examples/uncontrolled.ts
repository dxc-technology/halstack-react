import { DxcWizard, DxcInset } from "@repo/ui";

const code = `() => {
  const onStepClick = (i) => {
    console.log(i);
  };

  return (
    <DxcInset space="2rem">
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
