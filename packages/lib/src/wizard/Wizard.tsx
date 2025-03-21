import { useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcDivider from "../divider/Divider";
import DxcIcon from "../icon/Icon";
import WizardPropsType, { StepProps } from "./types";
import DxcFlex from "../flex/Flex";
import icons from "./Icons";

const Wizard = styled.div<{
  margin: WizardPropsType["margin"];
  mode: WizardPropsType["mode"];
}>`
  display: flex;
  flex-direction: ${({ mode }) => (mode === "vertical" ? "column" : "row")};
  justify-content: center;
  ${({ mode }) => mode === "vertical" && "height: 100%; width: fit-content;"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const StepContainer = styled.div<{
  lastStep: boolean;
  mode: WizardPropsType["mode"];
}>`
  flex-grow: ${({ lastStep }) => (lastStep ? "0" : "1")};
  display: grid;
  ${({ mode }) => (mode === "horizontal" ? "grid-template-columns: auto 1fr;" : "grid-template-rows: auto 1fr;")}
`;

const IconContainer = styled.div<{
  current: boolean;
  disabled: StepProps["disabled"];
  visited: boolean;
}>`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: var(--border-width-m) var(--border-style-default) var(--border-color-neutral-dark);
  height: var(--height-m);
  width: 32px;
  font-size: var(--height-xxs);
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const Number = styled.span`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
`;

const Label = styled.span`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  white-space: nowrap;
`;

const Description = styled.span`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);
  text-align: left;
`;

const Step = styled.button<{
  mode: WizardPropsType["mode"];
  unvisited: boolean;
}>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-s);
  margin: ${({ mode }) =>
    mode === "horizontal"
      ? "var(--spacing-padding-none) var(--spacing-padding-l)"
      : "var(--spacing-padding-l) var(--spacing-padding-none)"};
  padding: var(--spacing-padding-none);
  width: fit-content;
  cursor: pointer;

  &[aria-current="step"] {
    ${IconContainer} {
      background-color: var(--color-bg-primary-strong);
      border: none;
    }
    ${IconContainer}, ${Number} {
      color: var(--color-fg-neutral-bright);
    }
  }
  ${({ unvisited }) =>
    unvisited &&
    `${IconContainer} {
      border-color: var(--border-color-neutral-strongest);
    }
    ${IconContainer}, ${Number}, ${Label}, ${Description} {
      color: var(--color-fg-neutral-stronger);
    }
  `}
  &:focus:enabled {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  }
  &:disabled {
    cursor: not-allowed;
    ${IconContainer} {
      background-color: var(--color-bg-neutral-light);
      border: none;
    }
    ${IconContainer}, ${Number}, ${Label}, ${Description} {
      color: var(--color-fg-neutral-medium);
    }
  }
`;

const StepIndicator = styled.div<{
  hasValidityIcon: boolean;
}>`
  position: relative;
  height: ${({ hasValidityIcon }) => (hasValidityIcon ? "var(--height-l)" : "var(--height-m)")};
  width: ${({ hasValidityIcon }) => (hasValidityIcon ? "36px" : "32px")};
`;

const ValidityIconContainer = styled.div<{ disabled?: boolean; valid: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  border-radius: 50%;
  ${({ disabled, valid }) =>
    disabled
      ? valid
        ? "background-color: var(--color-bg-success-lightest); color: var(--color-fg-success-lighter);"
        : "background-color: var(--color-bg-error-lightest); color: var(--color-fg-error-lighter);"
      : valid
        ? "background-color: var(--color-bg-success-lighter); color: var(--color-fg-success-stronger);"
        : "background-color: var(--color-bg-error-lighter); color: var(--color-fg-error-stronger);"}
  svg {
    width: 16px;
    height: var(--height-xxs);
  }
`;

const DividerContainer = styled.div<{ mode: WizardPropsType["mode"] }>`
  display: grid;
  place-items: center;
  ${({ mode }) => mode === "vertical" && "width: 32px"};
`;

export default function DxcWizard({
  currentStep,
  defaultCurrentStep = 0,
  margin,
  mode = "horizontal",
  onStepClick,
  steps,
  tabIndex = 0,
}: WizardPropsType) {
  const [innerCurrent, setInnerCurrentStep] = useState(defaultCurrentStep);

  const handleStepOnClick = (newValue: number) => {
    setInnerCurrentStep(newValue);
    onStepClick?.(newValue);
  };

  return (
    <Wizard margin={margin} mode={mode} role="group">
      {steps.map((step, i) => (
        <StepContainer key={`step${i}`} lastStep={i === steps.length - 1} mode={mode}>
          <Step
            aria-current={(currentStep ?? innerCurrent) === i ? "step" : false}
            disabled={step.disabled}
            mode={mode}
            onClick={() => {
              handleStepOnClick(i);
            }}
            tabIndex={tabIndex}
            unvisited={i > (currentStep ?? innerCurrent)}
          >
            <StepIndicator hasValidityIcon={step.valid != null}>
              <IconContainer
                current={i === (currentStep ?? innerCurrent)}
                disabled={step.disabled}
                visited={i < (currentStep ?? innerCurrent)}
              >
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
              {step.valid != null && (
                <ValidityIconContainer disabled={step.disabled} valid={step.valid}>
                  {step.valid ? icons.valid : icons.invalid}
                </ValidityIconContainer>
              )}
            </StepIndicator>
            {(step.label || step.description) && (
              <DxcFlex direction="column" alignItems="flex-start">
                {step.label && <Label>{step.label}</Label>}
                {step.description && <Description>{step.description}</Description>}
              </DxcFlex>
            )}
          </Step>
          {i !== steps.length - 1 && (
            <DividerContainer mode={mode}>
              <DxcDivider color="darkGrey" orientation={mode} />
            </DividerContainer>
          )}
        </StepContainer>
      ))}
    </Wizard>
  );
}
