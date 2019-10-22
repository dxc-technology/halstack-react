import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcSpinner = ({ label = "", theme = "light", overlay = true, value, showValue = false }) => {
  return (
    <BackgroundSpinner theme={theme} overlay={overlay}>
      <DXCSpinner overlay={overlay} showValue={showValue} label={label}>
        <SpinnerLabel theme={theme} overlay={overlay}>
          {label}
        </SpinnerLabel>
        <SpinnerProgress theme={theme} overlay={overlay} showValue={showValue}>
          {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}%
        </SpinnerProgress>
        <CircularProgress
          variant={showValue ? "determinate" : "indeterminate"}
          value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
        />
      </DXCSpinner>
    </BackgroundSpinner>
  );
};

DxcSpinner.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  overlay: PropTypes.bool,
  value: PropTypes.number,
  showValue: PropTypes.bool
};

const BackgroundSpinner = styled.div`
  background-color: ${props => (props.overlay === true ? colors.black.concat("B3") : "transparent")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.overlay === true ? "center" : "")};
  align-items: ${props => (props.overlay === true ? "center" : "")};
  position: ${props => (props.overlay === true ? "fixed" : "")};
  top: ${props => (props.overlay === true ? 0 : "")};
  left: ${props => (props.overlay === true ? 0 : "")};
  right: ${props => (props.overlay === true ? 0 : "")};
  bottom: ${props => (props.overlay === true ? 0 : "")};
  z-index: ${props => (props.overlay === true ? 1000 : "")};
`;

const DXCSpinner = styled.div`
  border-radius: 80px;
  border: 9px solid white;
  width: 120px;
  height: 120px;
  z-index: ${props => (props.overlay === true ? "100" : "")};

  .MuiCircularProgress-colorPrimary {
    color: ${colors.yellow};
    width: 140px !important;
    height: 140px !important;
    margin-top: ${props =>
      props.label === "" && props.showValue === false
        ? "-62px"
        : props.label !== "" && props.showValue === false
        ? "-76px"
        : props.label === "" && props.showValue === true
        ? "-76px"
        : "-90px"};
    margin-left: -10px;
  }
`;

const SpinnerLabel = styled.div`
  margin-top: 52px;
  color: ${props => (props.theme === "dark" || props.overlay === true ? colors.white : colors.black)};
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
`;

const SpinnerProgress = styled.div`
  display: ${props => (props.value !== "" && props.showValue === true && "block") || "none"};
  color: ${props => (props.theme === "dark" || props.overlay === true ? colors.white : colors.black)};
  font-size: 12px;
  text-align: center;
`;

export default DxcSpinner;
