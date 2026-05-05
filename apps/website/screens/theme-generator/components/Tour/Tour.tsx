import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ACTIONS, EVENTS, Joyride, STATUS, type EventData, type Step as JoyrideStep } from "react-joyride";
import { DxcButton, DxcContainer, DxcDialog, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";
import TourPopover from "./TourPopover";
import { TourProps } from "./types";

const firstStepTour: JoyrideStep[] = [
  {
    title: "The 3-Step Journey",
    content: (
      <>
        To build your theme, we'll guide you through 3 simple steps:
        <br />
        <br />
        1. Configure: Define brand colors and assets
        <br />
        2. Preview: See your styles applied
        <br />
        3. Export: Review and download your theme
      </>
    ),
    target: "#wizard-tour",
    placement: "bottom",
    skipBeacon: true,
  },
  {
    title: "Define theme colors",
    content: (
      <>
        Set your theme colors, including core colors for your brand and semantic colors for system feedback.
        <br />
        <br />
        You can update this anytime.
      </>
    ),
    placement: "bottom",
    target: "#colors-tour",
    skipBeacon: true,
  },
  {
    title: "Upload assets",
    content: (
      <>
        Upload branding assets such as logo, footer logos, and favicon.
        <br />
        <br />
        Applied across your theme for brand consistency.
      </>
    ),
    placement: "top",
    target: "#assets-tour",
    skipBeacon: true,
    arrowSpacing: 162,
  },
];

const secondStepTour: JoyrideStep[] = [
  {
    title: "Preview theme",
    content: (
      <>
        Use this toggle to preview your theme across different views. Components show individual UI elements, while
        Layouts display predefined page structures. Use this to check color usage, consistency, and readability across
        your theme.
      </>
    ),
    target: "#toggle-tour",
    placement: "right",
    skipBeacon: true,
  },
  {
    title: "Filter your preview",
    content: (
      <>
        Choose specific component groups to preview, such as Forms or Feedback.
        <br />
        <br />
        You can select one or multiple groups to see how your theme styles apply across different scenarios.
      </>
    ),
    placement: "left",
    target: "#select-preview-tour",
    skipBeacon: true,
  },
  {
    title: "Preview area",
    content: (
      <>
        In this area, you can preview both Components and Layout examples.
        <br />
        <br />
        Use the selector to add them to your canvas. If it gets too crowded, just click "Clear selection" to reset the
        view if needed.
      </>
    ),
    placement: "top",
    target: "#preview-area-tour",
    skipBeacon: true,
    arrowSpacing: 162,
  },
];

const thirdStepTour: JoyrideStep[] = [
  {
    title: "Review theme",
    content: (
      <>
        Review your colors, branding, and overall configuration. Validate your setup before finalizing.
        <br />
        <br />
        Helps confirm your theme is ready for export.
      </>
    ),
    target: "#review-tour",
    placement: "top",
    skipBeacon: true,
  },
  {
    title: "Copy configuration",
    content: (
      <>
        Copy your theme configuration as JSON.
        <br /> Use it for quick integration.
        <br />
        <br />
        Allow faster implementation without downloading a file.
      </>
    ),
    placement: "left",
    target: "#copy-configuration-tour",
    skipBeacon: true,
  },
  {
    title: "Export theme",
    content: (
      <>
        Export your theme as a file and use it across your applications. Your theme is ready to be applied across
        projects.
        <br />
        <br />
        You're all set! If you'd like to go through the tour again, click the restart button.
      </>
    ),
    placement: "left-start",
    target: "#export-tour",
    skipBeacon: true,
  },
];

const Tour = ({ currentStep, onTourStepIndexChange }: TourProps) => {
  const router = useRouter();
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [runTour, setRunTour] = useState(false);
  const [tourStepIndex, setTourStepIndex] = useState(0);
  const isTourActiveRef = useRef(false);
  const completedToursRef = useRef<Set<number>>(new Set());

  const updateTourStepIndex = (newIndex: number) => {
    setTourStepIndex(newIndex);
    onTourStepIndexChange?.(newIndex);
  };

  useEffect(() => {
    if (router.query.tour === "true") {
      setDialogVisible(true);
      // Remove the tour parameter from the URL without reloading
      void router.replace("/theme-generator/configuration", undefined, { shallow: true });
    }
  }, [router.query.tour, router]);

  useEffect(() => {
    if (isTourActiveRef.current && !completedToursRef.current.has(currentStep)) {
      updateTourStepIndex(0);
      setRunTour(true);
    }
  }, [currentStep, onTourStepIndexChange]);

  const handleStartTour = () => {
    if (isDialogVisible) {
      setDialogVisible(false);
    }
    isTourActiveRef.current = true;
    setRunTour(true);
  };

  const handleFinishTour = () => {
    completedToursRef.current.add(currentStep);
    if (currentStep === 2) {
      isTourActiveRef.current = false;
    }
    setRunTour(false);
  };

  const handleRestartTour = () => {
    completedToursRef.current.delete(currentStep);
    updateTourStepIndex(0);
    setRunTour(false);
    setTimeout(() => {
      setRunTour(true);
    }, 100);
  };

  const handleTourEvent = ({ action, status, index, type }: EventData) => {
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED || status === STATUS.PAUSED) {
      handleFinishTour();
      return;
    }

    if (action === ACTIONS.CLOSE) {
      handleFinishTour();
      return;
    }

    // Update index when step changes
    if (type === EVENTS.STEP_AFTER) {
      if (action === ACTIONS.NEXT) {
        updateTourStepIndex(index + 1);
      } else if (action === ACTIONS.PREV) {
        updateTourStepIndex(index - 1);
      }
    }
  };

  const joyrideOptions = {
    overlayClickAction: false as const,
    hideOverlay: false,
    blockTargetInteraction: false,
    spotlightPadding: 4,
    overlayColor: "var(--color-bg-alpha-strong)",
    zIndex: 10000,
    arrowBase: 12,
    arrowSize: 6,
    offset: 0,
  };

  return (
    <>
      {currentStep === 0 && (
        <Joyride
          continuous
          run={runTour}
          steps={firstStepTour}
          stepIndex={tourStepIndex}
          tooltipComponent={(tooltipProps) => (
            <TourPopover {...tooltipProps} onFinish={handleFinishTour} onRestart={handleRestartTour} />
          )}
          onEvent={handleTourEvent}
          options={joyrideOptions}
        />
      )}

      {currentStep === 1 && (
        <Joyride
          continuous
          run={runTour}
          steps={secondStepTour}
          stepIndex={tourStepIndex}
          tooltipComponent={(tooltipProps) => (
            <TourPopover {...tooltipProps} onFinish={handleFinishTour} onRestart={handleRestartTour} />
          )}
          onEvent={handleTourEvent}
          options={joyrideOptions}
        />
      )}

      {currentStep === 2 && (
        <Joyride
          continuous
          run={runTour}
          steps={thirdStepTour}
          stepIndex={tourStepIndex}
          tooltipComponent={(tooltipProps) => (
            <TourPopover {...tooltipProps} onFinish={handleFinishTour} onRestart={handleRestartTour} />
          )}
          onEvent={handleTourEvent}
          options={joyrideOptions}
        />
      )}

      {isDialogVisible && (
        <DxcDialog onCloseClick={() => setDialogVisible(false)}>
          <DxcContainer padding="var(--spacing-padding-l)" width="648px">
            <DxcFlex direction="column" gap="var(--spacing-gap-s)" alignItems="start">
              <DxcHeading level={3} text="Welcome to Halstack Theme Generator" />
              <DxcParagraph>
                This guided tour walk you through the 3 simple steps to set up your Halstack Theme. We'll start with
                branding, then preview in real components and product layouts and finally export your theme.
              </DxcParagraph>
              <DxcFlex gap="var(--spacing-gap-s)" justifyContent="end" alignSelf="stretch">
                <DxcButton
                  label="Skip"
                  mode="tertiary"
                  size={{ height: "medium" }}
                  onClick={() => setDialogVisible(false)}
                />
                <DxcButton
                  label="Get Started!"
                  icon="filled_play_arrow"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  onClick={handleStartTour}
                />
              </DxcFlex>
            </DxcFlex>
          </DxcContainer>
        </DxcDialog>
      )}
    </>
  );
};

export default Tour;
