import { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { ThemeSettings } from "screens/utilities/theme-generator/components/ThemeSettings";
import { BottomButtons } from "screens/utilities/theme-generator/components/BottomButtons";
import DxcContainer from "../../../../../packages/lib/src/container/Container";
import { PreviewArea } from "./components/PreviewArea";
import { DxcFlex } from "@dxc-technology/halstack-react";

export type Color = {
  name: string;
  value: string;
};

export type Colors = Color[];

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
  padding: var(--spacing-padding-l);
`;

const ThemeGeneratorPage = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);
  const [activeComponents, setActiveComponents] = useState<{ name: string; preview: ReactNode }[]>([]);
  const [colors, setColors] = useState<Colors>([
    { name: "primary", value: "#5f249f" },
    { name: "secondary", value: "#0067b3" },
    { name: "tertiary", value: "#c2c2c2" },
    { name: "info", value: "#0067b3" },
    { name: "success", value: "#24a148" },
    { name: "error", value: "#d0011b" },
    { name: "neutral", value: "#000000" },
  ]);

  return (
    <DxcFlex alignItems="flex-start" gap="var(--spacing-gap-ml)" alignSelf="stretch">
      <DxcContainer>Sidenav</DxcContainer>

      <PreviewWrapper>
        <ThemeSettings
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          colors={colors}
          setColors={setColors}
        />

        <PreviewArea components={activeComponents} setActiveComponents={setActiveComponents} />

        <BottomButtons currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </PreviewWrapper>
    </DxcFlex>
  );
};

export default ThemeGeneratorPage;
