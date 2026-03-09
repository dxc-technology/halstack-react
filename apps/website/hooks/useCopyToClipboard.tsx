import { useToast } from "@dxc-technology/halstack-react";

const useCopyToClipboard = () => {
  const toast = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success({ message: "Code copied to the clipboard." });
      })
      .catch(() => {
        toast.warning({ message: "Failed to copy the text to the clipboard." });
      });
  };

  return handleCopy;
};

export default useCopyToClipboard;
