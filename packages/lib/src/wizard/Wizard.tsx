import { useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcDivider from "../divider/Divider";
import DxcIcon from "../icon/Icon";
import WizardPropsType, { StepProps } from "./types";
import DxcFlex from "../flex/Flex";
import icons from "./Icons";

const Wizard = styled.div<{
  mode: WizardPropsType["mode"];
  margin: WizardPropsType["margin"];
}>`
  display: flex;
  flex-direction: ${({ mode }) => (mode === "vertical" ? "column" : "row")};
  justify-content: center;
  ${({ mode }) => mode === "vertical" && "height: 100%; width: fit-content;"};
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const StepContainer = styled.div<{
  mode: WizardPropsType["mode"];
  lastStep: boolean;
}>`
  flex-grow: ${({ lastStep }) => (lastStep ? "0" : "1")};
  display: grid;
  ${({ mode }) => (mode === "horizontal" ? "grid-template-columns: auto 1fr;" : "grid-template-rows: auto 1fr;")}
  place-items: center;
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
  height: 32px;
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
  padding: var(--spacing-padding-none);
  margin: ${({ mode }) =>
    mode === "horizontal"
      ? "var(--spacing-padding-none) var(--spacing-padding-l)"
      : "var(--spacing-padding-l) var(--spacing-padding-none)"};
  cursor: pointer;

  &[aria-current="true"] {
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
  background-color: ${({ disabled, valid }) =>
    disabled
      ? valid
        ? "var(--color-bg-success-lightest)"
        : "var(--color-bg-error-lightest)"
      : valid
        ? "var(--color-bg-success-lighter)"
        : "var(--color-bg-error-lighter)"};
  border-radius: 50%;
  color: ${({ disabled, valid }) =>
    disabled
      ? valid
        ? "var(--color-fg-success-lighter)"
        : "var(--color-fg-error-lighter)"
      : valid
        ? "var(--color-fg-success-stronger)"
        : "var(--color-fg-error-stronger)"};
  svg {
    width: 16px;
    height: var(--height-xxs);
  }
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
            aria-current={(currentStep ?? innerCurrent) === i}
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
          {i !== steps.length - 1 && <DxcDivider color="darkGrey" orientation={mode} />}
        </StepContainer>
      ))}
    </Wizard>
  );
}
