import Head from "next/head";
import type { ReactElement } from "react";
import ProgressBarSpecsPage from "../../../screens/components/progress-bar/specs/ProgressBarSpecsPage";
import ProgressBarPageLayout from "../../../screens/components/progress-bar/ProgressBarPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Progress Bar Specs — Halstack Design System</title>
      </Head>
      <ProgressBarSpecsPage></ProgressBarSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ProgressBarPageLayout>{page}</ProgressBarPageLayout>;
};

export default Specifications;
