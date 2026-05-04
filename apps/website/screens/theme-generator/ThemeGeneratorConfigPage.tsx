import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  DxcButton,
  DxcContainer,
  DxcDialog,
  DxcFlex,
  DxcHeading,
  DxcParagraph,
  DxcWizard,
} from "@dxc-technology/halstack-react";
import StepHeading from "./components/StepHeading";
import BottomButtons from "./components/BottomButtons";
import ThemeGeneratorPreviewPage from "./ThemeGeneratorPreviewPage";
import { BrandingDetails } from "./steps/BrandingDetails";
import { generateTokens, handleExport } from "./utils";
import { Colors, FileData, Step } from "./types";
import ReviewDetails from "./steps/ReviewDetails";
import { ACTIONS, EVENTS, Joyride, STATUS, type EventData, type Step as JoyrideStep } from "react-joyride";
import TourPopover from "./components/TourPopover";
import Code from "@/common/Code";

const steps = [
  {
    label: "Configure theme",
    description: "Branding details",
    title: "Add your theme specifics",
    subtitle: "Review your uploaded theme or define your brand colors and logos to preview them in real life. ",
  },
  {
    label: "Preview",
    description: "Components and templates",
    title: "Preview how your theme applies",
    subtitle: "Choose components or examples from Halstack catalogue to see how your theme behaves.",
  },
  {
    label: "Export theme",
    description: "Review and export",
    title: "Review and export your theme",
    subtitle: "Check your colors and branding assets before exporting your Halstack theme.",
  },
] as const;

const wizardSteps = steps.map(({ label, description }) => ({
  label,
  description,
}));

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
        Use the selector to add them to your canvas. If it gets too crowded, just click <Code>Clear</Code> to reset the
        view.
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

const ThemeGeneratorConfigPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [colors, setColors] = useState<Colors>({
    primary: "#5F249F",
    secondary: "#0067B3",
    tertiary: "#F7CF2B",
    neutral: "#999999",
    info: "#0067B3",
    success: "#59D97D",
    error: "#FE344F",
    warning: "#F59F3D",
  });
  const [logos, setLogos] = useState({
    mainLogo: [] as FileData[],
    footerLogo: [] as FileData[],
    footerReducedLogo: [] as FileData[],
    favicon: [] as FileData[],
  });
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const lastGeneratedColorsRef = useRef<string>("");
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [runTour, setRunTour] = useState(false);
  const [tourStepIndex, setTourStepIndex] = useState(0);
  const isTourActiveRef = useRef(false);
  const completedToursRef = useRef<Set<Step>>(new Set());

  useEffect(() => {
    if (router.query.tour === "true") {
      setDialogVisible(true);
      // Remove the tour parameter from the URL without reloading
      void router.replace("/theme-generator/configuration", undefined, { shallow: true });
    }
  }, [router.query.tour]);

  useEffect(() => {
    if (isTourActiveRef.current && !completedToursRef.current.has(currentStep)) {
      setTourStepIndex(0);
      setRunTour(true);
    }
  }, [currentStep]);

  const themeJson = useMemo(() => {
    const themeObject = {
      tokens: tokens,
      logos: {
        mainLogo: "",
        footerLogo: "",
        footerReducedLogo: "",
        favicon: "",
      },
    };
    return JSON.stringify(themeObject, null, 2);
  }, [tokens]);

  const generateTokensFromColors = () => {
    try {
      const mappedColors = {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        semantic01: colors.info,
        semantic02: colors.success,
        semantic03: colors.warning,
        semantic04: colors.error,
        neutral: colors.neutral,
      };

      const generatedTokens = generateTokens(mappedColors);

      setTokens(generatedTokens);
      lastGeneratedColorsRef.current = JSON.stringify(colors);
    } catch (error) {
      console.error("Error generating tokens:", error);
    }
  };

  const handleChangeStep = (step: 0 | 1 | 2) => {
    if (currentStep === 0 && JSON.stringify(colors) !== lastGeneratedColorsRef.current) {
      generateTokensFromColors();
    }
    setCurrentStep(step);
  };

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
    setTourStepIndex(0);
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
      const nextIndex = action === ACTIONS.PREV ? index : index + 1;
      setTourStepIndex(nextIndex);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BrandingDetails colors={colors} onColorsChange={setColors} logos={logos} onLogosChange={setLogos} />;
      case 1:
        return (
          <ThemeGeneratorPreviewPage
            tokens={tokens}
            logos={logos}
            showDefaultComponents={runTour && tourStepIndex === 2}
          />
        );
      case 2:
        return <ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />;
    }
  };

  return (
    <>
      <DxcContainer
        height="100%"
        boxSizing="border-box"
        padding={{ top: "var(--spacing-padding-xl)" }}
        background={{ color: "var(--color-bg-neutral-lighter)" }}
      >
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
            options={{
              overlayClickAction: false,
              hideOverlay: false,
              blockTargetInteraction: false,
              spotlightPadding: 4,
              overlayColor: "var(--color-bg-alpha-strong)",
              zIndex: 10000,
              arrowBase: 12,
              arrowSize: 6,
              offset: 0,
            }}
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
            options={{
              overlayClickAction: false,
              hideOverlay: false,
              blockTargetInteraction: false,
              spotlightPadding: 4,
              overlayColor: "var(--color-bg-alpha-strong)",
              zIndex: 10000,
              arrowBase: 12,
              arrowSize: 6,
              offset: 0,
            }}
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
            options={{
              overlayClickAction: false,
              hideOverlay: false,
              blockTargetInteraction: false,
              spotlightPadding: 4,
              overlayColor: "var(--color-bg-alpha-strong)",
              zIndex: 10000,
              arrowBase: 12,
              arrowSize: 6,
              offset: 0,
            }}
          />
        )}

        <DxcFlex direction="column" gap="var(--spacing-gap-xl)" fullHeight>
          <DxcContainer width="80%" maxWidth="1112px" margin={{ left: "auto", right: "auto" }}>
            <div id="wizard-tour">
              <DxcWizard
                steps={wizardSteps}
                currentStep={currentStep}
                onStepClick={(i) => {
                  handleChangeStep(i as Step);
                }}
              />
            </div>
          </DxcContainer>

          <DxcContainer
            maxWidth="1332px"
            width="90%"
            height="100%"
            boxSizing="border-box"
            margin={{ left: "auto", right: "auto" }}
          >
            <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xl)" fullHeight>
              <StepHeading title={steps[currentStep].title} subtitle={steps[currentStep].subtitle} />
              {renderStepContent()}
            </DxcFlex>
          </DxcContainer>

          <BottomButtons
            currentStep={currentStep}
            onChangeStep={handleChangeStep}
            onExport={() => handleExport(themeJson)}
          />
        </DxcFlex>
      </DxcContainer>
      {isDialogVisible && (
        <DxcDialog onCloseClick={() => setDialogVisible(false)}>
          <DxcContainer padding="var(--spacing-padding-l)" width="648px">
            <DxcFlex direction="column" gap="var(--spacing-gap-s)" alignItems="start">
              <DxcHeading level={3} text="Welcome to Halstack Theme Generator" />
              <DxcParagraph>
                This guided tour walk you through the 3 simple steps to set up your Halstack Theme. We’ll start with
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

export default ThemeGeneratorConfigPage;
