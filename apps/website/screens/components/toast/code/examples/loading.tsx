import { DxcButton, DxcInset, useToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useToast();

  const loadProcess = () => {
    const loadingToast = toast.loading({ message: "Loading process..." });

    setTimeout(() => {
      loadingToast();
      toast.success({ message: "Process finished successfully." });
    }, 6000);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcButton 
        label="Load process" 
        onClick={loadProcess} 
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
