import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import ValidIcon from "./valid_icon.svg";
import InvalidIcon from "./invalid_icon.svg";

const DxcWizard = ({ mode = "horizontal", currentStep, onStepClick, steps, margin, tabIndex = 0 }) => {
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
                tabIndex={tabIndex}
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
                  <InfoContainer>
                    {step.label ? (
                      <Label disabled={step.disabled} active={i <= innerCurrent}>
                        {step.label}
                      </Label>
                    ) : (
                      ""
                    )}
                    {step.description ? (
                      <Description disabled={step.disabled} active={i <= innerCurrent}>
                        {step.description}
                      </Description>
                    ) : (
                      ""
                    )}
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
  font-family: ${(props) => props.theme.wizard.fontFamily};

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
  width: ${(props) =>
    !props.current && !props.disabled
      ? `${props.theme.wizard.circleSelectedWidth}`
      : `${props.theme.wizard.circleWidth}`};
  height: ${(props) =>
    !props.current && !props.disabled
      ? `${props.theme.wizard.circleSelectedHeight}`
      : `${props.theme.wizard.circleHeight}`};

  ${(props) => `
    ${
      !props.current && !props.disabled
        ? `border: ${props.theme.wizard.circleBorderThickness} ${props.theme.wizard.circleBorderStyle} ${props.theme.wizard.circleBorderColor};`
        : props.current
        ? `border: ${props.theme.wizard.circleSelectedBorderThickness} ${props.theme.wizard.circleSelectedBorderStyle} ${props.theme.wizard.circleSelectedBorderColor};`
        : props.disabled
        ? `border: ${props.theme.wizard.circleDisabledBorderThickness} ${props.theme.wizard.circleDisabledBorderStyle} ${props.theme.wizard.circleDisabledBorderColor};`
        : ""
    }
    background: ${
      props.disabled
        ? `${props.theme.wizard.disabledBackgroundColor}`
        : props.current
        ? `${props.theme.wizard.stepContainerSelectedBackgroundColor}`
        : `${props.theme.wizard.stepContainerBackgroundColor}`
    };
  `}
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.wizard.disabledFontColor};`
      : `color: ${
          props.current ? props.theme.wizard.stepContainerSelectedFontColor : props.theme.wizard.stepContainerFontColor
        };`};

  border-radius: ${(props) =>
    !props.current && !props.disabled
      ? props.theme.wizard.circleBorderRadius
      : props.current
      ? props.theme.wizard.circleSelectedBorderRadius
      : props.disabled
      ? props.theme.wizard.circleDisabledBorderRadius
      : ""};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: ${(props) => props.theme.wizard.stepContainerIconSize};
  height: ${(props) => props.theme.wizard.stepContainerIconSize};
`;

const StepIconContainer = styled.div`
  width: ${(props) => props.theme.wizard.stepContainerIconSize};
  height: ${(props) => props.theme.wizard.stepContainerIconSize};
  overflow: hidden;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Number = styled.p`
  font-size: ${(props) => props.theme.wizard.stepContainerFontSize};
  font-family: ${(props) => props.theme.wizard.stepContainerFontFamily};
  font-style: ${(props) => props.theme.wizard.stepContainerFontStyle};
  font-weight: ${(props) => props.theme.wizard.stepContainerFontWeight};
  letter-spacing: ${(props) => props.theme.wizard.stepContainerLetterSpacing};
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
`;

const Label = styled.p`
  text-align: ${(props) => props.theme.wizard.labelTextAlign};
  font-family: ${(props) => props.theme.wizard.labelFontFamily};
  font-size: ${(props) => props.theme.wizard.labelFontSize};
  font-style: ${(props) => props.theme.wizard.labelFontStyle};
  font-weight: ${(props) => props.theme.wizard.labelFontWeight};
  letter-spacing: ${(props) => props.theme.wizard.labelLetterSpacing};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.wizard.disabledFontColor};`
      : `color: ${props.active ? props.theme.wizard.labelActiveFontColor : props.theme.wizard.labelFontColor};`};
  text-transform: ${(props) => props.theme.wizard.labelFontTextTransform};
  margin: 0;
`;

const Description = styled.p`
  text-align: ${(props) => props.theme.wizard.descriptionTextAlign};
  font-family: ${(props) => props.theme.wizard.descriptionFontFamily};
  font-size: ${(props) => props.theme.wizard.descriptionFontSize};
  font-style: ${(props) => props.theme.wizard.descriptionFontStyle};
  font-weight: ${(props) => props.theme.wizard.descriptionFontWeight};
  letter-spacing: ${(props) => props.theme.wizard.descriptionLetterSpacing};
  text-transform: ${(props) => props.theme.wizard.descriptionFontTextTransform};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.wizard.disabledFontColor};`
      : `color: ${
          props.active ? props.theme.wizard.descriptionActiveFontColor : props.theme.wizard.descriptionFontColor
        };`};
  margin: 0;
`;

const StepSeparator = styled.div`
  width: ${(props) => (props.mode === "horizontal" ? "" : "0")};
  height: ${(props) => (props.mode === "horizontal" ? "0" : "")};
  ${(props) => (props.mode === "vertical" ? "margin: 0 18px;" : "")}
  border: ${(props) =>
    `${props.theme.wizard.separatorBorderStyle} ${props.theme.wizard.separatorBorderThickness} ${props.theme.wizard.separatorColor}`};
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
  tabIndex: PropTypes.number,
};

export default DxcWizard;
