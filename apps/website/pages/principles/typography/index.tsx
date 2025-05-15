import Head from "next/head";
import type { ReactElement } from "react";
import TypographyCodePage from "screens/principles/typography/code/TypographyCodePage";
import TypographyPageLayout from "screens/principles/typography/TypographyPageLayout";

const Index = () => (
  <>
    <Head>
      <title>Typography — Halstack Design System</title>
    </Head>
    <TypographyCodePage />
  </>
);

Index.getLayout = (page: ReactElement) => <TypographyPageLayout>{page}</TypographyPageLayout>;

export default Index;
