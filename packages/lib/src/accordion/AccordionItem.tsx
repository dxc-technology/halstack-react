import { ReactElement, useContext, useId, cloneElement, useMemo } from "react";
import styled from "styled-components";
import HalstackContext from "../HalstackContext";
import { AccordionItemProps } from "./types";
import DxcIcon from "../icon/Icon";
import DxcFlex from "../flex/Flex";
import DxcContainer from "../container/Container";
import React from "react";
import AccordionContext from "./AccordionContext";

const AccordionItem = ({
  label = "",
  subLabel = "",
  badge,
  statusLight,
  icon,
  assistiveText = "",
  disabled = false,
  children,
  tabIndex = 0,
}: AccordionItemProps): JSX.Element => {
  const id = useId();
  const { activeIndex, handlerActiveChange, index, independent } = useContext(AccordionContext) ?? {};
  const isItemExpanded = useMemo(() => {
    return independent
      ? activeIndex === index
      : Array.isArray(activeIndex) && index !== undefined && activeIndex.includes(index);
  }, [independent, activeIndex, index]);

  const handleAccordionState = () => {
    if (index !== undefined) handlerActiveChange?.(index);
  };

  return (
    <AccordionContainer>
      <AccordionTrigger
        id={`accordion-${id}`}
        onClick={disabled ? undefined : handleAccordionState}
        disabled={disabled}
        tabIndex={disabled ? -1 : tabIndex}
        aria-expanded={isItemExpanded}
        aria-controls={`accordion-panel-${id}`}
      >
        <DxcContainer width="100%" height="100%">
          <DxcFlex>
            <LeftSideContainer>
              {(icon || badge?.position === "before") && (
                <OptionalElement>
                  {icon ? (
                    <IconContainer disabled={disabled}>
                      {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
                    </IconContainer>
                  ) : (
                    <StatusContainer subLabel={subLabel}>
                      {disabled ? cloneElement(badge?.element as ReactElement, { color: "grey" }) : badge?.element}
                    </StatusContainer>
                  )}
                </OptionalElement>
              )}
              <LabelsContainer>
                <AccordionLabel disabled={disabled}>{label}</AccordionLabel>
                {subLabel && <SubLabel disabled={disabled}>{subLabel}</SubLabel>}
              </LabelsContainer>
            </LeftSideContainer>
            <RightSideContainer>
              {assistiveText && (
                <AssistiveText disabled={disabled} subLabel={subLabel}>
                  {assistiveText}
                </AssistiveText>
              )}
              {badge && badge?.position === "after" && !assistiveText && (
                <StatusContainer subLabel={subLabel}>
                  {disabled ? React.cloneElement(badge.element as ReactElement, { color: "grey" }) : badge.element}
                </StatusContainer>
              )}
              {badge?.position !== "after" && statusLight && !assistiveText && (
                <StatusContainer subLabel={subLabel}>
                  {disabled ? React.cloneElement(statusLight as ReactElement, { mode: "default" }) : statusLight}
                </StatusContainer>
              )}
              <CollapseIndicator disabled={disabled}>
                <DxcIcon icon={isItemExpanded ? "expand_less" : "expand_more"} />
              </CollapseIndicator>
            </RightSideContainer>
          </DxcFlex>
        </DxcContainer>
      </AccordionTrigger>
      {isItemExpanded && (
        <AccordionPanel id={`accordion-panel-${id}`} role="region" aria-labelledby={`accordion-${id}`}>
          {children}
        </AccordionPanel>
      )}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-neutral-lightest);
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread)
    var(--shadow-light);
  min-width: 280px;
  width: 100%;
`;

const AccordionTrigger = styled.button`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-gap-l);
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-xs) var(--spacing-padding-m);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :focus {
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
  }
  :focus-visible {
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
  }
  :active:enabled {
    background-color: var(--color-bg-primary-lighter);
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
  }
  :hover:enabled {
    background-color: var(--color-bg-neutral-lightest);
  }
`;
const LeftSideContainer = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  gap: var(--spacing-gap-m);
`;

const RightSideContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  gap: var(--spacing-gap-s);
  max-width: 30%;
  flex-shrink: 0;
`;

const OptionalElement = styled.div`
  max-width: 30%;
  overflow: hidden;
`;

const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StatusContainer = styled.div<{ subLabel: AccordionItemProps["subLabel"] }>`
  display: flex;
  align-items: ${(props) => (props.subLabel ? "flex-start" : "center")};
  /* TODO: Check why this was used */
  /* margin-top: ${(props) => props.subLabel && "4px"}; */
`;

const IconContainer = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  display: flex;
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-primary-strong)")};
  font-size: var(--height-s);
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const AccordionLabel = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubLabel = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  height: 22px; /* TODO: Ask designers if this is correct */
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const AssistiveText = styled.span<{
  disabled: AccordionItemProps["disabled"];
  subLabel: AccordionItemProps["subLabel"];
}>`
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-content: ${(props) => !props.subLabel && "center"};
  /* TODO: Check why this was used */
  /* margin-top: ${(props) => props.subLabel && "4px"}; */
`;

const CollapseIndicator = styled.span<{
  disabled: AccordionItemProps["disabled"];
}>`
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-primary-strong)")};
  svg {
    height: var(--height-s);
    width: 24px;
  }
`;

const AccordionPanel = styled.div`
  border-bottom-left-radius: var(--border-radius-s);
  border-bottom-right-radius: var(--border-radius-s);
  padding: var(--spacing-padding-m);
`;

export default AccordionItem;
