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
  const showLoadingToast = () => {
    toast.loading({ message: "Loading: Please wait." });
  };

  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcButton label="Success Toast" onClick={showSuccessToast} mode="primary" semantic="success" />
      <DxcButton label="Warning Toast" onClick={showWarningToast} mode="primary" semantic="warning" />
      <DxcButton label="Info Toast" onClick={showInfoToast} mode="primary" semantic="info" />
      <DxcButton label="Loading Toast" onClick={showLoadingToast} mode="secondary" semantic="info" />
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
