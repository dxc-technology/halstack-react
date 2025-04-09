import Head from "next/head";
import type { ReactElement } from "react";
import ProgressBarPageLayout from "screens/components/progress-bar/ProgressBarPageLayout";
import ProgressBarCodePage from "screens/components/progress-bar/overview/ProgressBarOverviewPage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Progress bar code — Halstack Design System</title>
      </Head>
      <ProgressBarCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <ProgressBarPageLayout>{page}</ProgressBarPageLayout>;

export default Code;
