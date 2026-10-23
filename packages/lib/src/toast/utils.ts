import { ToastProps, QueuedToast } from "./types";

export default function getSemantic(semantic: ToastProps["semantic"]) {
  switch (semantic) {
    case "default":
      return {
        primaryColor: "var(--color-fg-primary-stronger)",
        secondaryColor: "var(--color-bg-primary-lighter)",
        borderColor: "var(--border-color-primary-stronger)",
        icon: "",
      };
    case "info":
      return {
        primaryColor: "var(--color-fg-info-strong)",
        secondaryColor: "var(--color-bg-info-lighter)",
        borderColor: "var(--border-color-info-strong)",
        icon: "filled_info",
      };
    case "success":
      return {
        primaryColor: "var(--color-fg-success-medium)",
        secondaryColor: "var(--color-bg-success-lighter)",
        borderColor: "var(--border-color-success-medium)",
        icon: "filled_check_circle",
      };
    case "warning":
      return {
        primaryColor: "var(--color-fg-warning-strong)",
        secondaryColor: "var(--color-bg-warning-lighter)",
        borderColor: "var(--border-color-warning-strong)",
        icon: "filled_warning",
      };
  }
}

const idExists = (id: string, toasts: QueuedToast[]) => toasts.some((toast) => toast.id === id);

export function generateUniqueToastId(toasts: QueuedToast[]) {
  let id = "";
  do {
    id = `${performance.now()}-${Math.random().toString(36).slice(2, 9)}`;
  } while (idExists(id, toasts));
  return id;
}
