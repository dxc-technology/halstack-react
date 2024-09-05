import { useContext } from "react";
import { ToastContext } from "./ToastsQueue";
import { CommonProps, DefaultToast, InformationToast, Semantic, SuccessToast, WarningToast } from "./types";

const useToast = () => {
  const { add, removeAll } = useContext(ToastContext);
  const show = <T extends CommonProps>(toast: T, semantic: Semantic) => {
    add(toast, semantic);
  };

  return {
    default: (toast: DefaultToast) => show(toast, "default"),
    info: (toast: InformationToast) => show(toast, "info"),
    success: (toast: SuccessToast) => show(toast, "success"),
    warning: (toast: WarningToast) => show(toast, "warning"),
    destroy: removeAll,
  };
};

export default useToast;
