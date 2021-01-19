import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { getCustomTheme, getMargin } from "../common/utils.js";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import ThemeContext from "../ThemeContext.js";

const DxcAccordion = ({
  label = "",
  iconSrc = "",
  icon,
  iconPosition = "before",
  assistiveText = "",
  disabled = false,
  onChange = "",
  isExpanded,
  children,
  margin,
  padding,
}) => {
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(false);
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

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
      <DXCAccordion padding={padding} margin={margin} disabled={disabled}>
        <ExpansionPanel
          disabled={disabled}
          onChange={handlerAccordion}
          expanded={isExpanded != null ? isExpanded : innerIsExpanded}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionInfo iconPosition={iconPosition}>
              <AccordionLabel iconPosition={iconPosition}>{label}</AccordionLabel>
              {icon ? (
                <IconContainer iconPosition={iconPosition}>
                  {(icon.type && (icon.type === "svg" || icon.type === "img") && icon) || React.createElement(icon)}
                </IconContainer>
              ) : (
                iconSrc && <AccordionIcon iconPosition={iconPosition} src={iconSrc} />
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
  iconPosition: PropTypes.oneOf(["before", "after"]),
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
        background-color: ${(props) => `${props.theme.arrowColor}${props.theme.hoverBackgroundColor}`};
        color: ${(props) => props.theme.hoverFontColor};
      }
    }

    .MuiButtonBase-root {
      border-radius: 4px;
      height: 72px;

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
        padding-right: 30px;
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
      color: ${(props) => props.theme.hoverFontColor};
      border-bottom: 1px solid #d9d9d9;
    }

    .MuiTouchRipple-root {
      display: none;
    }
  }

  .MuiCollapse-hidden {
    display: none;
  }

  .MuiPaper-root.Mui-disabled {
    opacity: ${(props) => props.theme.disabled};
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
    padding: 0 30px;
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
  flex-direction: ${(props) => (props.iconPosition === "after" && "row") || "row-reverse"};
  align-items: center;
  flex-grow: 1;
  margin-right: 15px;
`;

const AccordionLabel = styled.div`
  flex-grow: ${(props) => (props.iconPosition === "after" && "0") || "1"};
`;

const AccordionText = styled.div`
  width: 100%;
`;

const AccordionAssistiveText = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font: Italic 14px/19px Open Sans;
  letter-spacing: 0.24px;
`;

const IconContainer = styled.div`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && "10px") || "0px"};

  img,
  svg:not(:root) {
    height: 100%;
    width: 100%;
  }
`;

const AccordionIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcAccordion;
