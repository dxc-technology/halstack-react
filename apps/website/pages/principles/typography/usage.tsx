import Head from "next/head";
import { ReactElement } from "react";
import TypographyUsagePage from "screens/principles/typography/usage/TypographyUsagePage";
import TypographyPageLayout from "screens/principles/typography/TypographyPageLayout";

const Usage = () => (
  <>
    <Head>
      <title>Typography usage — Halstack Design System</title>
    </Head>
    <TypographyUsagePage />
  </>
);

Usage.getLayout = (page: ReactElement) => <TypographyPageLayout>{page}</TypographyPageLayout>;

export default Usage;
