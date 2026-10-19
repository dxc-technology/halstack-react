import { ReactNode } from "react";
import { SVG, PrettifyTypes } from "../common/types";

type Action = {
  /**
   * The icon of the action. It can be a string with the name of the icon or an SVG component.
   */
  icon?: string | SVG;
  /**
   * The label of the action.
   */
  label: string;
  /**
   * The function that will be executed when the user clicks on the action button.
   */
  onClick: () => void;
};

type CommonProps = {
  /**
   * Tertiary button which performs a custom action, specified by the user.
   */
  action?: Action;
  /**
   * Message to be displayed as a toast.
   */
  message: string;
};
type DefaultToast = PrettifyTypes<
  CommonProps & {
    /**
     * Material Symbol name or SVG element as the icon that will be placed next to the panel label.
     * When using Material Symbols, replace spaces with underscores.
     * By default they are outlined if you want it to be filled prefix the symbol name with "filled_".
     */
    icon?: string | SVG;
  }
>;
type LoadingToast = PrettifyTypes<
  CommonProps & {
    loading: boolean;
  }
>;
type SemanticToast = PrettifyTypes<
  CommonProps & {
    /**
     * Flag that allows to hide the semantic icon of the toast.
     */
    hideSemanticIcon?: boolean;
  }
>;
type ToastType = DefaultToast | LoadingToast | SemanticToast;

type Semantic = "default" | "info" | "success" | "warning";

type QueuedToast = PrettifyTypes<
  ToastType & {
    id: string;
    semantic: Semantic;
  }
>;

type ToastContext = (toast: ToastType, semantic: Semantic) => () => void;

type ToastProps = {
  action?: Action;
  duration: number;
  icon?: string | SVG;
  loading?: boolean;
  message: string;
  onClear: () => void;
  semantic: Semantic;
  hideSemanticIcon?: boolean;
};

type ToastsQueueProps = {
  /**
   * Tree of components from which the useToast hook can be triggered.
   */
  children: ReactNode;
  /**
   * Duration in milliseconds before a toast automatically hides itself.
   * The range goes from 3000ms to 5000ms, any other value will not be taken into consideration.
   */
  duration?: number;
};

export type { ToastProps as default };
export type {
  DefaultToast,
  LoadingToast,
  QueuedToast,
  Semantic,
  SemanticToast,
  ToastContext,
  ToastsQueueProps,
  ToastType,
  ToastProps,
};
