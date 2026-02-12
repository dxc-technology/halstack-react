import Head from "next/head";
import { useState } from "react";
import styled from "@emotion/styled";
import { DxcApplicationLayout, DxcButton, DxcContainer, DxcToastsQueue } from "@dxc-technology/halstack-react";
import { dxcLogo } from "@/common/images/dxc_logo";
import { ThemeSettings } from "screens/utilities/theme-generator/components/ThemeSettings";
import ThemeGeneratorPage from "screens/utilities/theme-generator/ThemeGeneratorPage";

export type Color = {
  name: string;
  value: string;
};

export type Colors = Color[];

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-xs);
  padding: var(--spacing-padding-none) var(--spacing-padding-ml);
  box-sizing: border-box;
  padding-top: var(--spacing-padding-s);
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
`;

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-ml);
  padding: var(--spacing-padding-l);
`;

const Index = () => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);
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
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <DxcApplicationLayout logo={{ src: dxcLogo, alt: "DXC Technology" }} header={<DxcApplicationLayout.Header />}>
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            <MainContent>
              <DxcButton label="Back to site" icon="chevron_left" mode="tertiary" size={{ height: "large", width: "large" }} />
              <PageWrapper>
                <DxcContainer>Sidenav</DxcContainer>

                <PreviewWrapper>
                  <ThemeSettings
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    colors={colors}
                    setColors={setColors}
                  />
                  <ThemeGeneratorPage colors={colors} />
                </PreviewWrapper>
              </PageWrapper>
            </MainContent>
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </>
  );
};

export default Index;
