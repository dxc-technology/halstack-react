import Head from "next/head";
import type { ReactElement } from "react";
import TypographyPageLayout from "../../../screens/components/typography/TypographyPageLayout";
import TypographyUsagePage from "../../../screens/components/typography/usage/TypographyUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Typography Usage — Halstack Design System</title>
      </Head>
      <TypographyUsagePage></TypographyUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TypographyPageLayout>{page}</TypographyPageLayout>;
};

export default Usage;
