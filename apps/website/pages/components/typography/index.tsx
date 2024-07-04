import Head from "next/head";
import type { ReactElement } from "react";
import TypographyPageLayout from "../../../screens/components/typography/TypographyPageLayout";
import TypographyCodePage from "../../../screens/components/typography/code/TypographyCodePage";

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
