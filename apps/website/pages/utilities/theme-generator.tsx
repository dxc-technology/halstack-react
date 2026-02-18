import Head from "next/head";
import styled from "@emotion/styled";
import { DxcApplicationLayout, DxcButton, DxcToastsQueue } from "@dxc-technology/halstack-react";
import ThemeGeneratorPage from "screens/utilities/theme-generator/ThemeGeneratorPage";
import Link from "next/link";

const headerLogo = {
  src: (
    <svg xmlns="http://www.w3.org/2000/svg" width="860" height="240" viewBox="0 0 860 240" fill="none">
      <path
        d="M220.055 60.7583C252.905 60.7583 279.643 87.4387 279.644 120.247C279.644 153.055 252.905 179.735 220.055 179.735H61V155.455H220.055C239.522 155.455 255.362 139.657 255.362 120.247C255.362 100.836 239.522 85.0396 220.055 85.0396H61V60.7583H220.055ZM798 85.0386H638.945C619.478 85.0386 603.638 100.836 603.638 120.247C603.638 139.657 619.478 155.454 638.945 155.454H798V179.735H638.945C606.08 179.735 579.357 153.054 579.356 120.247C579.356 87.4387 606.095 60.7573 638.945 60.7573H798V85.0386ZM556.104 85.0386C530.11 85.0387 511.856 96.5366 492.531 108.706C486.261 112.662 479.906 116.647 473.278 120.204C479.905 123.76 486.261 127.744 492.531 131.701C511.856 143.87 530.11 155.368 556.104 155.368V179.649C523.097 179.649 499.987 165.095 479.591 152.254C462.637 141.585 447.997 132.358 430.058 132.358C412.118 132.358 397.478 141.571 380.524 152.254C360.128 165.095 337.018 179.649 304.011 179.649V155.368C330.006 155.368 348.259 143.87 367.584 131.701C373.854 127.744 380.211 123.76 386.838 120.204C380.211 116.647 373.854 112.662 367.584 108.706C348.259 96.5366 330.006 85.0386 304.011 85.0386V60.7573C337.018 60.7573 360.128 75.3119 380.524 88.1665C397.478 98.8358 412.118 108.063 430.058 108.063V108.048C447.997 108.048 462.637 98.8364 479.591 88.1528C499.987 75.3125 523.097 60.7575 556.104 60.7573V85.0386Z"
        fill="url(#paint0_radial_1679_944)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1679_944"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(402.422 -113.55 49.0928 173.987 432 120.032)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB87E" />
          <stop offset="0.163458" stop-color="#FFA962" />
          <stop offset="0.337937" stop-color="#FEA15F" />
          <stop offset="0.557693" stop-color="#FF7E51" />
          <stop offset="0.839777" stop-color="#B88A99" />
          <stop offset="1" stop-color="#6399F0" />
        </radialGradient>
      </defs>
    </svg>
  ),
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
