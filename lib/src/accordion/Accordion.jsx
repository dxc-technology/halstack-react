import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { getMargin } from "../common/utils.js";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme.js";

const DxcAccordion = ({
  label = "",
  iconSrc = "",
  icon,
  assistiveText = "",
  disabled = false,
  onChange = "",
  isExpanded,
  children,
  margin,
  padding,
}) => {
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(false);
  const [isResponsive, setIsResponsive] = useState();
  const colorsTheme = useTheme();

  const handleResize = (width) => {
    if (width) {
      if (width <= responsiveSizes.tablet ? setIsResponsive(true) : setIsResponsive(false));
    }
  };

  const handleEventListener = () => {
    handleResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleEventListener);
    handleResize(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

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
      <DXCAccordion
        padding={padding}
        margin={margin}
        disabled={disabled}
        icon={icon || iconSrc}
        isResponsive={isResponsive}
      >
        <ExpansionPanel
          disabled={disabled}
          onChange={handlerAccordion}
          expanded={isExpanded != null ? isExpanded : innerIsExpanded}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionInfo>
              <AccordionLabel>{label}</AccordionLabel>
              {icon ? (
                <IconContainer>{typeof icon === "object" ? icon : React.createElement(icon)}</IconContainer>
              ) : (
                iconSrc && <AccordionIcon src={iconSrc} />
              )}
            </AccordionInfo>
            <AccordionAssistiveText>{assistiveText}</AccordionAssistiveText>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionText>{children}</AccordionText>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </DXCAccordion>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

DxcAccordion.propTypes = {
  label: PropTypes.string,
  iconSrc: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isExpanded: PropTypes.bool,
  children: PropTypes.element,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

const DXCAccordion = styled.div`
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

  font-family: "Open Sans", sans-serif;
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};
  .MuiPaper-root {
    left: 85px;
    background-color: ${(props) => props.theme.backgroundColor} !important;
    color: ${(props) => props.theme.fontColor};
    box-shadow: 0px 6px 10px #00000024;
    display: block;
    position: static;
    width: 100%;
    border-radius: 4px;

    &.Mui-expanded {
      border-radius: 4px;
      color: "#000000";
    }

    .MuiButtonBase-root.MuiExpansionPanelSummary-root {
      :hover {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
      }
    }

    .MuiButtonBase-root {
      border-radius: 4px;
      height: 48px;

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

      .MuiExpansionPanelSummary-content {
        padding-right: 24px;
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

    .MuiExpansionPanelSummary-root.Mui-expanded {
      min-height: 48px;
      border: 1px solid ${(props) => props.theme.focusOutline};
    }

    .MuiTouchRipple-root {
      display: none;
    }
  }

  .MuiCollapse-hidden {
    display: none;
  }

  .MuiPaper-root.Mui-disabled {
    color: ${(props) => props.theme.disabledFontColor};
  }

  .MuiCollapse-container {
    color: #000000;
    border-radius: 0px 0px 4px 4px;
    cursor: default;
    width: 100%;
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.arrowColor};
  }

  .MuiExpansionPanelSummary-root {
    padding: 0 16px 0 16px;
  }

  .MuiExpansionPanelSummary-root.Mui-disabled {
    opacity: 1;
  }

  .MuiExpansionPanelDetails-root {
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
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
  margin-right: 15px;
`;

const AccordionLabel = styled.div`
  flex-grow: 1;
`;

const AccordionText = styled.div`
  width: 100%;
`;

const AccordionAssistiveText = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font: italic normal 300 16px/22px Open Sans;
  letter-spacing: 0.49px;
`;

const IconContainer = styled.div`
  max-height: 24px;
  max-width: 24px;
  margin-left: 0px;
  margin-right: 12px;
  overflow: hidden;
  color: ${(props) => props.theme.arrowColor};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const AccordionIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: 0px;
  margin-right: 10px;
`;

export default DxcAccordion;
