import Head from "next/head";
import type { ReactElement } from "react";
import BarChartPageLayout from "../../../screens/components/bar-chart/BarChartPageLayout";
import BarChartCodePage from "../../../screens/components/bar-chart/code/BarChartCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Bar Chart — Halstack Design System</title>
      </Head>
      <BarChartCodePage></BarChartCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BarChartPageLayout>{page}</BarChartPageLayout>;
};

export default Index;
