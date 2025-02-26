import { ReactElement, useContext, useId, cloneElement, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
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
  const colorsTheme = useContext(HalstackContext);
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
    <ThemeProvider theme={colorsTheme.accordion}>
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
            <DxcFlex gap="1.5rem">
              <LeftSideContainer>
                <DxcFlex gap="0.75rem">
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
                </DxcFlex>
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
    </ThemeProvider>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) =>
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowSpread} ${props.theme.boxShadowColor}`};
  min-width: 280px;
  width: 100%;
`;

const AccordionTrigger = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 8px 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :focus {
    background-color: ${(props) => `${props.theme.focusBackgroundColor}`};
    box-shadow: inset 0 0 0 ${(props) => props.theme.focusBorderThickness} ${(props) => props.theme.focusBorderColor};
  }
  :focus-visible {
    background-color: ${(props) => `${props.theme.focusBackgroundColor}`};
    box-shadow: inset 0 0 0 ${(props) => props.theme.focusBorderThickness} ${(props) => props.theme.focusBorderColor};
    outline: none;
  }
  :active:enabled {
    background-color: ${(props) => `${props.theme.activeBackgroundColor}`};
    box-shadow: inset 0 0 0 ${(props) => props.theme.focusBorderThickness} ${(props) => props.theme.focusBorderColor};
  }
  :hover:enabled {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
  }
`;
const LeftSideContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const RightSideContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  gap: 0.5rem;
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
  margin-top: ${(props) => props.subLabel && "4px"};
`;

const IconContainer = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  display: flex;
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  font-size: ${(props) => props.theme.iconSize};
  svg {
    height: ${(props) => props.theme.iconSize};
    width: ${(props) => props.theme.iconSize};
  }
`;

const AccordionLabel = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  color: ${(props) => (props.disabled ? props.theme.disabledTitleLabelFontColor : props.theme.titleLabelFontColor)};
  font-family: ${(props) => props.theme.titleLabelFontFamily};
  font-size: ${(props) => props.theme.titleLabelFontSize};
  font-style: ${(props) => props.theme.titleLabelFontStyle};
  font-weight: ${(props) => props.theme.titleLabelFontWeight};
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubLabel = styled.span<{ disabled: AccordionItemProps["disabled"] }>`
  height: 20px;
  color: ${(props) => (props.disabled ? props.theme.disabledSubLabelFontColor : props.theme.subLabelFontColor)};
  font-family: ${(props) => props.theme.subLabelFontFamily};
  font-size: ${(props) => props.theme.subLabelFontSize};
  font-style: ${(props) => props.theme.subLabelFontStyle};
  font-weight: ${(props) => props.theme.subLabelFontWeight};
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const AssistiveText = styled.span<{
  disabled: AccordionItemProps["disabled"];
  subLabel: AccordionItemProps["subLabel"];
}>`
  color: ${(props) =>
    props.disabled ? props.theme.disabledAssistiveTextFontColor : props.theme.assistiveTextFontColor};
  font-family: ${(props) => props.theme.assistiveTextFontFamily};
  font-size: ${(props) => props.theme.assistiveTextFontSize};
  font-style: ${(props) => props.theme.assistiveTextFontStyle};
  font-weight: ${(props) => props.theme.assistiveTextFontWeight};
  line-height: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-content: ${(props) => !props.subLabel && "center"};
  margin-top: ${(props) => props.subLabel && "4px"};
`;

const CollapseIndicator = styled.span<{
  disabled: AccordionItemProps["disabled"];
}>`
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  color: ${(props) => (props.disabled ? props.theme.disabledArrowColor : props.theme.arrowColor)};
  svg {
    height: ${(props) => props.theme.iconSize};
    width: ${(props) => props.theme.iconSize};
  }
`;

const AccordionPanel = styled.div`
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
`;

export default AccordionItem;
