import Head from "next/head";
import styled from "@emotion/styled";
import { DxcApplicationLayout, DxcButton, DxcToastsQueue } from "@dxc-technology/halstack-react";
import ThemeGeneratorPage from "screens/utilities/theme-generator/ThemeGeneratorPage";
import Link from "next/link";

const headerLogo = {
  src: "../../public/dxc_header_logo.png",
  alt: "Dxc Technology",
};

const footerLogo = {
  src: (
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="16" viewBox="0 0 57 16" fill="none">
      <path
        d="M14.585 4.05054C16.7623 4.05054 18.5344 5.82924 18.5345 8.01646C18.5345 10.2037 16.7623 11.9823 14.585 11.9823H4.04297V10.3637H14.585C15.8752 10.3637 16.9251 9.31046 16.9251 8.01646C16.9251 6.72239 15.8752 5.6693 14.585 5.6693H4.04297V4.05054H14.585ZM52.8906 5.66923H42.3486C41.0584 5.66923 40.0085 6.72239 40.0085 8.01646C40.0085 9.31046 41.0584 10.3636 42.3486 10.3636H52.8906V11.9823H42.3486C40.1704 11.9823 38.3992 10.2036 38.3991 8.01646C38.3991 5.82924 40.1714 4.05048 42.3486 4.05048H52.8906V5.66923ZM36.858 5.66923C35.1351 5.66924 33.9253 6.43576 32.6444 7.24706C32.2289 7.51079 31.8077 7.77646 31.3684 8.01359C31.8076 8.25066 32.2289 8.51626 32.6444 8.78006C33.9253 9.59132 35.1351 10.3579 36.858 10.3579V11.9766C34.6703 11.9766 33.1386 11.0063 31.7868 10.1503C30.6631 9.43899 29.6928 8.82386 28.5038 8.82386C27.3147 8.82386 26.3444 9.43806 25.2207 10.1503C23.8689 11.0063 22.3372 11.9766 20.1495 11.9766V10.3579C21.8724 10.3579 23.0822 9.59132 24.3631 8.78006C24.7786 8.51626 25.2 8.25066 25.6392 8.01359C25.2 7.77646 24.7786 7.51079 24.3631 7.24706C23.0822 6.43576 21.8724 5.66923 20.1495 5.66923V4.05048C22.3372 4.05048 23.8689 5.02078 25.2207 5.87776C26.3444 6.58904 27.3147 7.20419 28.5038 7.20419V7.20319C29.6928 7.20319 30.6631 6.58908 31.7868 5.87684C33.1386 5.02082 34.6703 4.05049 36.858 4.05048V5.66923Z"
        fill="#F6F3F0"
      />
    </svg>
  ),
  alt: "Dxc Technology",
};

const MainContent = styled.div`
  width: 1332px;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  gap: var(--spacing-gap-xl);
  padding: var(--spacing-padding-none) var(--spacing-padding-ml);
  box-sizing: border-box;
  padding-top: var(--spacing-padding-s);
  margin: var(--spacing-gap-xl) auto;
`;

const Index = () => {
  return (
    <>
      <Head>
        <title>Theme generator — Halstack Design System</title>
      </Head>
      <DxcApplicationLayout
        logo={headerLogo}
        header={
          <DxcApplicationLayout.Header
            appTitle="Theme Generator"
            sideContent={
              <Link href="/utilities/theme-generator/user-guide">
                <DxcButton
                  label="User guide"
                  icon="description"
                  mode="secondary"
                  size={{ height: "large", width: "fitContent" }}
                />
              </Link>
            }
          />
        }
        footer={<DxcApplicationLayout.Footer mode="reduced" logo={footerLogo} />}
      >
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            <MainContent>
              <ThemeGeneratorPage />
            </MainContent>
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </>
  );
};

export default Index;
