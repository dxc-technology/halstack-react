import CardPropsType from "./types";

const calculateSize = (size?: CardPropsType["size"], selected?: boolean, borderWidth?: string, outlined?: boolean) => {
  return `width: ${size?.width === "fillParent" ? "100%" : selected || outlined ? `calc-size(fit-content, size - (${borderWidth} * 2))` : "fit-content"};
    height: ${size?.height === "fillParent" ? "100%" : selected || outlined ? `calc-size(fit-content, size - (${borderWidth} * 2))` : "fit-content"};`;
};
export const getCardStyles = (
  mode: CardPropsType["mode"],
  interactive: boolean,
  selected?: boolean,
  size?: CardPropsType["size"]
) => {
  let hover = "";
  let focus = "";
  let active = "";
  const borderWidth = selected
    ? "var(--border-width-m)"
    : mode === "outlined"
      ? "var(--border-width-s)"
      : "var(--border-width-none)";

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
    ${calculateSize(size, selected, borderWidth, mode === "outlined")}
  `;
  if (interactive && !selected) {
    if (mode === "elevated") {
      hover = `box-shadow: var(--shadow-300);`;
      focus = `box-shadow: var(--shadow-100); 
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: calc(var(--border-width-m) * -1);`;
      active = `box-shadow: var(--shadow-100);`;
    } else if (mode === "outlined") {
      hover = `border-width: var(--border-width-m); border-color: var(--border-color-neutral-medium); ${calculateSize(size, selected, "var(--border-width-m)", true)}`;
      focus = `border-width: var(--border-width-m); 
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); 
        ${calculateSize(size, selected, "var(--border-width-m)", true)}`;
      active = `border-width: var(--border-width-m); border-color: var(--border-color-neutral-strong); ${calculateSize(size, selected, "var(--border-width-m)", true)}`;
    }
  } else if (selected) {
    hover = `border-color: var(--border-color-primary-stronger);`;
    focus = `outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);`;
    active = `border-color: var(--border-color-primary-strong);`;
  }

  return `
        ${commonStyles}
        &:hover { ${hover} }
        &:focus { ${focus} }
        &:active { ${active} }
    `;
};

export const handleEvent = (
  event: React.KeyboardEvent | React.MouseEvent,
  onClick?: CardPropsType["onClick"],
  onSelectionChange?: CardPropsType["onSelectionChange"],
  internalSelected?: boolean,
  setInternalSelected?: React.Dispatch<React.SetStateAction<boolean>>,
  selected?: boolean,
  selectable?: boolean
) => {
  const eventType = event.type;
  const isKeyDown =
    eventType === "keydown" &&
    ((event as React.KeyboardEvent).key === "Enter" || (event as React.KeyboardEvent).key === " ");
  if (isKeyDown && selectable) {
    event.preventDefault();
  }
  if (isKeyDown || eventType === "click") {
    if (typeof onClick === "function") {
      onClick(event);
    }
    if (selectable) {
      if (typeof onSelectionChange === "function") {
        onSelectionChange(!internalSelected);
      }
      if ((selected === null || selected === undefined) && typeof setInternalSelected === "function") {
        setInternalSelected(!internalSelected);
      }
    }
  }
};

export const emptyIconSizes = { small: "var(--height-m)", medium: "var(--height-xl)", large: "var(--height-xxxl)" };
