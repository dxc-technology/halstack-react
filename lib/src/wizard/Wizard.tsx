import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import { validIcon, invalidIcon } from "./Icons";
import WizardPropsType from "./types";

const DxcWizard = ({
  mode = "horizontal",
  currentStep,
  onStepClick,
  steps,
  margin,
  tabIndex = 0,
}: WizardPropsType): JSX.Element => {
  const [innerCurrent, setInnerCurrentStep] = useState(currentStep || 0);
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
    <ThemeProvider theme={colorsTheme.wizard}>
      <StepsContainer mode={mode} margin={margin}>
        {steps?.map((step, i) => {
          return (
            <StepContainer key={`step${i}`} mode={mode} lastStep={i === steps?.length - 1}>
              <Step
                tabIndex={tabIndex}
                onClick={() => handleStepClick(i)}
                mode={mode}
                disabled={step.disabled}
                first={i === 0}
                last={i === steps?.length - 1}
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
                      <ValidityIconContainer>{validIcon}</ValidityIconContainer>
                    ) : (
                      <ValidityIconContainer>{invalidIcon}</ValidityIconContainer>
                    )
                  ) : (
                    ""
                  )}
                </StepHeader>
                {step.label || step.description ? (
                  <InfoContainer>
                    {step.label ? (
                      <Label disabled={step.disabled} visited={i <= innerCurrent}>
                        {step.label}
                      </Label>
                    ) : (
                      ""
                    )}
                    {step.description ? (
                      <Description disabled={step.disabled} visited={i <= innerCurrent}>
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
  font-family: ${(props) => props.theme.fontFamily};

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
        ? "0 0 24px 0"
        : "0 24px 0 0"
      : props.last
      ? props.mode === "vertical"
        ? "24px 0 0 0"
        : "0 0 0 24px"
      : props.mode === "vertical"
      ? "24px 0"
      : "0 24px"};

  padding: 0px;
  ${(props) => (props.disabled ? "cursor: not-allowed" : "")};

  &:hover {
    ${(props) => (props.disabled ? "" : "cursor: pointer")};
  }
  &:focus {
    outline: ${(props) => props.theme.focusColor} auto 1px;
  }
`;

const StepHeader = styled.div`
  position: relative;
  display: inline-flex;
  padding-bottom: 4px;
`;

const IconContainer = styled.div`
  width: ${(props) =>
    props.disabled
      ? props.theme.disabledCircleWidth
      : props.current
      ? props.theme.selectedCircleWidth
      : props.theme.circleWidth};
  height: ${(props) =>
    props.disabled
      ? props.theme.disabledCircleHeight
      : props.current
      ? props.theme.selectedCircleHeight
      : props.theme.circleHeight};

  ${(props) => `
    ${
      !props.current && !props.disabled
        ? `border: ${props.theme.circleBorderThickness} ${props.theme.circleBorderStyle} ${props.theme.circleBorderColor};`
        : props.current
        ? `border: ${props.theme.selectedCircleBorderThickness} ${props.theme.selectedCircleBorderStyle} ${props.theme.selectedCircleBorderColor};`
        : props.disabled
        ? `border: ${props.theme.disabledCircleBorderThickness} ${props.theme.disabledCircleBorderStyle} ${props.theme.disabledCircleBorderColor};`
        : ""
    }
    background: ${
      props.disabled
        ? `${props.theme.disabledBackgroundColor}`
        : props.current
        ? `${props.theme.stepContainerSelectedBackgroundColor}`
        : `${props.theme.stepContainerBackgroundColor}`
    };
  `}
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledFontColor};`
      : `color: ${props.current ? props.theme.stepContainerSelectedFontColor : props.theme.stepContainerFontColor};`};

  border-radius: ${(props) =>
    !props.current && !props.disabled
      ? props.theme.circleBorderRadius
      : props.current
      ? props.theme.selectedCircleBorderRadius
      : props.disabled
      ? props.theme.disabledCircleBorderRadius
      : ""};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: ${(props) => props.theme.stepContainerIconSize};
  height: ${(props) => props.theme.stepContainerIconSize};
`;

const StepIconContainer = styled.div`
  width: ${(props) => props.theme.stepContainerIconSize};
  height: ${(props) => props.theme.stepContainerIconSize};
  overflow: hidden;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Number = styled.p`
  font-size: ${(props) => props.theme.stepContainerFontSize};
  font-family: ${(props) => props.theme.stepContainerFontFamily};
  font-style: ${(props) => props.theme.stepContainerFontStyle};
  font-weight: ${(props) => props.theme.stepContainerFontWeight};
  letter-spacing: ${(props) => props.theme.stepContainerLetterSpacing};
  opacity: 1;
  margin: 0px 0px 0px 1px;
`;

const ValidityIconContainer = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 22.5px;
  left: 22.5px;
`;

const InfoContainer = styled.div`
  margin-left: 12px;
`;

const Label = styled.p`
  text-align: ${(props) => props.theme.labelTextAlign};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  letter-spacing: ${(props) => props.theme.labelLetterSpacing};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledFontColor};`
      : `color: ${props.visited ? props.theme.visitedLabelFontColor : props.theme.labelFontColor};`};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  margin: 0;
`;

const Description = styled.p`
  text-align: ${(props) => props.theme.descriptionTextAlign};
  font-family: ${(props) => props.theme.descriptionFontFamily};
  font-size: ${(props) => props.theme.descriptionFontSize};
  font-style: ${(props) => props.theme.descriptionFontStyle};
  font-weight: ${(props) => props.theme.descriptionFontWeight};
  letter-spacing: ${(props) => props.theme.descriptionLetterSpacing};
  text-transform: ${(props) => props.theme.descriptionFontTextTransform};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledFontColor};`
      : `color: ${props.visited ? props.theme.visitedDescriptionFontColor : props.theme.descriptionFontColor};`};
  margin: 0;
`;

const StepSeparator = styled.div`
  width: ${(props) => (props.mode === "horizontal" ? "" : "0")};
  height: ${(props) => (props.mode === "horizontal" ? "0" : "")};
  ${(props) => (props.mode === "vertical" ? "margin: 0 18px;" : "")}
  border: ${(props) =>
    `${props.theme.separatorBorderStyle} ${props.theme.separatorBorderThickness} ${props.theme.separatorColor}`};
  opacity: 1;
  flex-grow: 1;
`;

export default DxcWizard;
