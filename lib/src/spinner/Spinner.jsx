import React from "react";
import styled, { ThemeProvider } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";

const DxcSpinner = ({ label = "", value, showValue = false, mode = "large", margin }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.spinner}>
      <BackgroundSpinner mode={mode}>
        <DXCSpinner margin={margin} showValue={showValue} label={label} mode={mode}>
          {label && mode !== "small" && (
            <SpinnerLabel showValue={showValue} mode={mode}>
              {label}
            </SpinnerLabel>
          )}
          {value && mode !== "small" && (
            <SpinnerProgress mode={mode} showValue={showValue} label={label}>
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
    </ThemeProvider>
  );
};

DxcSpinner.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  showValue: PropTypes.bool,
  mode: PropTypes.oneOf(["large", "small", "overlay"]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

const BackgroundSpinner = styled.div`
  background-color: ${(props) => (props.mode === "overlay" ? `${props.theme.overlayColor}` : "transparent")};
  opacity: ${(props) => props.mode === "overlay" && "0.8"};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.mode === "overlay" ? "center" : "")};
  align-items: ${(props) => (props.mode === "overlay" ? "center" : "")};
  position: ${(props) => (props.mode === "overlay" ? "fixed" : "")};
  top: ${(props) => (props.mode === "overlay" ? 0 : "")};
  left: ${(props) => (props.mode === "overlay" ? 0 : "")};
  right: ${(props) => (props.mode === "overlay" ? 0 : "")};
  bottom: ${(props) => (props.mode === "overlay" ? 0 : "")};
  z-index: ${(props) => (props.mode === "overlay" ? 1000 : "")};
`;

const DXCSpinner = styled.div`
  box-sizing: unset;
  font-family: ${(props) => props.theme.fontFamily};
  border-radius: 80px;
  border: ${(props) =>
    (props.mode === "small" && `6px solid${props.theme.totalCircleColor}`) ||
    `8.5px solid ${props.theme.totalCircleColor}`};
  width: ${(props) => (props.mode === "small" && "30px") || "120px"};
  height: ${(props) => (props.mode === "small" && "30px") || "120px"};
  z-index: ${(props) => (props.mode === "overlay" ? "100" : "")};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  .MuiCircularProgress-colorPrimary {
    color: ${(props) => props.theme.trackCircleColor};
    width: ${(props) => (props.mode === "small" && "44px !important") || "141px !important"};
    height: ${(props) => (props.mode === "small" && "44px !important") || "141px !important"};
    margin-top: ${(props) =>
      props.label === "" && props.showValue === false && props.mode === "large"
        ? "-10px"
        : props.mode === "small"
        ? "-7px"
        : props.label !== "" && props.showValue === false
        ? "-80px"
        : props.label === "" && props.showValue === true && props.mode === "overlay"
        ? "-10.75px"
        : props.label === "" && props.showValue === true && props.mode !== "overlay"
        ? "-79.75px"
        : props.label !== "" && props.showValue === true && props.mode === "overlay"
        ? "-72.5px"
        : "-89.5px"};
    margin-left: ${(props) => (props.mode === "small" && "-7px !important") || "-11px !important"};
  }

  .MuiCircularProgress-circle {
    stroke-width: ${(props) => (props.mode === "small" && "6.2px") || "2.7px"};
    r: ${(props) => (props.mode === "small" && "18.2") || "20.2"};
  }
`;

const SpinnerLabel = styled.div`
  margin-top: ${(props) => (props.showValue === false && "52px") || "45px"};
  color: ${(props) => (props.mode === "overlay" ? "#FFFFFF" : props.theme.fontColor)};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SpinnerProgress = styled.div`
  margin-top: ${(props) => (props.label === "" && "52px") || ""};
  display: ${(props) => (props.value !== "" && props.showValue === true && "block") || "none"};
  color: ${(props) => (props.mode === "overlay" ? "#FFFFFF" : props.theme.fontColor)};
  font-size: ${(props) => props.theme.fontSize};
  text-align: center;
`;

export default DxcSpinner;
