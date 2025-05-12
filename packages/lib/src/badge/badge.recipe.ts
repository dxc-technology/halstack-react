import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "Badge component",
  base: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    fontStyle: "normal",
    fontWeight: "var(--typography-label-semibold)",
    fontFamily: "var(--typography-font-family)",
  },
  variants: {
    mode: {
      contextual: {
        gap: "var(--spacing-gap-xxs)",
      },
      notification: {},
    },
    size: {
      small: {
        height: "var(--height-xs)",
        minWidth: "20px",
        fontSize: "var(--typography-label-s)",
        borderRadius: "var(--border-radius-l)",
      },
      medium: {
        height: "var(--height-s)",
        minWidth: "24px",
        fontSize: "var(--typography-label-m)",
        borderRadius: "var(--border-radius-l)",
      },
      large: {
        height: "var(--height-m)",
        minWidth: "32px",
        fontSize: "var(--typography-label-xl)",
        borderRadius: "var(--border-radius-xl)",
      },
    },
    colorScheme: {
      grey: {
        backgroundColor: "var(--color-bg-neutral-light)",
        color: "var(--color-fg-neutral-strongest)",
      },
      blue: {
        backgroundColor: "var(--color-bg-secondary-lighter)",
        color: "var(--color-fg-secondary-stronger)",
      },
      green: {
        backgroundColor: "var(--color-bg-success-lighter)",
        color: "var(--color-fg-success-stronger)",
      },
      orange: {
        backgroundColor: "var(--color-bg-warning-lighter)",
        color: "var(--color-fg-warning-stronger)",
      },
      red: {
        backgroundColor: "var(--color-bg-error-lighter)",
        color: "var(--color-fg-error-stronger)",
      },
      yellow: {
        backgroundColor: "var(--color-bg-yellow-light)",
        color: "var(--color-fg-neutral-yellow-dark)",
      },
      purple: {
        backgroundColor: "var(--color-bg-primary-lighter)",
        color: "var(--color-fg-primary-stronger)",
      },
      notification: {
        backgroundColor: "var(--color-bg-error-strong)",
        color: "var(--color-fg-neutral-bright)",
      },
    },
    labelled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      mode: "notification",
      labelled: true,
      css: {
        padding: "var(--spacing-padding-none) var(--spacing-padding-xxs)",
      },
    },
    {
      mode: "notification",
      labelled: false,
      css: {
        padding: "var(--spacing-padding-none)",
      },
    },
    {
      mode: "contextual",
      size: "small",
      css: {
        padding: "var(--spacing-padding-xxs)",
      },
    },
    {
      mode: "contextual",
      size: ["medium", "large"],
      css: {
        padding: "var(--spacing-padding-xxs) var(--spacing-padding-xs)",
      },
    },
  ],
  defaultVariants: {
    size: "medium",
    mode: "contextual",
    labelled: true,
    colorScheme: "grey",
  },
});
