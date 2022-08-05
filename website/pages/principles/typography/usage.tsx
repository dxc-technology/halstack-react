import Head from "next/head";
import { ReactElement } from "react";
import TypographyUsagePage from "../../../screens/principles/typography/usage/TypographyUsagePage";
import TypographyPageLayout from "../../../screens/principles/typography/TypographyPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Typography Usage — Halstack Design System</title>
      </Head>
      <TypographyUsagePage />
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TypographyPageLayout>{page}</TypographyPageLayout>;
};

export default Usage;
