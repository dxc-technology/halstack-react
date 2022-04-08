import Head from "next/head";
import type { ReactElement } from "react";
import ProgressBarUsagePage from "../../../screens/components/progress-bar/usage/ProgressBarUsagePage";
import ProgressBarPageLayout from "../../../screens/components/progress-bar/ProgressBarPageLayout";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Progress Bar — Halstack Design System</title>
      </Head>
      <ProgressBarUsagePage></ProgressBarUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <ProgressBarPageLayout>{page}</ProgressBarPageLayout>;
};

export default Usage;
