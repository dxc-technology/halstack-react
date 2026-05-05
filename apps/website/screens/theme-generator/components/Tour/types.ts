import { ReactNode } from "react";

type TourStep = {
  title?: ReactNode;
  content?: ReactNode;
};

type TooltipContainerProps = {
  "aria-modal": boolean;
  role: string;
};

export type TourPopoverProps = {
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
};

export type TourProps = {
  currentStep: number;
  onTourStepIndexChange?: (index: number) => void;
};
