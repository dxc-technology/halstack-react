import React from "react";
import styled from "@emotion/styled";
import { DxcFlex, DxcHeading, DxcTypography, DxcButton, DxcContainer, DxcInset } from "@dxc-technology/halstack-react";
import { TourPopoverProps } from "../types";

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
      <DxcContainer
        width="320px"
        boxSizing="border-box"
        padding={{ left: "var(--spacing-padding-s)", right: "var(--spacing-padding-s)" }}
      >
        <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-m)" fullHeight>
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignSelf="stretch">
            <DxcInset vertical="var(--spacing-padding-xs)">
              <DxcFlex direction="row" justifyContent="space-between" alignItems="center" gap="var(--spacing-gap-s)">
                <DxcHeading level={4} text={step.title as string} />
                <DxcTypography fontSize="var(--typography-heading-s)">
                  {index + 1} / {size}
                </DxcTypography>
              </DxcFlex>
            </DxcInset>

            <DxcTypography as="p" fontSize="var(--typography-body-s)" lineHeight="normal">
              {step.content}
            </DxcTypography>
          </DxcFlex>

          <DxcContainer width="100%" boxSizing="border-box">
            {isLastStep ? (
              <DxcFlex gap="var(--spacing-gap-s)" justifyContent="end">
                <DxcButton
                  label="Restart"
                  icon="refresh"
                  mode="secondary"
                  size={{ height: "medium" }}
                  onClick={onRestart}
                />
                <DxcButton label="Got it!" size={{ height: "medium" }} onClick={onFinish} />
              </DxcFlex>
            ) : (
              <DxcFlex justifyContent="space-between">
                <DxcButton label="Skip" mode="tertiary" size={{ height: "medium" }} onClick={controls.skip} />
                <DxcFlex gap="var(--spacing-gap-s)">
                  {index > 0 && (
                    <DxcButton
                      icon="arrow_back_ios_new"
                      mode="secondary"
                      size={{ height: "medium" }}
                      onClick={controls.prev}
                    />
                  )}
                  <DxcButton
                    icon="arrow_forward_ios"
                    iconPosition="after"
                    size={{ height: "medium" }}
                    onClick={controls.next}
                  />
                </DxcFlex>
              </DxcFlex>
            )}
          </DxcContainer>
        </DxcFlex>
      </DxcContainer>
    </PopoverContainer>
  );
};

export default TourPopover;
