import styled from "@emotion/styled";
import { ThemeSettings } from "screens/utilities/theme-generator/components/ThemeSettings";
import { BottomButtons } from "screens/utilities/theme-generator/components/BottomButtons";
import { PreviewArea } from "./components/PreviewArea";
import { PreviewSidenav } from "./components/PreviewSidenav";
import { DxcFlex } from "@dxc-technology/halstack-react";
import { ThemeGeneratorProvider, useThemeGenerator } from "./context/ThemeGeneratorContext";

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
  padding: var(--spacing-padding-l);
`;

const ThemeGeneratorContent = () => {
  const { currentStep, setCurrentStep, activeComponents, setActiveComponents } = useThemeGenerator();

  return (
    <DxcFlex alignItems="flex-start" gap="var(--spacing-gap-ml)" alignSelf="stretch">
      <PreviewSidenav />

      <PreviewWrapper>
        <ThemeSettings />

        <PreviewArea components={activeComponents} setActiveComponents={setActiveComponents} />

        <BottomButtons currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </PreviewWrapper>
    </DxcFlex>
  );
};

const ThemeGeneratorPage = () => {
  return (
    <ThemeGeneratorProvider>
      <ThemeGeneratorContent />
    </ThemeGeneratorProvider>
  );
};

export default ThemeGeneratorPage;
