import { useId, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import getMargin from "../common/utils";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import AccordionPropsType from "./types";
import DxcIcon from "../icon/Icon";

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
  tabIndex = 0,
}: AccordionPropsType): JSX.Element => {
  const id = useId();
  const [innerIsExpanded, setInnerIsExpanded] = useState(defaultIsExpanded ?? false);
  const colorsTheme = useTheme();

  const handleAccordionState = () => {
    if (isExpanded == null) {
      setInnerIsExpanded((innerIsCurrentlyExpanded) => !innerIsCurrentlyExpanded);
    }
    onChange?.(isExpanded != null ? !isExpanded : !innerIsExpanded);
  };

  return (
    <ThemeProvider theme={colorsTheme?.accordion}>
      <AccordionContainer isExpanded={isExpanded ?? innerIsExpanded} margin={margin}>
        <AccordionHeader>
          <AccordionTrigger
            id={`accordion-${id}`}
            onClick={disabled ? undefined : handleAccordionState}
            disabled={disabled}
            tabIndex={disabled ? -1 : tabIndex}
            aria-expanded={isExpanded ?? innerIsExpanded}
            aria-controls={`accordion-panel-${id}`}
            isExpanded={isExpanded ?? innerIsExpanded}
          >
            <AccordionInfo>
              <AccordionLabel disabled={disabled}>
                {icon && (
                  <IconContainer disabled={disabled}>
                    {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
                  </IconContainer>
                )}
                {label}
              </AccordionLabel>
              {assistiveText && <AccordionAssistiveText disabled={disabled}>{assistiveText}</AccordionAssistiveText>}
            </AccordionInfo>
            <CollapseIndicator disabled={disabled}>
              <DxcIcon icon={(isExpanded ?? innerIsExpanded) ? "expand_less" : "expand_more"} />
            </CollapseIndicator>
          </AccordionTrigger>
        </AccordionHeader>
        {(isExpanded ?? innerIsExpanded) && (
          <AccordionPanel id={`accordion-panel-${id}`} role="region" aria-labelledby={`accordion-${id}`}>
            {children}
          </AccordionPanel>
        )}
      </AccordionContainer>
    </ThemeProvider>
  );
};

const calculateWidth = (margin: AccordionPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const AccordionContainer = styled.div<{
  isExpanded: AccordionPropsType["isExpanded"];
  margin: AccordionPropsType["margin"];
}>`
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

const AccordionTrigger = styled.button<{
  isExpanded: AccordionPropsType["isExpanded"];
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => props.isExpanded && `border-bottom-left-radius: 0; border-bottom-right-radius: 0;`}
  padding: 12px 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :focus {
    outline: ${(props) =>
      `${props.theme.focusBorderColor} ${props.theme.focusBorderStyle} ${props.theme.focusBorderThickness}`};
  }
  :hover:enabled {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
  }
  :active:enabled {
    background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
  }
`;

const AccordionInfo = styled.span`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

const AccordionLabel = styled.span<{ disabled: AccordionPropsType["disabled"] }>`
  display: flex;
  padding-top: ${(props) => props.theme.titleLabelPaddingTop};
  padding-bottom: ${(props) => props.theme.titleLabelPaddingBottom};
  padding-right: ${(props) => props.theme.titleLabelPaddingRight};
  padding-left: ${(props) => props.theme.titleLabelPaddingLeft};
  color: ${(props) => (props.disabled ? props.theme.disabledTitleLabelFontColor : props.theme.titleLabelFontColor)};
  font-family: ${(props) => props.theme.titleLabelFontFamily};
  font-size: ${(props) => props.theme.titleLabelFontSize};
  font-style: ${(props) => props.theme.titleLabelFontStyle};
  font-weight: ${(props) => props.theme.titleLabelFontWeight};
  line-height: 1.5em;
`;

const IconContainer = styled.span<{ disabled: AccordionPropsType["disabled"] }>`
  display: flex;
  margin-left: ${(props) => props.theme.iconMarginLeft};
  margin-right: ${(props) => props.theme.iconMarginRight};
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  font-size: ${(props) => props.theme.iconSize};

  svg {
    height: ${(props) => props.theme.iconSize};
    width: ${(props) => props.theme.iconSize};
  }
`;

const AccordionAssistiveText = styled.span<{ disabled: AccordionPropsType["disabled"] }>`
  min-width: ${(props) => props.theme.assistiveTextMinWidth};
  padding-left: ${(props) => props.theme.assistiveTextPaddingLeft};
  padding-right: ${(props) => props.theme.assistiveTextPaddingRight};
  color: ${(props) =>
    props.disabled ? props.theme.disabledAssistiveTextFontColor : props.theme.assistiveTextFontColor};
  font-family: ${(props) => props.theme.assistiveTextFontFamily};
  font-size: ${(props) => props.theme.assistiveTextFontSize};
  font-style: ${(props) => props.theme.assistiveTextFontStyle};
  font-weight: ${(props) => props.theme.assistiveTextFontWeight};
  letter-spacing: ${(props) => props.theme.assistiveTextLetterSpacing};
  line-height: 1.5em;
`;

const CollapseIndicator = styled.span<{
  disabled: AccordionPropsType["disabled"];
}>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  font-size: 24px;
  color: ${(props) => (props.disabled ? props.theme.disabledArrowColor : props.theme.arrowColor)};
`;

const AccordionPanel = styled.div`
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
`;

export default DxcAccordion;
