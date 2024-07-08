import Head from "next/head";
import type { ReactElement } from "react";
import BarChartPageLayout from "../../../screens/components/bar-chart/BarChartPageLayout";
import BarChartSpecsPage from "../../../screens/components/bar-chart/specs/BarChartSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Bar Chart Specs — Halstack Design System</title>
      </Head>
      <BarChartSpecsPage></BarChartSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BarChartPageLayout>{page}</BarChartPageLayout>;
};

export default Specifications;
