import { DxcButton, DxcInset, useDxcToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useDxcToast();

  const loadProcess = () => {
    const loadingToast = toast.loading({ message: "Loading process..." });

    setTimeout(() => {
      loadingToast();
      toast.success({ message: "Process finished successfully." });
    }, 6000);
  };

  return (
    <DxcInset space="2rem">
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
  useDxcToast,
};

export default { code, scope };
