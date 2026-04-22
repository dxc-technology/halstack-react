import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { DxcFlex, DxcHeading, DxcTypography, DxcButton, DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

interface TourStep {
  title?: ReactNode;
  content?: ReactNode;
}

interface TooltipContainerProps {
  "aria-modal": boolean;
  role: string;
}

interface TourPopoverProps {
  step: TourStep;
  index: number;
  size: number;
  isLastStep: boolean;
  onFinish: () => void;
  onRestart?: () => void;
  controls: {
    next: () => void;
    prev: () => void;
    skip: () => void;
  };
  tooltipProps: TooltipContainerProps;
}

const PopoverContainer = styled.div`
  box-sizing: border-box;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-400);
  padding: var(--spacing-padding-xs);
  background-color: var(--color-bg-neutral-lightest);
`;

const TourPopover = ({
  step,
  index,
  size,
  isLastStep,
  onFinish,
  onRestart,
  controls,
  tooltipProps,
}: TourPopoverProps) => {
  return (
    <PopoverContainer {...tooltipProps}>
      <DxcContainer width="320px">
        <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-s)" fullHeight>
          <DxcInset horizontal="var(--spacing-padding-m)">
            <DxcFlex direction="column" alignSelf="stretch" gap="var(--spacing-gap-s)">
              <DxcInset vertical="var(--spacing-padding-xs)">
                <DxcFlex direction="row" justifyContent="space-between" alignItems="center" gap="var(--spacing-gap-s)">
                  <DxcHeading level={4} text={step.title as string} />
                  <DxcButton icon="close" mode="tertiary" size={{ height: "small" }} onClick={onFinish} />
                </DxcFlex>
              </DxcInset>

              <DxcTypography as="p" fontSize="var(--typography-body-s)" lineHeight="normal">
                {step.content}
              </DxcTypography>
            </DxcFlex>
          </DxcInset>

          <DxcContainer
            width="100%"
            boxSizing="border-box"
            padding={{ right: "var(--spacing-padding-s)", left: "var(--spacing-padding-s)" }}
          >
            <DxcFlex justifyContent="space-between" alignItems="center">
              <DxcTypography color="var(--color-neutral-600)" fontSize="0.75rem">
                {index + 1} / {size}
              </DxcTypography>

              <DxcFlex gap="0.5rem" alignItems="center">
                {isLastStep ? (
                  <>
                    <DxcButton
                      label="Restart"
                      icon="refresh"
                      mode="secondary"
                      size={{ height: "medium" }}
                      onClick={onRestart}
                    />
                    <DxcButton label="Got it!" size={{ height: "medium" }} onClick={onFinish} />
                  </>
                ) : (
                  <>
                    {index > 0 && !isLastStep && (
                      <DxcButton
                        label="Previous"
                        icon="arrow_back_ios"
                        mode="secondary"
                        size={{ height: "medium" }}
                        onClick={controls.prev}
                      />
                    )}
                    <DxcButton
                      label="Next"
                      icon="arrow_forward_ios"
                      iconPosition="after"
                      size={{ height: "medium" }}
                      onClick={controls.next}
                    />
                  </>
                )}
              </DxcFlex>
            </DxcFlex>
          </DxcContainer>
        </DxcFlex>
      </DxcContainer>
    </PopoverContainer>
  );
};

export default TourPopover;
