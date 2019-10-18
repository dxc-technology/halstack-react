import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from "prop-types";
import colors from "../common/variables.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const DxcAccordion = ({
  mode = "default",
  label = "",
  iconSrc = "",
  iconPosition = "before",
  assistiveText = "",
  disabled = false,
  onChange = "",
  theme = "light",
  children
}) => {
  const handlerAccordion = (event, expanded) => {
    onChange(expanded);
  };

  return (
    <DXCAccordion theme={theme} mode={mode} disabled={disabled}>
      <ExpansionPanel disabled={disabled} onChange={handlerAccordion}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionInfo iconPosition={iconPosition}>
            <AccordionLabel iconPosition={iconPosition}>{label}</AccordionLabel>
            {iconSrc && <AccordionIcon iconPosition={iconPosition} src={iconSrc} />}
          </AccordionInfo>
          <AccordionAssistiveText theme={theme} mode={mode}>
            {assistiveText}
          </AccordionAssistiveText>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AccordionText>{children}</AccordionText>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </DXCAccordion>
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
  children: PropTypes.string
};

const DXCAccordion = styled.span`
  cursor: ${props => (props.disabled && "not-allowed") || "pointer"};
  .MuiPaper-root {
    width: 1217px;
    left: 85px;
    background-color: ${props => (props.mode === "alternative" && colors.black) || colors.white};
    color: ${props => (props.mode === "default" && colors.darkGrey) || colors.white};
    box-shadow: 0px 6px 10px #00000024;
    border: ${props => (props.theme === "dark" && props.mode === "alternative" ? `2px solid ${colors.white}` : "")};
    margin-bottom: 5px;
    display: block;
    :hover {
      background-color: ${props => (props.mode === "default" && colors.lightGrey) || colors.lightBlack};
      color: ${props => (props.mode === "default" && colors.black) || colors.white};
      opacity: 1;
    }

    .MuiButtonBase-root {
      height: 72px;
    }

    .MuiExpansionPanelSummary-root.Mui-expanded {
      border-bottom: ${props =>
        (props.mode === "default" && `2px solid ${colors.lightGrey}`) || `2px solid ${colors.white}`};
    }
  }

  .MuiCollapse-hidden {
    display: none;
  }

  .MuiPaper-root.Mui-expanded {
    border-radius: 4px 4px 0px 0px;
  }

  .MuiPaper-root.Mui-disabled {
    background-color: ${props => (props.mode === "default" && colors.white) || colors.black};
    opacity: ${props => (props.mode === "default" && 1) || 0.3};
  }

  .MuiCollapse-container {
    background-color: ${props => (props.mode === "default" && colors.white) || colors.black};
    color: ${props => (props.mode === "default" && colors.black) || colors.white};
    box-shadow: 0px 6px 10px ${colors.white}24;
    border-radius: 0px 0px 4px 4px;
    height: 72px;
    margin-top: 1px;
    margin-bottom: 10px;
  }

  .MuiSvgIcon-root {
    color: ${props => (props.mode === "default" && colors.darkGrey) || colors.white};
  }

  .MuiExpansionPanelSummary-root {
    height: 72px;
  }

  .MuiExpansionPanelDetails-root {
    padding-bottom: 8px;
    margin: 12px 12px 12px 0;
  }
`;

const AccordionInfo = styled.div`
  display: flex;
  flex-direction: ${props => (props.iconPosition === "after" && "row") || "row-reverse"};
  align-items: center;
  flex-grow: 1;
`;

const AccordionLabel = styled.div`
  margin-top: 2px;
  flex-grow: ${props => (props.iconPosition === "after" && "0") || "1"};
`;

const AccordionText = styled.div``;

const AccordionAssistiveText = styled.div`
  margin-top: 1px;
  font-size: 14px;
  font: Italic 14px/19px Open Sans;
  letter-spacing: 0.24px;
  color: ${props => (props.mode === "default" && colors.black) || colors.lightGrey};
  opacity: ${props => (props.mode === "default" && 0.6) || 1};
`;

const AccordionIcon = styled.img`
  max-height: 15px;
  max-width: 15px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcAccordion;
