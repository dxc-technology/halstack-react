import { useContext } from "react";
import { ToastContext } from "./ToastsQueue";
import { ToastType, DefaultToast, Semantic, SemanticToast, LoadingToast } from "./types";

const useDxcToast = () => {
  const { add } = useContext(ToastContext);

  const show = <T extends ToastType>(toast: T, semantic: Semantic) => add(toast, semantic);

  return {
    default: (toast: DefaultToast) => {
      show(toast, "default");
    },
    info: (toast: SemanticToast) => {
      show(toast, "info");
    },
    loading: (toast: Omit<LoadingToast, "loading">) => show({ ...toast, loading: true }, "info"),
    success: (toast: SemanticToast) => {
      show(toast, "success");
    },
    warning: (toast: SemanticToast) => {
      show(toast, "warning");
    },
  };
};

export default useDxcToast;
