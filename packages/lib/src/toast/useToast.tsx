import { useContext } from "react";
import { ToastContext } from "./ToastsQueue";
import { CommonProps, DefaultToast, InformationToast, Semantic, SuccessToast, WarningToast } from "./types";

const useToast = () => {
  const { push } = useContext(ToastContext);
  const show = <T extends CommonProps>(toast: T, semantic: Semantic) => {
    push({ ...toast, semantic });
  };

  return {
    default: (toast: DefaultToast) => show(toast, "default"),
    info: (toast: InformationToast) => show(toast, "info"),
    success: (toast: SuccessToast) => show(toast, "success"),
    warning: (toast: WarningToast) => show(toast, "warning"),
  };
};

export default useToast;
