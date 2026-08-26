import CardPropsType from "./types";

const calculateSize = (size?: CardPropsType["size"]) => {
  return `width: ${size?.width === "fillParent" ? "100%" : "fit-content"};
    height: ${size?.height === "fillParent" ? "100%" : "fit-content"};`;
};
export const getCardStyles = (mode: CardPropsType["mode"], interactive: boolean, size?: CardPropsType["size"]) => {
  let hover = "";
  let focus = "";
  let active = "";

  const commonStyles = `
    ${mode === "elevated" ? `box-shadow: var(--shadow-100); border: none;` : ``}
    ${interactive ? "cursor: pointer;" : ""}
    ${calculateSize(size)}
  `;
  if (mode === "elevated") {
    hover = `box-shadow: var(--shadow-300);`;
    focus = `box-shadow: var(--shadow-100); 
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);`;
    active = `box-shadow: var(--shadow-100);`;
  } else if (mode === "outlined") {
    hover = `border-width: var(--border-width-m); border-color: var(--border-color-neutral-medium);`;
    focus = `border-width: var(--border-width-m); 
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);`;
    active = `border-width: var(--border-width-m); border-color: var(--border-color-neutral-strong);`;
  }

  return `
        ${commonStyles}
        &:hover { ${hover} }
        &:focus { ${focus} }
        &:active { ${active} }
    `;
};

export const getSelectableWrapperStyles = (selected: boolean, mode: CardPropsType["mode"]) => {
  let hover = "";
  let focus = "";
  let active = "";

  const borderWidth = selected
    ? "var(--border-width-m)"
    : mode === "outlined"
      ? "var(--border-width-s)"
      : "var(--border-width-none)";

  const commonStyles = `
    ${
      mode === "outlined" && !selected
        ? `outline: ${borderWidth} var(--border-style-default) var(--border-color-neutral-light);`
        : ""
    }
  `;

  if (!selected) {
    if (mode === "outlined") {
      hover = `outline-width: var(--border-width-m); outline-color: var(--border-color-neutral-medium);`;
      focus = `outline-width: var(--border-width-m); 
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);`;
      active = `outline-width: var(--border-width-m); outline-color: var(--border-color-neutral-strong);`;
    }
  } else if (selected) {
    hover = `outline-color: var(--border-color-primary-stronger);`;
    focus = `outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);`;
    active = `outline-color: var(--border-color-primary-strong);`;
  }

  return `
        ${commonStyles}
        &:hover { ${hover} }
        &:focus { ${focus} }
        &:active { ${active} }
        outline: ${selected ? "var(--border-width-m) var(--border-style-default) var(--border-color-primary-strong)" : ""};
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
