import Head from "next/head";
import type { ReactElement } from "react";
import ProgressBarCodePage from "screens/components/progress-bar/code/ProgressBarCodePage";
import ProgressBarPageLayout from "screens/components/progress-bar/ProgressBarPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Progress Bar — Halstack Design System</title>
      </Head>
      <ProgressBarCodePage></ProgressBarCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ProgressBarPageLayout>{page}</ProgressBarPageLayout>;
};

export default Index;
