import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext from "../BackgroundColorContext.js";

const DxcProgressBar = ({ label = "", overlay = true, value, showValue = false, margin }) => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  return (
    <ThemeProvider theme={colorsTheme.progressBar}>
      <BackgroundProgressBar overlay={overlay}>
        <DXCProgressBar overlay={overlay} margin={margin} backgroundType={backgroundType}>
          <InfoProgressBar>
            <ProgressBarLabel overlay={overlay} backgroundType={backgroundType}>
              {label}
            </ProgressBarLabel>
            <ProgressBarProgress overlay={overlay} showValue={showValue} backgroundType={backgroundType}>
              {value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100} %
            </ProgressBarProgress>
          </InfoProgressBar>
          <LinearProgress
            variant={showValue ? "determinate" : "indeterminate"}
            value={value === "" ? 0 : value >= 0 && value <= 100 ? value : value < 0 ? 0 : 100}
          />
        </DXCProgressBar>
      </BackgroundProgressBar>
    </ThemeProvider>
  );
};

const BackgroundProgressBar = styled.div`
  background-color: ${(props) => (props.overlay === true ? `${props.theme.overlayColor}` : "transparent")};
  opacity: ${(props) => props.overlay === true && "0.8"};
  width: ${(props) => (props.overlay === true ? "100%" : "")};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.overlay === true ? "center" : "")};
  height: ${(props) => (props.overlay === true ? "100vh" : "")};
  align-items: ${(props) => (props.overlay === true ? "center" : "")};
  min-width: 100px;
  max-width: ${(props) => (props.overlay === true ? "100%" : "")};
  position: ${(props) => (props.overlay === true ? "fixed" : "")};
  top: ${(props) => (props.overlay === true ? "0" : "")};
  bottom: ${(props) => (props.overlay === true ? "0" : "")};
  left: ${(props) => (props.overlay === true ? "0" : "")};
  right: ${(props) => (props.overlay === true ? "0" : "")};
  z-index: ${(props) => (props.overlay ? 1300 : "")};
`;

const DXCProgressBar = styled.div`
  z-index: ${(props) => (props.overlay === true && "100") || "0"};
  width: ${(props) => (props.overlay === true ? "80%" : "100%")};
  .MuiLinearProgress-root {
    height: ${(props) => props.theme.thickness};
    background-color: ${(props) => props.theme.totalLineColor};
    border-radius: ${(props) => props.theme.borderRadius};
  }
  .MuiLinearProgress-bar {
    background-color: ${(props) =>
      props.backgroundType === "dark" ? props.theme.trackLineColorOnDark : props.theme.trackLineColor};
  }
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
`;

const InfoProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 685px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 8px;
  align-items: baseline;
  justify-content: space-between;
`;

const ProgressBarLabel = styled.div`
  font-family: ${(props) => props.theme.labelFontFamily};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.overlay === true
      ? "#FFFFFF"
      : props.theme.labelFontColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div`
  font-family: ${(props) => props.theme.valueFontFamily};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-size: ${(props) => props.theme.valueFontSize};
  font-weight: ${(props) => props.theme.valueFontWeight};
  text-transform: ${(props) => props.theme.valueFontTextTransform};
  color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.valueFontColorOnDark
      : props.overlay === true
      ? "#FFFFFF"
      : props.theme.valueFontColor};
  display: ${(props) => (props.value !== "" && props.showValue === true && "block") || "none"};
  flex-shrink: 0;
`;

DxcProgressBar.propTypes = {
  label: PropTypes.string,
  overlay: PropTypes.bool,
  value: PropTypes.number,
  showValue: PropTypes.bool,
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

export default DxcProgressBar;
