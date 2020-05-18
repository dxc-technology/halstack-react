import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { colors, spaces } from "../common/variables.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThemeContext from "../ThemeContext.js";

const DxcAccordion = ({
  mode = "default",
  label = "",
  iconSrc = "",
  iconPosition = "before",
  assistiveText = "",
  disabled = false,
  onChange = "",
  theme = "light",
  isExpanded,
  children,
  margin,
  padding,
}) => {
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(false);
  const colorsTheme = useContext(ThemeContext) || colors;

  const handlerAccordion = () => {
    if (isExpanded == null) {
      setInnerIsExpanded(!innerIsExpanded);
    }
    if (typeof onChange === "function") {
      onChange(isExpanded == null ? !innerIsExpanded : !isExpanded);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <DXCAccordion padding={padding} margin={margin} brightness={theme} mode={mode} disabled={disabled}>
        <ExpansionPanel
          disabled={disabled}
          onChange={handlerAccordion}
          expanded={isExpanded != null ? isExpanded : innerIsExpanded}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionInfo iconPosition={iconPosition}>
              <AccordionLabel iconPosition={iconPosition}>{label}</AccordionLabel>
              {iconSrc && <AccordionIcon iconPosition={iconPosition} src={iconSrc} />}
            </AccordionInfo>
            <AccordionAssistiveText brightness={theme} mode={mode}>
              {assistiveText}
            </AccordionAssistiveText>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionText>{children}</AccordionText>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </DXCAccordion>
    </ThemeProvider>
  );
};

DxcAccordion.propTypes = {
  mode: PropTypes.oneOf(["default", "alternative"]),
  label: PropTypes.string,
  iconSrc: PropTypes.string,
  iconPosition: PropTypes.oneOf(["before", "after"]),
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(["light", "dark"]),
  isExpanded: PropTypes.bool,
  children: PropTypes.string,
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

  font-family: "Open Sans", sans-serif;
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};
  .MuiPaper-root {
    left: 85px;
    background-color: ${(props) => (props.mode === "alternative" && props.theme.black) || props.theme.white};
    color: ${(props) => (props.mode === "default" && props.theme.darkGrey) || props.theme.white};
    box-shadow: 0px 6px 10px #00000024;
    border: ${(props) =>
      props.brightness === "dark" && props.mode === "alternative" ? `2px solid ${props.theme.white}` : ""};
    display: block;
    position: static;
    width: 100%;
    border-radius: 4px;

    &.Mui-expanded {
      border-radius: 4px;
      color: ${(props) => (props.mode === "default" && props.theme.black) || props.theme.white};
      .MuiSvgIcon-root {
        color: ${(props) => (props.mode === "default" && props.theme.black) || props.theme.white};
      }
    }

    .MuiButtonBase-root {
      border-radius: 4px;
      height: 72px;
      :hover {
        background-color: ${(props) => (props.mode === "default" && props.theme.lightGrey) || props.theme.lightBlack};
        color: ${(props) => (props.mode === "default" && props.theme.black) || props.theme.white};

        .MuiSvgIcon-root {
          color: ${(props) => (props.mode === "default" && props.theme.black) || props.theme.white};
        }
      }

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
      border-bottom: ${(props) =>
        (props.mode === "default" && `1px solid ${props.theme.lightGrey}`) || `1px solid ${props.theme.white}`};
    }

    .MuiTouchRipple-root {
      display: none;
    }
  }

  .MuiCollapse-hidden {
    display: none;
  }

  .MuiPaper-root.Mui-disabled {
    background-color: ${(props) => (props.mode === "default" && props.theme.white) || props.theme.black};
    opacity: ${(props) => (props.mode === "default" && 1) || 0.8};
  }

  .MuiCollapse-container {
    background-color: ${(props) => (props.mode === "default" && props.theme.white) || props.theme.black};
    color: ${(props) => (props.mode === "default" && props.theme.black) || props.theme.white};
    box-shadow: 0px 6px 10px ${(props) => props.theme.white}24;
    border-radius: 0px 0px 4px 4px;
    cursor: default;
  }

  .MuiSvgIcon-root {
    color: ${(props) => (props.mode === "default" && props.theme.darkGrey) || props.theme.white};
  }

  .MuiExpansionPanelSummary-root {
    padding: 0 30px;
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
`;

const AccordionLabel = styled.div`
  flex-grow: ${(props) => (props.iconPosition === "after" && "0") || "1"};
`;

const AccordionText = styled.div``;

const AccordionAssistiveText = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font: Italic 14px/19px Open Sans;
  letter-spacing: 0.24px;
`;

const AccordionIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcAccordion;
