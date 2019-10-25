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

const DXCAccordion = styled.div`
  min-width: 280px;
  margin: 1px;
  cursor: ${props => (props.disabled && "not-allowed") || "pointer"};
  .MuiPaper-root {
    left: 85px;
    background-color: ${props => (props.mode === "alternative" && colors.black) || colors.white};
    color: ${props => (props.mode === "default" && colors.darkGrey) || colors.white};
    box-shadow: 0px 6px 10px #00000024;
    border: ${props => (props.theme === "dark" && props.mode === "alternative" ? `2px solid ${colors.white}` : "")};
    margin-bottom: 5px;
    display: block;
    position: static;
    width: 100%;
    border-radius: 4px;

    &.Mui-expanded {
      border-radius: 4px;
      color: ${props => (props.mode === "default" && colors.black) || colors.white};
      .MuiSvgIcon-root {
          color: ${props => (props.mode === "default" && colors.black) || colors.white};
        }
    }

    .MuiButtonBase-root {
      border-radius: 4px;
      height: 72px;
      :hover {
        background-color: ${props => (props.mode === "default" && colors.lightGrey) || colors.lightBlack};
        color: ${props => (props.mode === "default" && colors.black) || colors.white};

        .MuiSvgIcon-root {
          color: ${props => (props.mode === "default" && colors.black) || colors.white};
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

      .MuiExpansionPanelSummary-root.Mui-expanded {
        border-bottom: ${props =>
          (props.mode === "default" && `1px solid ${colors.lightGrey}`) || `1px solid ${colors.white}`};
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

    .MuiTouchRipple-root {
      display: none;
    }
  }

  .MuiCollapse-hidden {
    display: none;
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
  }

  .MuiSvgIcon-root {
    color: ${props => (props.mode === "default" && colors.darkGrey) || colors.white};
  }

  .MuiExpansionPanelSummary-root {
    height: 72px;
    padding: 0 30px;
  }

  .MuiExpansionPanelDetails-root {
    padding: 30px;
  }
`;

const AccordionInfo = styled.div`
  display: flex;
  flex-direction: ${props => (props.iconPosition === "after" && "row") || "row-reverse"};
  align-items: center;
  flex-grow: 1;
`;

const AccordionLabel = styled.div`
  flex-grow: ${props => (props.iconPosition === "after" && "0") || "1"};
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
  margin-bottom: 2px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcAccordion;
