import { useContext, useMemo } from "react";
import ToastContext from "./ToastContext";
import { DefaultToast, SemanticToast, LoadingToast } from "./types";

export default function useToast() {
  const add = useContext(ToastContext);

  const toast = useMemo(
    () => ({
      default: (toast: DefaultToast) => add?.(toast, "default"),
      success: (toast: SemanticToast) => add?.(toast, "success"),
      warning: (toast: SemanticToast) => add?.(toast, "warning"),
      info: (toast: SemanticToast) => add?.(toast, "info"),
      loading: (toast: Omit<LoadingToast, "loading">) => add?.({ ...toast, loading: true } as LoadingToast, "info"),
    }),
    [add]
  );
  
  return toast;
}
