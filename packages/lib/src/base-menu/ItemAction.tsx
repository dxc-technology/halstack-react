import { forwardRef, memo } from "react";
import styled from "@emotion/styled";
import { ItemActionProps } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";
import { useItemAction } from "./useItemAction";

const Action = styled.a<{
  depthLevel: ItemActionProps["depthLevel"];
  selected: ItemActionProps["selected"];
  displayGroupLines: boolean;
  responsiveView?: boolean;
}>`
  box-sizing: content-box;
  border: none;
  border-radius: var(--border-radius-s);
  ${({ displayGroupLines, depthLevel, responsiveView }) => `
    ${!responsiveView ? `padding: var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xxs) calc(var(--spacing-padding-xs) + ${!displayGroupLines ? depthLevel : 0} * var(--spacing-padding-l))` : "padding: var(--spacing-padding-xxs) var(--spacing-padding-none)"};
    ${displayGroupLines && depthLevel > 0 ? "margin-left: var(--spacing-padding-xs);" : ""}
  `}
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-m);
  justify-content: ${({ responsiveView }) => (responsiveView ? "center" : "space-between")};
  background-color: ${({ selected }) => (selected ? "var(--color-bg-primary-lighter)" : "transparent")};
  height: var(--height-s);
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:active {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  overflow: hidden;
`;

const Icon = styled.span`
  display: flex;
  color: var(--color-fg-neutral-dark);
  font-size: var(--height-xxs);
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const Text = styled.span<{ selected: ItemActionProps["selected"] }>`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: ${({ selected }) => (selected ? "var(--typography-label-semibold)" : "var(--typography-label-regular)")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Control = styled.span`
  display: flex;
  align-items: center;
  padding: var(--spacing-padding-none);
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-gap-s);
`;

const ItemAction = memo(
  forwardRef<HTMLAnchorElement, ItemActionProps>((props, ref) => {
    const {
      hasTooltip,
      modifiedBadge,
      displayControlsAfter,
      responsiveView,
      displayGroupLines,
      handleTextMouseEnter,
      getWrapper,
    } = useItemAction(props);
    const { depthLevel, selected, href, label, icon, collapseIcon, "aria-pressed": ariaPressed, ...rest } = props;

    return getWrapper(
      <Action
        ref={ref}
        as={href ? "a" : "button"}
        role={href ? "link" : "button"}
        depthLevel={depthLevel}
        selected={selected}
        displayGroupLines={!!displayGroupLines}
        responsiveView={responsiveView}
        {...(href && { href })}
        {...rest}
        aria-pressed={!href ? ariaPressed : undefined}
      >
        <TooltipWrapper condition={hasTooltip} label={label}>
          <Label aria-label={responsiveView ? label : undefined}>
            {!displayControlsAfter && collapseIcon && (
              <Control>
                <Icon>{collapseIcon}</Icon>
              </Control>
            )}
            {(icon || responsiveView) && (
              <TooltipWrapper condition={responsiveView} label={label}>
                <Icon>
                  {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon ? icon : <DxcIcon icon="topic" />}
                </Icon>
              </TooltipWrapper>
            )}
            {!responsiveView && (
              <Text selected={props.selected} onMouseEnter={handleTextMouseEnter}>
                {label}
              </Text>
            )}
          </Label>
          {!responsiveView && (modifiedBadge || (displayControlsAfter && collapseIcon)) && (
            <Control>
              {modifiedBadge}
              {displayControlsAfter && collapseIcon && <Icon>{collapseIcon}</Icon>}
            </Control>
          )}
        </TooltipWrapper>
      </Action>
    );
    // return getWrapper(
    //   <TooltipWrapper condition={hasTooltip} label={label}>
    //     <Action
    //       ref={ref}
    //       as={href ? "a" : "button"}
    //       role={href ? "link" : "button"}
    //       depthLevel={depthLevel}
    //       selected={selected}
    //       displayGroupLines={!!displayGroupLines}
    //       responsiveView={responsiveView}
    //       {...(href && { href })}
    //       {...rest}
    //       aria-pressed={!href ? ariaPressed : undefined}
    //     >
    //       <Label aria-label={responsiveView ? label : undefined}>
    //         {!displayControlsAfter && collapseIcon && (
    //           <Control>
    //             <Icon>{collapseIcon}</Icon>
    //           </Control>
    //         )}
    //         {(icon || responsiveView) && (
    //           <TooltipWrapper condition={responsiveView} label={label}>
    //             <Icon>
    //               {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon ? icon : <DxcIcon icon="topic" />}
    //             </Icon>
    //           </TooltipWrapper>
    //         )}
    //         {!responsiveView && (
    //           <Text selected={props.selected} onMouseEnter={handleTextMouseEnter}>
    //             {label}
    //           </Text>
    //         )}
    //       </Label>
    //       {!responsiveView && (modifiedBadge || (displayControlsAfter && collapseIcon)) && (
    //         <Control>
    //           {modifiedBadge}
    //           {displayControlsAfter && collapseIcon && <Icon>{collapseIcon}</Icon>}
    //         </Control>
    //       )}
    //     </Action>
    //   </TooltipWrapper>
    // );
  })
);

ItemAction.displayName = "ItemAction";

export default ItemAction;
