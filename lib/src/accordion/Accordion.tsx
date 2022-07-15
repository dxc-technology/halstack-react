// @ts-nocheck
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getMargin } from "../common/utils.js";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import AccordionPropsType from "./types";

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
  const [innerIsExpanded, setInnerIsExpanded] = useState(defaultIsExpanded ?? false);
  const colorsTheme = useTheme();

  const handlerAccordion = () => {
    if (isExpanded == null) {
      setInnerIsExpanded(!innerIsExpanded);
    }
    if (typeof onChange === "function") {
      onChange(isExpanded == null ? !innerIsExpanded : !isExpanded);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <DXCAccordion padding={padding} margin={margin} disabled={disabled} icon={icon}>
        <Accordion
          disabled={disabled}
          onChange={handlerAccordion}
          expanded={isExpanded != null ? isExpanded : innerIsExpanded}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} tabIndex={disabled ? -1 : tabIndex}>
            <AccordionInfo disabled={disabled}>
              {icon && (
                <IconContainer disabled={disabled}>
                  {typeof icon === "string" ? <AccordionIcon src={icon} /> : icon}
                </IconContainer>
              )}
              <AccordionLabel>{label}</AccordionLabel>
            </AccordionInfo>
            {assistiveText && <AccordionAssistiveText disabled={disabled}>{assistiveText}</AccordionAssistiveText>}
          </AccordionSummary>
          <AccordionDetails>
            <AccordionContent disabled={disabled}>
              <BackgroundColorProvider color={colorsTheme.accordion.backgroundColor}>
                {children}
              </BackgroundColorProvider>
            </AccordionContent>
          </AccordionDetails>
        </Accordion>
      </DXCAccordion>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const DXCAccordion = styled.div`
  display: flex;
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
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};

  .MuiPaper-root {
    min-width: 0;
    display: flex;
    left: 85px;
    background-color: ${(props) => props.theme.backgroundColor} !important;
    box-shadow: ${(props) =>
      `${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowColor}`};
    position: static;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};

    &.Mui-expanded {
      border-radius: ${(props) => props.theme.borderRadius};
    }
    &.MuiAccordion-root {
      display: flex;
      flex-direction: column;
      min-height: 48px;
    }
    &.MuiAccordion-rounded {
      border-radius: ${(props) => props.theme.borderRadius};
    }
    .MuiButtonBase-root.MuiAccordionSummary-root {
      min-height: 48px;
      height: 48px;

      :focus {
        outline-color: ${(props) => props.theme.focusBorderColor};
        outline-style: ${(props) => props.theme.focusBorderStyle};
        outline-width: ${(props) => props.theme.focusBorderThickness};
        background-color: ${(props) => props.theme.backgroundColor};
      }
      :hover {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
      }
      :active {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
      }
      &.Mui-disabled {
        opacity: 1;
      }
    }
    .MuiButtonBase-root {
      border-radius: ${(props) => props.theme.borderRadius};

      &.Mui-expanded {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        .MuiSvgIcon-root {
          opacity: 1;
        }
      }
      &.MuiIconButton-root {
        height: auto;
      }
      .MuiAccordionSummary-content {
        padding-top: ${(props) => props.theme.titleLabelPaddingTop};
        padding-bottom: ${(props) => props.theme.titleLabelPaddingBottom};
        padding-right: ${(props) => props.theme.titleLabelPaddingRight};
        padding-left: ${(props) => props.theme.titleLabelPaddingLeft};
        min-width: 0;
        &.Mui-expanded {
          div:nth-child(2) {
            opacity: 1;
          }
        }
        :hover {
          div {
            opacity: 1;
          }
        }
      }
    }
    .MuiTouchRipple-root {
      display: none;
    }
  }
  .MuiCollapse-hidden {
    display: none;
  }
  .MuiCollapse-container {
    border-radius: 0px 0px 4px 4px;
    cursor: default;
    width: 100%;
  }
  .MuiIconButton-label {
    & > .MuiSvgIcon-root {
      color: ${(props) => (props.disabled ? props.theme.disabledArrowColor : props.theme.arrowColor)};
    }
  }
  .MuiAccordionDetails-root {
    padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
    padding-top: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
    padding-right: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
    padding-bottom: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
    padding-left: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
  }
`;

const AccordionInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.theme.titlePaddingLeft};
  padding-right: ${(props) => props.theme.titlePaddingRight};
  font-family: ${(props) => props.theme.titleLabelFontFamily};
  font-size: ${(props) => props.theme.titleLabelFontSize};
  font-style: ${(props) => props.theme.titleLabelFontStyle};
  font-weight: ${(props) => props.theme.titleFonLabeltWeight};
  color: ${(props) => (props.disabled ? props.theme.disabledTitleLabelFontColor : props.theme.titleLabelFontColor)};
`;

const AccordionLabel = styled.div``;

const AccordionContent = styled.div`
  width: 100%;
`;

const AccordionAssistiveText = styled.div`
  padding-left: ${(props) => props.theme.assistiveTextPaddingLeft};
  padding-right: ${(props) => props.theme.assistiveTextPaddingRight};
  font-size: ${(props) => props.theme.assistiveTextFontSize};
  font-family: ${(props) => props.theme.assistiveTextFontFamily};
  font-style: ${(props) => props.theme.assistiveTextFontStyle};
  font-weight: ${(props) => props.theme.assistiveTextFontWeight};
  color: ${(props) =>
    props.disabled ? props.theme.disabledAssistiveTextFontColor : props.theme.assistiveTextFontColor};
  letter-spacing: ${(props) => props.theme.assistiveTextLetterSpacing};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: ${(props) => props.theme.assistiveTextMinWidth};
  text-align: end;
`;

const IconContainer = styled.div`
  height: ${(props) => props.theme.iconSize};
  width: ${(props) => props.theme.iconSize};
  margin-left: ${(props) => props.theme.iconMarginLeft};
  margin-right: ${(props) => props.theme.iconMarginRigth};
  overflow: hidden;
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const AccordionIcon = styled.img``;

export default DxcAccordion;
