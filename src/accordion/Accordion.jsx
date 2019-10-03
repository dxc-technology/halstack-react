import React from "react";
import styled from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from "prop-types";
import colors from "../common/variables.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const DxcAccordion = ({
  label = "",
  iconSrc = "",
  iconPosition = "before",
  assistiveText = "",
  disabled = false,
  onChange = "",
  theme = "light",
  children
}) => {
  const handlerAccordion = expanded => {
    onChange(expanded);
  };

  return (
    <DXCAccordion theme={theme} disabled={disabled}>
      <ExpansionPanel disabled={disabled} onChange={handlerAccordion}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionInfo iconPosition={iconPosition}>
            <AccordionLabel iconPosition={iconPosition}>{label}</AccordionLabel>
            {iconSrc && <AccordionIcon iconPosition={iconPosition} src={iconSrc} />}
          </AccordionInfo>
          <AccordionAssistiveText theme={theme}>{assistiveText}</AccordionAssistiveText>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AccordionText>{children}</AccordionText>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </DXCAccordion>
  );
};

DxcAccordion.propTypes = {
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
    height: 72px;
    left: 85px;
    background-color: ${props => (props.theme === "light" && colors.white) || colors.black};
    color: ${props => (props.theme === "light" && colors.darkGrey) || colors.white};
    box-shadow: 0px 6px 10px #00000024;
    margin-bottom: 65px;
    :hover {
      background-color: ${props => (props.theme === "light" && colors.lightGrey) || colors.lightBlack};
      color: ${props => (props.theme === "light" && colors.black) || colors.white};
      opacity: 1;
    }
  }

  .MuiPaper-root.Mui-expanded {
    margin-bottom: 65px !important;
    border-radius: 4px 4px 0px 0px;
  }

  .MuiPaper-root.Mui-disabled {
    background-color: ${props => (props.theme === "light" && colors.white) || colors.black};
    opacity: ${props => (props.theme === "light" && 1) || 0.3};
  }

  .MuiCollapse-container {
    background-color: ${props => (props.theme === "light" && colors.white) || colors.black};
    color: ${props => (props.theme === "light" && colors.black) || colors.white};
    box-shadow: 0px 6px 10px #00000024;
    border-radius: 0px 0px 4px 4px;
    height: 72px;
    margin-top: 1px;
  }

  .MuiSvgIcon-root {
    color: ${props => (props.theme === "light" && colors.darkGrey) || colors.white};
  }

  .MuiExpansionPanelSummary-root {
    height: 72px;
  }

  .MuiExpansionPanelSummary-content.Mui-expanded div {
    color: ${props => (props.theme === "light" && colors.black) || colors.white};
    opacity: 1;
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
  color: ${props => (props.theme === "light" && colors.black) || colors.lightGrey};
  opacity: ${props => (props.theme === "light" && 0.6) || 1};
`;

const AccordionIcon = styled.img`
  max-height: 15px;
  max-width: 15px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcAccordion;
