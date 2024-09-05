import { useContext } from "react";
import { ToastContext } from "./ToastsQueue";
import { ToastType, DefaultToast, Semantic, SemanticToast } from "./types";

const useToast = () => {
  const { add } = useContext(ToastContext);

  const show = <T extends ToastType>(toast: T, semantic: Semantic) => add(toast, semantic);

  return {
    default: (toast: DefaultToast) => {
      show(toast, "default");
    },
    info: (toast: SemanticToast) => {
      show(toast, "info");
    },
    success: (toast: SemanticToast) => {
      show(toast, "success");
    },
    warning: (toast: SemanticToast) => {
      show(toast, "warning");
    },
    loading: (toast: SemanticToast) => show({ ...toast, loading: true }, "info"),
  };
};

export default useToast;
