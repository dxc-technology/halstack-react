import CardPropsType from "./types";

export const getCardStyles = (
  mode: CardPropsType["mode"],
  interactive: boolean,
  selected?: boolean,
  size?: CardPropsType["size"]
) => {
  let hover = "";
  let focus = "";
  let active = "";
  const borderWidth = selected ? "var(--border-width-m)" : mode === "outlined" ? "var(--border-width-s)" : "0";

  const commonStyles = `
    ${mode === "elevated" ? `box-shadow: var(--shadow-100); border: none;` : ``}
    ${
      mode === "outlined" && !selected
        ? `border: ${borderWidth} var(--border-style-default) var(--border-color-neutral-light);`
        : selected
          ? `border: ${borderWidth} var(--border-style-default) var(--border-color-primary-strong);`
          : ``
    }
    ${interactive ? "cursor: pointer;" : ""}
    width: ${size?.width === "fillParent" ? "100%" : selected ? `calc-size(fit-content, size - ${borderWidth} * 2)` : "fit-content"};
    height: ${size?.height === "fillParent" ? "100%" : selected ? `calc-size(fit-content, size - ${borderWidth} * 2)` : "fit-content"};
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

export const handleKeyDown = (
  event: React.KeyboardEvent,
  onClick?: CardPropsType["onClick"],
  onChange?: CardPropsType["onChange"],
  selected?: boolean,
  selectable?: boolean
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (typeof onClick === "function") {
      onClick(event);
    }
    if (selectable && typeof onChange === "function") {
      onChange(!selected);
    }
  }
};

export const emptyIconSizes = { small: "var(--height-m)", medium: "var(--height-xl)", large: "var(--height-xxxl)" };
