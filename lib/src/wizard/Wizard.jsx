import React, { useMemo, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces, defaultTheme, componentTokens } from "../common/variables.js";
import { getCustomTheme } from "../common/utils.js";
import useTheme from "../useTheme.js";
import ValidIcon from "./valid_icon.svg";
import InvalidIcon from "./invalid_icon.svg";

const DxcWizard = ({ mode = "horizontal", currentStep, onStepClick, steps, margin }) => {
  const [innerCurrent, setInnerCurrentStep] = React.useState(currentStep || 0);
  const renderedCurrent = currentStep == null ? innerCurrent : currentStep;
  const colorsTheme = useTheme();

  const handleStepClick = (newValue) => {
    if (currentStep == null) {
      setInnerCurrentStep(newValue);
    }

    if (onStepClick) {
      onStepClick(newValue);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <StepsContainer mode={mode} margin={margin}>
        {steps.map((step, i) => {
          return (
            <StepContainer key={`step${i}`} mode={mode} lastStep={i === steps.length - 1}>
              <Step
                onClick={() => handleStepClick(i)}
                mode={mode}
                disabled={step.disabled}
                first={i === 0}
                last={i === steps.length - 1}
              >
                <StepHeader>
                  <IconContainer current={i === renderedCurrent} visited={i < renderedCurrent} disabled={step.disabled}>
                    {step.icon ? (
                      <StepIconContainer disabled={step.disabled}>
                        {typeof step.icon === "object" ? step.icon : React.createElement(step.icon)}
                      </StepIconContainer>
                    ) : step.iconSrc ? (
                      <Icon src={step.iconSrc}></Icon>
                    ) : (
                      <Number disabled={step.disabled} current={i === renderedCurrent}>
                        {i + 1}
                      </Number>
                    )}
                  </IconContainer>
                  {step.valid !== undefined ? (
                    step.valid ? (
                      <ValidityIcon src={ValidIcon}></ValidityIcon>
                    ) : (
                      <ValidityIcon src={InvalidIcon}></ValidityIcon>
                    )
                  ) : (
                    ""
                  )}
                </StepHeader>
                {step.label || step.description ? (
                  <InfoContainer active={i <= innerCurrent}>
                    {step.label ? <Label>{step.label}</Label> : ""}
                    {step.description ? <Description>{step.description}</Description> : ""}
                  </InfoContainer>
                ) : (
                  ""
                )}
              </Step>
              {i === steps.length - 1 ? "" : <StepSeparator mode={mode}></StepSeparator>}
            </StepContainer>
          );
        })}
      </StepsContainer>
    </ThemeProvider>
  );
};

const StepsContainer = styled.div`
  display: inline-flex;
  flex-direction: ${(props) => (props.mode === "vertical" ? "column" : "row")};
  justify-content: "center";
  ${(props) => (props.mode === "vertical" ? "height: 500px" : "width: 100%")};

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

const StepContainer = styled.div`
  display: inline-flex;
  ${(props) => (props.mode === "vertical" ? "" : "align-items: center;")}
  flex-grow: ${(props) => (props.lastStep ? "0" : "1")};
  flex-direction: ${(props) => (props.mode === "vertical" ? "column" : "row")};
  ${(props) => (props.mode === "vertical" ? "width: 100%;" : "")}
`;

const Step = styled.button`
  border: none;
  background: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) =>
    props.first
      ? props.mode === "vertical"
        ? "0 0 25px 0"
        : "0 25px 0 0"
      : props.last
      ? props.mode === "vertical"
        ? "25px 0 0 0"
        : "0 0 0 25px"
      : props.mode === "vertical"
      ? "25px 0"
      : "0 25px"};

  padding: 0px;
  ${(props) => (props.disabled ? "cursor: not-allowed" : "")};

  &:focus {
    outline: none;
  }

  &:hover {
    ${(props) => (props.disabled ? "" : "cursor: pointer")};
  }
`;

const StepHeader = styled.div`
  position: relative;
  display: inline-flex;
  padding-bottom: 3px;
`;

const IconContainer = styled.div`
  width: ${(props) => (!props.current && !props.disabled ? "32px" : "36px")};
  height: ${(props) => (!props.current && !props.disabled ? "32px" : "36px")};

  ${(props) => `
    ${!props.current && !props.disabled ? `border: 2px solid ${props.theme.wizard.borderColor};` : ""}
    background: ${
      props.disabled
        ? `${props.theme.wizard.disabledBackground}`
        : props.current
        ? `${props.theme.wizard.selectedBackgroundColor}`
        : ""
    };
    ${props.current ? `color: ${props.theme.wizard.selectedFont};` : ""}
  `}

  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 19px;
  height: 19px;
`;

const StepIconContainer = styled.div`
  width: 19px;
  height: 19px;
  overflow: hidden;
  color: ${(props) => (props.disabled ? `${props.theme.wizard.disabledFont}` : `${props.theme.wizard.fontColor}`)};
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Number = styled.p`
  font: Normal 16px/22px Open Sans;
  letter-spacing: 0.77px;
  color: ${(props) => (props.disabled ? `${props.theme.wizard.disabledFont}` : `${props.theme.wizard.fontColor}`)};
  opacity: 1;
  margin: 0;
`;

const ValidityIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const InfoContainer = styled.div`
  margin-left: 10px;
  color: ${(props) => (props.active ? `${props.theme.wizard.fontColor}` : `${props.theme.wizard.disabledFont}`)};
`;

const Label = styled.p`
  text-align: left;
  font: Normal 16px/22px Open Sans;
  letter-spacing: 0.77px;
  color: inherit;
  margin: 0;
`;

const Description = styled.p`
  text-align: left;
  font: Lighter 12px/17px Open Sans;
  letter-spacing: 0.58px;
  color: inherit;
  margin: 0;
`;

const StepSeparator = styled.div`
  width: ${(props) => (props.mode === "horizontal" ? "" : "0")};
  height: ${(props) => (props.mode === "horizontal" ? "0" : "")};
  ${(props) => (props.mode === "vertical" ? "margin: 0 18px;" : "")}
  border: ${(props) => `solid 1px ${props.theme.wizard.lineColor}`};
  opacity: 1;
  flex-grow: 1;
`;

DxcWizard.propTypes = {
  mode: PropTypes.oneOf(["horizontal", "vertical"]),
  currentStep: PropTypes.number,
  onStepClick: PropTypes.func,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      iconSrc: PropTypes.string,
      disabled: PropTypes.bool,
      valid: PropTypes.bool,
    })
  ),
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

export default DxcWizard;
