import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import WizardPropsType, { StepProps } from "./types";
import DxcIcon from "../icon/Icon";

const icons = {
  validIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path data-name="Path 2946" d="M0,0H18V18H0Z" fill="none" />
      <path
        data-name="Path 2947"
        d="M9.986,4a5.986,5.986,0,1,0,5.986,5.986A5.994,5.994,0,0,0,9.986,4Zm-1.5,9.727L5.5,10.734,6.551,9.679l1.938,1.93L13.42,6.679l1.055,1.063Z"
        transform="translate(-0.986 -0.986)"
        fill="#eafaef"
        opacity="0.999"
      />
      <path
        data-name="Path 2948"
        d="M9.493,2a7.493,7.493,0,1,0,7.493,7.493A7.5,7.5,0,0,0,9.493,2Zm0,13.487a5.994,5.994,0,1,1,5.994-5.994A6,6,0,0,1,9.493,15.487Zm3.439-9.306L7.994,11.119,6.054,9.186,5,10.242l3,3,5.994-5.994Z"
        transform="translate(-0.493 -0.493)"
        fill="#24a148"
      />
    </svg>
  ),
  invalidIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path data-name="Path 2943" d="M0,0H18V18H0Z" fill="none" />
      <path
        data-name="Path 2944"
        d="M10,4a6,6,0,1,0,6,6A6.01,6.01,0,0,0,10,4Zm3,7.945L11.945,13,10,11.06,8.059,13,7,11.945,8.944,10,7,8.059,8.059,7,10,8.944,11.945,7,13,8.059,11.06,10Z"
        transform="translate(-1.002 -1.002)"
        fill="#ffe6e9"
      />
      <path
        data-name="Path 2945"
        d="M11.444,6.5,9.5,8.443,7.558,6.5,6.5,7.558,8.443,9.5,6.5,11.444,7.558,12.5,9.5,10.558,11.444,12.5,12.5,11.444,10.558,9.5,12.5,7.558ZM9.5,2A7.5,7.5,0,1,0,17,9.5,7.494,7.494,0,0,0,9.5,2Zm0,13.5a6,6,0,1,1,6-6A6.009,6.009,0,0,1,9.5,15.5Z"
        transform="translate(-0.501 -0.501)"
        fill="#d0011b"
      />
    </svg>
  ),
};

const DxcWizard = ({
  mode = "horizontal",
  defaultCurrentStep,
  currentStep,
  onStepClick,
  steps,
  margin,
  tabIndex = 0,
}: WizardPropsType): JSX.Element => {
  const [innerCurrent, setInnerCurrentStep] = useState(currentStep ?? defaultCurrentStep ?? 0);
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
      <StepsContainer mode={mode} margin={margin} role="group">
        {steps?.map((step, i) => (
          <StepContainer key={`step${i}`} mode={mode} lastStep={i === steps?.length - 1}>
            <Step
              onClick={() => {
                handleStepClick(i);
              }}
              disabled={step.disabled}
              mode={mode}
              first={i === 0}
              last={i === steps?.length - 1}
              aria-current={renderedCurrent === i ? "step" : "false"}
              tabIndex={tabIndex}
            >
              <StepHeader validityIcon={step.valid !== undefined}>
                <IconContainer current={i === renderedCurrent} visited={i < renderedCurrent} disabled={step.disabled}>
                  {step.icon ? (
                    typeof step.icon === "string" ? (
                      <DxcIcon icon={step.icon} />
                    ) : (
                      step.icon
                    )
                  ) : (
                    <Number>{i + 1}</Number>
                  )}
                </IconContainer>
                {step.valid !== undefined &&
                  (step.valid ? (
                    <ValidityIconContainer>{icons.validIcon}</ValidityIconContainer>
                  ) : (
                    <ValidityIconContainer>{icons.invalidIcon}</ValidityIconContainer>
                  ))}
              </StepHeader>
              {(step.label || step.description) && (
                <InfoContainer>
                  {step.label && (
                    <Label current={i === renderedCurrent} disabled={step.disabled} visited={i <= innerCurrent}>
                      {step.label}
                    </Label>
                  )}
                  {step.description && (
                    <Description current={i === renderedCurrent} disabled={step.disabled} visited={i <= innerCurrent}>
                      {step.description}
                    </Description>
                  )}
                </InfoContainer>
              )}
            </Step>
            {i === steps.length - 1 ? "" : <StepSeparator mode={mode} />}
          </StepContainer>
        ))}
      </StepsContainer>
    </ThemeProvider>
  );
};

const StepsContainer = styled.div<{ mode: WizardPropsType["mode"]; margin: WizardPropsType["margin"] }>`
  display: flex;
  flex-direction: ${(props) => (props.mode === "vertical" ? "column" : "row")};
  justify-content: center;
  ${(props) => props.mode === "vertical" && "height: 500px"};
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

const StepContainer = styled.div<{ mode: WizardPropsType["mode"]; lastStep: boolean }>`
  display: inline-flex;
  ${(props) => props.mode !== "vertical" && "align-items: center;"}
  flex-grow: ${(props) => (props.lastStep ? "0" : "1")};
  flex-direction: ${(props) => (props.mode === "vertical" ? "column" : "row")};
  ${(props) => props.mode === "vertical" && "width: fit-content;"}
`;

const Step = styled.button<{
  mode: WizardPropsType["mode"];
  disabled: StepProps["disabled"];
  first: boolean;
  last: boolean;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  background: inherit;
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
    outline: 2px solid ${(props) => props.theme.focusColor};
  }
`;

const StepHeader = styled.div<{ validityIcon: boolean }>`
  position: relative;
  display: inline-flex;
  ${(props) => props.validityIcon && "padding-bottom: 4px;"}
`;

const IconContainer = styled.div<{ current: boolean; visited: boolean; disabled: StepProps["disabled"] }>`
  width: ${(props) =>
    props.disabled
      ? props.theme.disabledStepWidth
      : props.current
      ? props.theme.selectedStepWidth
      : props.theme.stepWidth};
  height: ${(props) =>
    props.disabled
      ? props.theme.disabledStepHeight
      : props.current
      ? props.theme.selectedStepHeight
      : props.theme.stepHeight};

  ${(props) => `
    ${
      props.disabled
        ? `border: ${props.theme.disabledStepBorderThickness} ${props.theme.disabledStepBorderStyle} ${props.theme.disabledStepBorderColor};`
        : props.current
        ? `border: ${props.theme.selectedStepBorderThickness} ${props.theme.selectedStepBorderStyle} ${props.theme.selectedStepBorderColor};`
        : props.visited
        ? `border: ${props.theme.stepBorderThickness} ${props.theme.stepBorderStyle} ${props.theme.visitedStepBorderColor};`
        : `border: ${props.theme.stepBorderThickness} ${props.theme.stepBorderStyle} ${props.theme.unvisitedStepBorderColor};`
    }
    background: ${
      props.disabled
        ? `${props.theme.disabledStepBackgroundColor}`
        : props.current
        ? `${props.theme.selectedStepBackgroundColor}`
        : !props.visited
        ? `${props.theme.unvisitedStepBackgroundColor}`
        : `${props.theme.visitedStepBackgroundColor}`
    };
  `}
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledStepFontColor};`
      : `color: ${
          props.current
            ? props.theme.selectedStepFontColor
            : !props.visited
            ? props.theme.unvisitedStepFontColor
            : props.theme.visitedStepFontColor
        };`};

  border-radius: ${(props) =>
    !props.current && !props.disabled
      ? props.theme.stepBorderRadius
      : props.current
      ? props.theme.selectedStepBorderRadius
      : props.disabled
      ? props.theme.disabledStepBorderRadius
      : ""};

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: ${(props) => props.theme.stepIconSize};
  svg {
    width: ${(props) => props.theme.stepIconSize};
    height: ${(props) => props.theme.stepIconSize};
  }
`;

const Number = styled.p`
  font-size: ${(props) => props.theme.stepFontSize};
  font-family: ${(props) => props.theme.stepFontFamily};
  font-style: ${(props) => props.theme.stepFontStyle};
  font-weight: ${(props) => props.theme.stepFontWeight};
  letter-spacing: ${(props) => props.theme.stepFontTracking};
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

const Label = styled.p<{ current: boolean; visited: boolean; disabled: StepProps["disabled"] }>`
  text-align: ${(props) => props.theme.labelTextAlign};
  font-family: ${(props) => props.theme.labelFontFamily};
  font-size: ${(props) => props.theme.labelFontSize};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-weight: ${(props) => props.theme.labelFontWeight};
  letter-spacing: ${(props) => props.theme.labelFontTracking};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledLabelFontColor};`
      : `color: ${
          !props.visited
            ? props.theme.unvisitedLabelFontColor
            : props.current
            ? props.theme.selectedLabelFontColor
            : props.theme.visitedLabelFontColor
        };`};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  margin: 0;
`;

const Description = styled.p<{ current: boolean; visited: boolean; disabled: StepProps["disabled"] }>`
  text-align: ${(props) => props.theme.helperTextTextAlign};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  letter-spacing: ${(props) => props.theme.helperTextFontTracking};
  text-transform: ${(props) => props.theme.helperTextFontTextTransform};
  ${(props) =>
    props.disabled
      ? `color: ${props.theme.disabledHelperTextFontColor};`
      : `color: ${
          !props.visited
            ? props.theme.unvisitedHelperTextFontColor
            : props.current
            ? props.theme.selectedHelperTextFontColor
            : props.theme.visitedHelperTextFontColor
        };`};
  margin: 0;
`;

const StepSeparator = styled.div<{ mode: WizardPropsType["mode"] }>`
  ${(props) => (props.mode === "horizontal" ? "height: 0;" : "width: 0;")};
  ${(props) => props.mode === "vertical" && "margin: 0 18px;"}
  border: ${(props) =>
    `${props.theme.separatorBorderStyle} ${props.theme.separatorBorderThickness} ${props.theme.separatorColor}`};
  opacity: 1;
  flex-grow: 1;
`;

export default DxcWizard;
