import ChipPropsType from "./types";

export const getChipStyles = (mode: ChipPropsType["mode"], selected?: boolean) => {
  let enabled = "";
  let hover = "";
  let active = "";
  let disabled = "";

  const commonStyles = `
    &:focus {
      border-color: transparent;
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    }`;

  switch (mode) {
    case "selectable":
      if (selected) {
        enabled = `background-color: var(--color-bg-primary-strong);
        border-color: transparent;
        color: var(--color-fg-neutral-bright);`;
        hover = `background-color: var(--color-bg-primary-stronger);`;
        active = `background-color: var(--color-bg-primary-stronger);`;
        disabled = `background-color: var(--color-bg-neutral-lighter);
        border-color: var(--border-color-neutral-medium);
        color: var(--color-fg-neutral-medium);
        cursor: not-allowed;`;
      } else {
        enabled = `background-color: var(--color-bg-primary-lightest);
        border-color: var(--border-color-primary-stronger);
        color: var(--color-fg-primary-strongest);`;
        hover = `background-color: var(--color-bg-primary-strong);
        border-color: transparent;
        color: var(--color-fg-neutral-bright);`;
        active = `background-color: var(--color-bg-primary-stronger);
        border-color: transparent;
        color: var(--color-fg-neutral-bright);`;
        disabled = `background-color: var(--color-bg-neutral-lighter);
        border-color: var(--border-color-neutral-medium);
        color: var(--color-fg-neutral-medium);
        cursor: not-allowed;`;
      }
      return `${commonStyles}
        ${enabled}
        &:hover:enabled {
          ${hover}
        }
        &:active:enabled {
          ${active}
        }
        &:disabled {
          ${disabled}
        }`;
    case "dismissible":
      enabled = `background-color: var(--color-bg-primary-lightest);
      border-color: var(--border-color-neutral-lighter);
      color: var(--color-fg-neutral-strongest);`;
      return `${enabled}`;
  }
};
