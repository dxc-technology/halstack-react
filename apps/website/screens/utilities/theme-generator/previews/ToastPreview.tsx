import { DxcButton, DxcFlex, useToast, DxcToastsQueue } from "@dxc-technology/halstack-react";

const ToastButtons = () => {
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success({ message: "Success! Operation completed." });
  };

  const showWarningToast = () => {
    toast.warning({ message: "Warning! Please review this." });
  };

  const showInfoToast = () => {
    toast.info({ message: "Info: Here's some information." });
  };

  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcButton label="Success Toast" onClick={showSuccessToast} mode="primary" />
      <DxcButton label="Warning Toast" onClick={showWarningToast} mode="primary" semantic="warning" />
      <DxcButton label="Info Toast" onClick={showInfoToast} mode="primary" />
    </DxcFlex>
  );
};

// Wrapper component with its own ToastsQueue
// This ensures toasts render within the themed HalstackProvider in PreviewArea
const ToastPreview = () => {
  return (
    <DxcToastsQueue>
      <ToastButtons />
    </DxcToastsQueue>
  );
};

export default ToastPreview;
