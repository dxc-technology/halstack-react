import Head from "next/head";
import styled from "@emotion/styled";
import { DxcApplicationLayout, DxcButton, DxcToastsQueue } from "@dxc-technology/halstack-react";
import { dxcLogo } from "@/common/images/dxc_logo";
import ThemeGeneratorPage from "screens/utilities/theme-generator/ThemeGeneratorPage";

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

const Index = () => {
  return (
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <DxcApplicationLayout logo={{ src: dxcLogo, alt: "DXC Technology" }} header={<DxcApplicationLayout.Header />}>
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            <MainContent>
              <DxcButton
                label="Back to site"
                icon="chevron_left"
                mode="tertiary"
                size={{ height: "large", width: "fitContent" }}
              />
              <ThemeGeneratorPage />
            </MainContent>
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </>
  );
};

export default Index;
