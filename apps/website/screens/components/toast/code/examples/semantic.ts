import { DxcButton, DxcFlex, DxcInset, useDxcToast } from "@dxc-technology/halstack-react";

const code = `() => {
  const toast = useDxcToast();

  return (
    <DxcInset space="2rem">
      <DxcFlex gap="1rem">
        <DxcButton 
          label="Show information toast"
          semantic="info"
          onClick={() => {
            toast.info({ message: "This is a information message." });
          }}
        />
        <DxcButton 
          label="Show success toast" 
          semantic="success"
          onClick={() => {
            toast.success({ message: "This is a success message." });
          }} 
        />
        <DxcButton 
          label="Show warning toast"
          semantic="warning"
          onClick={() => {
            toast.warning({ message: "This is a warning message." });
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
  useDxcToast,
};

export default { code, scope };
