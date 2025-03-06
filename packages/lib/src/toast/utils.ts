import ToastPropsType from "./types";

export const getSemantic = (semantic: ToastPropsType["semantic"]) => {
  switch (semantic) {
    case "default":
      return {
        primaryColor: "var(--border-color-primary-stronger)",
        secondaryColor: "var(--color-bg-primary-lighter)",
        icon: "" 
      };
    case "info":
      return {
        primaryColor: "var(--border-color-secondary-strong)",
        secondaryColor: "var(--color-bg-secondary-lighter)",
        icon: "filled_info",
      };
    case "success":
      return {
        primaryColor: "var(--border-color-success-medium)",
        secondaryColor: "var(--color-bg-success-lighter)",
        icon: "filled_check_circle",
      };
    case "warning":
      return {
        primaryColor: "var(--border-color-warning-medium)",
        secondaryColor: "var(--color-bg-warning-lighter)",
        icon: "filled_warning",
      };
  }
};