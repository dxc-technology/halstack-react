import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DxcContainer, DxcFlex, DxcWizard } from "@dxc-technology/halstack-react";
import StepHeading from "./components/StepHeading";
import BottomButtons from "./components/BottomButtons";
import ThemeGeneratorPreviewPage from "./ThemeGeneratorPreviewPage";
import { BrandingDetails } from "./steps/BrandingDetails";
import { generateTokens, handleExport } from "./utils";
import { Colors, FileData, Step } from "./types";
import ReviewDetails from "./steps/ReviewDetails";
import { ACTIONS, EVENTS, Joyride, STATUS, type EventData, type Step as JoyrideStep } from "react-joyride";
import TourPopover from "./components/TourPopover";

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

const tourSteps: JoyrideStep[] = [
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
    target: "#first-step",
    placement: "bottom",
    skipBeacon: true,
  },
  {
    title: "Upload assets",
    content: (
      <>
        Upload branding assets such as main logo, footer logos, and favicon.
        <br />
        <br />
        Applied across your theme for brand consistency.
      </>
    ),
    placement: "top",
    target: "#second-step",
    skipBeacon: true,
  },
  {
    title: "Preview theme",
    content: (
      <>
        Use this toggle to preview your theme. Components show individual elements, while layouts display predefined
        page structures to help you check consistency and readability.
      </>
    ),
    placement: "top-start",
    target: "#third-step",
    skipBeacon: true,
    arrowSpacing: 162,
  },
  {
    title: "Review theme",
    content: (
      <>
        Review your colors, branding and overall configuration. Validate your setup before finalizing.
        <br />
        <br />
        Helps confirm your theme is ready for export.
      </>
    ),
    target: "#fourth-step",
    skipBeacon: true,
  },
  {
    title: "Copy configuration",
    content: (
      <>
        Copy your theme configuration as JSON. Use it for quick integration.
        <br />
        <br />
        Allows faster implementation without downloading a file.
      </>
    ),
    placement: "left",
    target: "#fifth-step",
    skipBeacon: true,
  },
  {
    title: "Export theme",
    content: (
      <>
        Export your theme as a file. Use it across your applications.
        <br />
        <br />
        Makes your theme ready for use across projects.
      </>
    ),
    target: "#sixth-step",
    skipBeacon: true,
    placement: "bottom-end",
  },
  {
    title: "You are all set",
    content: (
      <>
        You are ready to create and manage your theme.
        <br />
        <br />
        If you need to go through the tour again, click the tour button anytime to restart the guide.
      </>
    ),
    target: "body",
    placement: "center",
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
  const [runTour, setRunTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (router.query.tour === "true") {
      setRunTour(true);
      // Remove the tour parameter from the URL without reloading
      void router.replace("/theme-generator/configuration", undefined, { shallow: true });
    }
  }, [router.query.tour]);

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

  const handleFinishTour = () => {
    setRunTour(false);
    setStepIndex(0);
    if (currentStep !== 0) {
      handleChangeStep(0);
    }
  };

  const handleRestartTour = () => {
    setStepIndex(0);
    setRunTour(false);
    if (currentStep !== 0) {
      handleChangeStep(0);
    }
    setTimeout(() => {
      setRunTour(true);
    }, 100);
  };

  const getWizardStepFromTourIndex = (tourIndex: number): Step => {
    if (tourIndex <= 1) return 0;
    if (tourIndex <= 2) return 1;
    if (tourIndex <= 6) return 2;
    return 0;
  };

  const handleTourEvent = ({ action, index, status, type }: EventData) => {
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED || status === STATUS.PAUSED) {
      handleFinishTour();
      return;
    }

    if (action === ACTIONS.CLOSE) {
      handleFinishTour();
      return;
    }

    if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      console.log("Tour event:", { action, index, status, type });
      const nextStep = action === ACTIONS.PREV ? index - 1 : index + 1;
      const boundedStep = Math.max(0, Math.min(nextStep, tourSteps.length - 1));
      setStepIndex(boundedStep);

      if (boundedStep === tourSteps.length - 1) {
        if (currentStep !== 0) {
          handleChangeStep(0);
        }
      } else {
        const newWizardStep = getWizardStepFromTourIndex(boundedStep);
        if (newWizardStep !== currentStep) {
          handleChangeStep(newWizardStep);
        }
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BrandingDetails colors={colors} onColorsChange={setColors} logos={logos} onLogosChange={setLogos} />;
      case 1:
        return <ThemeGeneratorPreviewPage tokens={tokens} logos={logos} />;
      case 2:
        return <ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />;
    }
  };

  return (
    <DxcContainer
      height="100%"
      boxSizing="border-box"
      padding={{ top: "var(--spacing-padding-xl)" }}
      background={{ color: "var(--color-bg-neutral-lighter)" }}
    >
      <Joyride
        key={tourSteps[0]?.target as string}
        continuous
        run={runTour}
        steps={tourSteps}
        stepIndex={stepIndex}
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
        styles={{ overlay: { maxHeight: stepIndex === 6 ? "100%" : "auto" } }}
      />

      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" fullHeight>
        <DxcContainer width="80%" maxWidth="1112px" margin={{ left: "auto", right: "auto" }}>
          <DxcWizard
            steps={wizardSteps}
            currentStep={currentStep}
            onStepClick={(i) => {
              handleChangeStep(i as Step);
            }}
          />
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
  );
};

export default ThemeGeneratorConfigPage;
