import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcSpinner = ({ label = "", theme = "light", value, showValue = false, mode = "large" }) => {
  return (
    <BackgroundSpinner theme={theme} mode={mode}>
      <DXCSpinner showValue={showValue} label={label} mode={mode}>
        {label && mode !== "small" && (
          <SpinnerLabel theme={theme} mode={mode}>
            {label}
          </SpinnerLabel>
        )}
        {value && mode !== "small" && (
          <SpinnerProgress theme={theme} mode={mode} showValue={showValue} label={label}>
            {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}%
          </SpinnerProgress>
        )}
        <CircularProgress
          variant={showValue ? "static" : "indeterminate"}
          value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
          mode={mode}
          label={label}
        />
      </DXCSpinner>
    </BackgroundSpinner>
  );
};

DxcSpinner.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  value: PropTypes.number,
  showValue: PropTypes.bool,
  mode: PropTypes.oneOf(["large", "small", "overlay"])
};

const BackgroundSpinner = styled.div`
  background-color: ${props => (props.mode === "overlay" ? colors.black.concat("B3") : "transparent")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.mode === "overlay" ? "center" : "")};
  align-items: ${props => (props.mode === "overlay" ? "center" : "")};
  position: ${props => (props.mode === "overlay" ? "fixed" : "")};
  top: ${props => (props.mode === "overlay" ? 0 : "")};
  left: ${props => (props.mode === "overlay" ? 0 : "")};
  right: ${props => (props.mode === "overlay" ? 0 : "")};
  bottom: ${props => (props.mode === "overlay" ? 0 : "")};
  z-index: ${props => (props.mode === "overlay" ? 1000 : "")};
`;

const DXCSpinner = styled.div`
  font-family: "Open Sans", sans-serif;
  border-radius: 80px;
  border: 6px solid white;
  width: ${props => (props.mode === "small" && "30px") || "120px"};
  height: ${props => (props.mode === "small" && "30px") || "120px"};
  z-index: ${props => (props.mode === "overlay" ? "100" : "")};

  .MuiCircularProgress-colorPrimary {
    color: ${colors.yellow};
    width: ${props => (props.mode === "small" && "44px !important") || "140px !important"};
    height: ${props => (props.mode === "small" && "44px !important") || "140px !important"};
    margin-top: ${props =>
      props.label === "" && props.showValue === false && props.mode === "large"
        ? "-10px"
        : props.mode === "small"
        ? "-7px"
        : props.label !== "" && props.showValue === false
        ? "-78.6px"
        : props.label === "" && props.showValue === true
        ? "-77.75px"
        : "-95.7px"};
    margin-left: ${props => (props.mode === "small" && "-7px !important") || "-10px !important"};
  }

  .MuiCircularProgress-circle {
    stroke-width: ${props => (props.mode === "small" && "6.2px") || "1.98px"};
    r: ${props => (props.mode === "small" && "18.2") || "19.8"};
  }
`;

const SpinnerLabel = styled.div`
  margin-top: ${props => (!props.showValue && "52px") || "6px"};
  color: ${props => (props.theme === "dark" || props.mode === "overlay" ? colors.white : colors.black)};
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
`;

const SpinnerProgress = styled.div`
  margin-top: ${props => (props.label === "" && "52px") || ""};
  display: ${props => (props.value !== "" && props.showValue === true && "block") || "none"};
  color: ${props => (props.theme === "dark" || props.mode === "overlay" ? colors.white : colors.black)};
  font-size: 12px;
  text-align: center;
`;

export default DxcSpinner;
