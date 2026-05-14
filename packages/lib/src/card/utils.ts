import CardPropsType from "./types";

export const getCardStyles = (mode: CardPropsType["mode"], interactive: boolean, selected?: boolean) => {
  let hover = "";
  let focus = "";
  let active = "";

  const commonStyles = `
        ${mode === "elevated" ? `box-shadow: var(--shadow-100); border: none;` : ``}
        ${
          mode === "outlined" && !selected
            ? `border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-light);`
            : selected
              ? `border: var(--border-width-m) var(--border-style-default) var(--border-color-primary-strong);`
              : ``
        }
        ${interactive ? "cursor: pointer;" : ""}
    `;
  if (interactive && !selected) {
    if (mode === "elevated") {
      hover = `box-shadow: var(--shadow-300);`;
      focus = `box-shadow: var(--shadow-100); outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: calc(var(--border-width-m) * -1);`;
      active = `box-shadow: var(--shadow-100); outline: none;`;
    } else if (mode === "outlined") {
      hover = `border-color: var(--border-color-neutral-medium);`;
      focus = `outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: calc(var(--border-width-m) * -1);`;
      active = `border-color: var(--border-color-neutral-strong); outline: none;`;
    }
  } else if (selected) {
    hover = `border-color: var(--border-color-primary-stronger);`;
    focus = `outline: var(--border-width-l) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: calc(var(--border-width-l) * -1);`;
    active = `border-color: var(--border-color-primary-strong); outline: none;`;
  }

  return `
        ${commonStyles}
        &:hover { ${hover} }
        &:focus { ${focus} }
        &:active { ${active} }
    `;
};
