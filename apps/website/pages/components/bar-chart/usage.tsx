import Head from "next/head";
import type { ReactElement } from "react";
import BarChartPageLayout from "../../../screens/components/bar-chart/BarChartPageLayout";
import BarChartUsagePage from "../../../screens/components/bar-chart/usage/BarChartUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Bar Chart Usage — Halstack Design System</title>
      </Head>
      <BarChartUsagePage></BarChartUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <BarChartPageLayout>{page}</BarChartPageLayout>;
};

export default Usage;
