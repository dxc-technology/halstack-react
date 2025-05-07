import { DxcButton, DxcFlex, DxcInset, useToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useToast();

  const action = { label: "Action", onClick: () => {} };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-ml)">
        <DxcButton 
          label="Show information toast"
          semantic="info"
          onClick={() => {
            toast.info({ message: "This is a information message.", action });
          }}
        />
        <DxcButton 
          label="Show success toast" 
          semantic="success"
          onClick={() => {
            toast.success({ message: "This is a success message.", action });
          }} 
        />
        <DxcButton 
          label="Show warning toast"
          semantic="warning"
          onClick={() => {
            toast.warning({ message: "This is a warning message.", action });
          }}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
  useToast,
};

export default { code, scope };
