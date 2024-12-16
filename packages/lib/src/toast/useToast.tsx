import { useContext, useMemo } from "react";
import { ToastContext } from "./ToastsQueue";
import { DefaultToast, SemanticToast, LoadingToast } from "./types";

const useToast = () => {
  const { add } = useContext(ToastContext) ?? {};

  const toast = useMemo(
    () => ({
      default: (defaultToast: DefaultToast) => add?.(defaultToast, "default"),
      success: (semanticToast: SemanticToast) => add?.(semanticToast, "success"),
      warning: (semanticToast: SemanticToast) => add?.(semanticToast, "warning"),
      info: (semanticToast: SemanticToast) => add?.(semanticToast, "info"),
      loading: (loadingToast: Omit<LoadingToast, "loading">) => add?.({ ...loadingToast, loading: true } as LoadingToast, "info"),
    }),
    [add]
  );

  return toast;
};

export default useToast;
