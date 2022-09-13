import React, { useId, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import AccordionPropsType, { Margin, Padding, Space } from "./types";
import DxcFlex from "../flex/Flex";

const expand_less = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
    <path d="m7.4 15.375-1.4-1.4 6-6 6 6-1.4 1.4-4.6-4.6Z" />
  </svg>
);

const expand_more = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor">
    <path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
  </svg>
);

const DxcAccordion = ({
  label = "",
  defaultIsExpanded,
  isExpanded,
  icon,
  assistiveText = "",
  disabled = false,
  onChange,
  children,
  margin,
  padding,
  tabIndex = 0,
}: AccordionPropsType): JSX.Element => {
  const id = useId();
  const [innerIsExpanded, setInnerIsExpanded] = useState(defaultIsExpanded ?? false);
  const colorsTheme = useTheme();

  const handleAccordionState = () => {
    isExpanded ?? setInnerIsExpanded((innerIsExpanded) => !innerIsExpanded);
    onChange?.(isExpanded == null ? !innerIsExpanded : !isExpanded);
  };

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <AccordionContainer isExpanded={isExpanded ?? innerIsExpanded} padding={padding} margin={margin}>
        <AccordionHeader>
          <AccordionTrigger
            id={`accordion-${id}`}
            onClick={disabled ? undefined : handleAccordionState}
            disabled={disabled}
            tabIndex={disabled ? -1 : tabIndex}
            aria-expanded={isExpanded ?? innerIsExpanded}
            aria-controls={`accordion-panel-${id}`}
          >
            <AccordionInfo disabled={disabled}>
              <AccordionLabel>
                {icon && (
                  <IconContainer disabled={disabled}>
                    {typeof icon === "string" ? <IconImg src={icon} /> : icon}
                  </IconContainer>
                )}
                {label}
              </AccordionLabel>
              {assistiveText && <AccordionAssistiveText disabled={disabled}>{assistiveText}</AccordionAssistiveText>}
            </AccordionInfo>
            <CollapseIndicator disabled={disabled}>
              {isExpanded ?? innerIsExpanded ? expand_less : expand_more}
            </CollapseIndicator>
          </AccordionTrigger>
        </AccordionHeader>
        {(isExpanded ?? innerIsExpanded) && (
          <DxcFlex>
            <AccordionPanel
              id={`accordion-panel-${id}`}
              role="region"
              aria-labelledBy={`accordion-${id}`}
              padding={padding}
            >
              <BackgroundColorProvider color={colorsTheme.accordion.backgroundColor}>
                {children}
              </BackgroundColorProvider>
            </AccordionPanel>
          </DxcFlex>
        )}
      </AccordionContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionContainer = styled.div<{ isExpanded: boolean; margin: Space | Margin; padding: Space | Padding }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => props.isExpanded && `border-bottom-left-radius: 0; border-bottom-right-radius: 0;`}
  box-shadow: ${(props) =>
    `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowColor}`};
  min-width: 280px;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  width: ${(props) => calculateWidth(props.margin)};
`;

const AccordionHeader = styled.h3`
  display: flex;
  flex-direction: column;
  min-height: 48px;
  margin: 0;
`;

const AccordionTrigger = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 12px 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :focus {
    outline: ${(props) =>
      `${props.theme.focusBorderColor} ${props.theme.focusBorderStyle} ${props.theme.focusBorderThickness}`};
  }
  :hover {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
  }
  :active {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
  }
`;

const AccordionInfo = styled.span<{ disabled: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding-left: ${(props) => props.theme.titlePaddingLeft};
  padding-right: ${(props) => props.theme.titlePaddingRight};
  font-family: ${(props) => props.theme.titleLabelFontFamily};
  font-size: ${(props) => props.theme.titleLabelFontSize};
  font-style: ${(props) => props.theme.titleLabelFontStyle};
  font-weight: ${(props) => props.theme.titleLabelFontWeight};
  color: ${(props) => (props.disabled ? props.theme.disabledTitleLabelFontColor : props.theme.titleLabelFontColor)};
`;

const AccordionLabel = styled.span`
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.theme.titleLabelPaddingTop};
  padding-bottom: ${(props) => props.theme.titleLabelPaddingBottom};
  padding-right: ${(props) => props.theme.titleLabelPaddingRight};
  padding-left: ${(props) => props.theme.titleLabelPaddingLeft};
`;

const IconContainer = styled.span<{ disabled: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: ${(props) => props.theme.iconSize};
  width: ${(props) => props.theme.iconSize};
  margin-left: ${(props) => props.theme.iconMarginLeft};
  margin-right: ${(props) => props.theme.iconMarginRigth};
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
`;

const IconImg = styled.img`
  height: ${(props) => props.theme.iconSize};
  width: ${(props) => props.theme.iconSize};
`;

const AccordionAssistiveText = styled.span<{ disabled: boolean }>`
  min-width: ${(props) => props.theme.assistiveTextMinWidth};
  padding-left: ${(props) => props.theme.assistiveTextPaddingLeft};
  padding-right: ${(props) => props.theme.assistiveTextPaddingRight};
  font-family: ${(props) => props.theme.assistiveTextFontFamily};
  font-size: ${(props) => props.theme.assistiveTextFontSize};
  font-style: ${(props) => props.theme.assistiveTextFontStyle};
  font-weight: ${(props) => props.theme.assistiveTextFontWeight};
  color: ${(props) =>
    props.disabled ? props.theme.disabledAssistiveTextFontColor : props.theme.assistiveTextFontColor};
  letter-spacing: ${(props) => props.theme.assistiveTextLetterSpacing};
`;

const CollapseIndicator = styled.span<{ disabled: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: ${(props) => (props.disabled ? props.theme.disabledArrowColor : props.theme.arrowColor)};
`;

const AccordionPanel = styled.div<{ padding: Space | Padding }>`
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
  padding-top: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
  padding-right: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
  padding-bottom: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
  padding-left: ${(props) =>
    props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
`;

export default DxcAccordion;
