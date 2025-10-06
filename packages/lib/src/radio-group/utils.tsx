export function getRadioInputStyles(
  disabled: boolean,
  error: boolean,
  readOnly: boolean,
  status: "default" | "hover" | "active"
) {
  switch (true) {
    case disabled:
      return "var(--color-fg-neutral-medium)";
    case error:
      return status === "default"
        ? "var(--color-fg-error-medium)"
        : status === "hover"
          ? "var(--color-fg-error-strong)"
          : "var(--color-fg-error-stronger)";
    case readOnly:
      return status === "default"
        ? "var(--color-fg-neutral-medium)"
        : status === "hover"
          ? "var(--color-fg-neutral-strong)"
          : "var(--color-fg-neutral-stronger)";
    default:
      return status === "default"
        ? "var(--color-fg-primary-strong)"
        : status === "hover"
          ? "var(--color-fg-primary-stronger)"
          : "var(--color-fg-primary-stronger)";
  }
}

export const icons = {
  checked: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5.00194 12C5.00194 15.8649 8.13508 18.9981 12 18.9981C15.8649 18.9981 18.9981 15.8649 18.9981 12C18.9981 8.13508 15.8649 5.00194 12 5.00194C8.13508 5.00194 5.00194 8.13508 5.00194 12Z"
        fill="currentColor"
      />
      <path
        d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        fill="currentColor"
      />
    </svg>
  ),
  unchecked: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5.00194 12C5.00194 15.8649 8.13508 18.9981 12 18.9981C15.8649 18.9981 18.9981 15.8649 18.9981 12C18.9981 8.13508 15.8649 5.00194 12 5.00194C8.13508 5.00194 5.00194 8.13508 5.00194 12Z"
        fill="currentColor"
      />
    </svg>
  ),
};
