type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;
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
type SuccessToast = CommonProps & {
  showSemanticIcon?: boolean;
};
type InformationToast = CommonProps & {
  loading?: boolean;
  showSemanticIcon?: boolean;
};
type WarningToast = CommonProps & {
  showSemanticIcon?: boolean;
};

type ToastsQueuePropsType = { duration?: number; position?: "top" | "bottom"; children: React.ReactNode };

type Semantic = "default" | "info" | "success" | "warning";

type ToastType = (DefaultToast | InformationToast | SuccessToast | WarningToast) & { semantic: Semantic };

type ToastContextType = {
  push: (toast: ToastType) => void;
  pop: () => void;
};

type ToastPropsType = {
  action?: Action;
  icon?: string | SVG;
  loading?: boolean;
  message: string;
  onClear: () => void;
  semantic: Semantic;
  showSemanticIcon?: boolean;
};

export default ToastPropsType;

export type {
  CommonProps,
  DefaultToast,
  InformationToast,
  Semantic,
  SuccessToast,
  ToastContextType,
  ToastsQueuePropsType,
  ToastType,
  WarningToast,
};
