import Head from "next/head";
import type { ReactElement } from "react";
import TypographyCodePage from "screens/principles/typography/code/TypographyCodePage";
import TypographyPageLayout from "screens/principles/typography/TypographyPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Typography — Halstack Design System</title>
      </Head>
      <TypographyCodePage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TypographyPageLayout>{page}</TypographyPageLayout>;
};

export default Index;
