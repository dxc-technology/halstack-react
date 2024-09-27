import { useContext, useMemo } from "react";
import { ToastContext } from "./ToastsQueue";
import { DefaultToast, SemanticToast, LoadingToast } from "./types";

const useToast = () => {
  const { add } = useContext(ToastContext);

  const toast = useMemo(
    () => ({
      default: (toast: DefaultToast) => add(toast, "default"),
      success: (toast: SemanticToast) => add(toast, "success"),
      warning: (toast: SemanticToast) => add(toast, "warning"),
      info: (toast: SemanticToast) => add(toast, "info"),
      loading: (toast: LoadingToast) => add({ ...toast, loading: true }, "info"),
    }),
    [add]
  );

  return toast;
};

export default useToast;
