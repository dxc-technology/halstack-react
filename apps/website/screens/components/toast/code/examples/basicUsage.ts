import { DxcButton, DxcInset, useDxcToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useDxcToast();

  return (
    <DxcInset space="2rem">
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
  useDxcToast
};

export default { code, scope };
