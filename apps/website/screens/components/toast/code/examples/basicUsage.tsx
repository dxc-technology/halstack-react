import { DxcButton, DxcInset, useToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useToast();

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcButton 
        label="Show toast" 
        onClick={() => {
          toast.default({ message: "This is a basic message." });
        }} 
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
  useToast,
};

export default { code, scope };
