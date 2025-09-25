import Head from "next/head";
import type { ReactElement } from "react";
import TypographyPageLayout from "screens/components/typography/TypographyPageLayout";
import TypographyCodePage from "screens/components/typography/code/TypographyCodePage";

const Code = () => (
  <>
    <Head>
      <title>Typography code — Halstack Design System</title>
    </Head>
    <TypographyCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TypographyPageLayout>{page}</TypographyPageLayout>;

export default Code;
