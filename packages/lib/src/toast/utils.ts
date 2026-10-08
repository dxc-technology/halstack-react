import ToastPropsType, { QueuedToast } from "./types";

export default function getSemantic(semantic: ToastPropsType["semantic"]) {
  switch (semantic) {
    case "default":
      return {
        primaryColor: "var(--color-fg-primary-stronger)",
        borderColor: "var(--border-color-primary-stronger)",
        secondaryColor: "var(--color-bg-primary-lighter)",
        icon: "",
      };
    case "info":
      return {
        primaryColor: "var(--color-fg-info-strong)",
        borderColor: "var(--border-color-info-strong)",
        secondaryColor: "var(--color-bg-info-lighter)",
        icon: "filled_info",
      };
    case "success":
      return {
        primaryColor: "var(--color-fg-success-medium)",
        borderColor: "var(--border-color-success-medium)",
        secondaryColor: "var(--color-bg-success-lighter)",
        icon: "filled_check_circle",
      };
    case "warning":
      return {
        primaryColor: "var(--color-fg-warning-strong)",
        borderColor: "var(--border-color-warning-strong)",
        secondaryColor: "var(--color-bg-warning-lighter)",
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
