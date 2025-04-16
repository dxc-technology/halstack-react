import { DxcWizard, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcWizard
        steps={[
          {
            label: "Personal information",
            description: "Enter your personal details to begin your insurance application",
            icon: "person",
          },
          {
            label: "Billing information",
            description: "Fill in all the necessary information to attach to your monthly bills",
            icon: "account_balance_wallet",
          },
          {
            label: "Payment method",
            description: "Choose your preferred payment method",
            icon: "payments",
          },
        ]}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcWizard,
  DxcInset,
};

export default { code, scope };
