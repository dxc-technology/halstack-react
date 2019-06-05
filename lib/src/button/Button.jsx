import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styled from "styled-components";

const DxcButton = ({ label, mode, disabled, theme, disableRipple, iconPosition = "after", iconSrc, onClick }) => {
  const commonStyles = {
    boxShadow: "none",
    fontSize: 14,
    fontWeight: "500",
    padding: "12px 30px",
    borderRadius: "4px",
    minWidth: "122px",
    maxWidth: "420px",
    minHeight: "43px",
    color: "#000000",
    lineHeight: "1",
    margin: "15px",
    fontFamily: "Open Sans"
  };

  const basicButtonStyle = {
    backgroundColor: "#FFED00",
    "&:hover": {
      backgroundColor: theme === "dark" ? "#212121" : "#000000",
      color: "#FFED00"
    },
    "&:disabled": {
      backgroundColor: "#ffed0078",
      opacity: "0.5"
    }
  };

  const outlinedButtonStyle = {
    backgroundColor: "transparent",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
    border: theme === "dark" ? "2px solid #FFFFFF" : "2px solid #000",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #FFED00"
    },
    "&:disabled": {
      backgroundColor: theme === "dark" ? "#000000" : "transparent",
      border: theme === "dark" ? "2px solid #FFFFFF" : "2px solid #000",
      color: theme === "dark" ? "#FFFFFF" : "#000000"
    }
  };

  const flatButtonStyle = {
    backgroundColor: theme === "dark" ? "#000000" : "transparent",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
    "&:hover": {
      backgroundColor: "#E5E5E5"
    },
    "&:disabled": {
      backgroundColor: theme === "dark" ? "#666666" : "#E5E5E5",
      opacity: "0.5",
      color: "#d9d9d9"
    }
  };
  const raisedButtonStyle = {
    backgroundColor: "#FFED00",
    boxShadow: "0px 1.5px 3px 0px rgba(0, 0, 0, 0.16)",
    "&:hover": {
      backgroundColor: theme === "dark" ? "#212121" : "#000000",
      color: "#FFED00"
    },
    "&:disabled": {
      backgroundColor: "#ffed0078",
      opacity: "0.5",
      boxShadow: "none"
    }
  };

  const DxCButton = withStyles({
    root: {
      ...commonStyles,
      ...(mode === "basic"
        ? basicButtonStyle
        : mode === "flat"
        ? flatButtonStyle
        : mode === "raised"
        ? raisedButtonStyle
        : outlinedButtonStyle)
    }
  })(Button);

  return (
    <DxCButton disabled={disabled} disableRipple={disableRipple} onClick={() => onClick(event)}>
      <ButtonContainer iconPosition={iconPosition}>
        <LabelContainer>{label}</LabelContainer>
        {iconSrc && <ButtonIcon iconPosition={iconPosition} src={iconSrc} />}
      </ButtonContainer>
    </DxCButton>
  );
};

DxcButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["basic", "outlined", "raised", "flat"]),
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"])
};
const LabelContainer = styled.div`
line-height: 18px;
    font-size: 14px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.iconPosition === "after" && "row") || "row-reverse"};
  align-items:center;
`;

const ButtonIcon = styled.img`
  max-height: 15px;
  max-width: 15px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;
export default DxcButton;
