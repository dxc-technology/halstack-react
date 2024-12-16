import { ReactNode } from "react";

type SVG = ReactNode & SVGProps<SVGSVGElement>;
type Action = {
  icon?: string | SVG;
  label: string;
  onClick: () => void;
};

type CommonProps = {
  action?: Action;
  message: string;
};
type DefaultToast = CommonProps & {
  icon?: string | SVG;
};
type LoadingToast = CommonProps & {
  loading: boolean;
};
type SemanticToast = CommonProps & {
  hideSemanticIcon?: boolean;
};
type ToastType = DefaultToast | LoadingToast | SemanticToast;

type Semantic = "default" | "info" | "success" | "warning";

type QueuedToast = ToastType & {
  id: string;
  semantic: Semantic;
};

type ToastContextType = {
  add: (toast: ToastType, semantic: Semantic) => () => void;
};

type ToastPropsType = {
  action?: Action;
  duration: number;
  icon?: string | SVG;
  loading?: boolean;
  message: string;
  onClear: () => void;
  semantic: Semantic;
  hideSemanticIcon?: boolean;
};

type ToastsQueuePropsType = { duration?: number; children: ReactNode };

export default ToastPropsType;
export type {
  CommonProps,
  DefaultToast,
  LoadingToast,
  QueuedToast,
  Semantic,
  SemanticToast,
  ToastContextType,
  ToastsQueuePropsType,
  ToastType,
};
