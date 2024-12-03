import Head from "next/head";
import type { ReactElement } from "react";
import TooltipPageLayout from "screens/components/tooltip/TooltipPageLayout";
import TooltipUsagePage from "screens/components/tooltip/usage/TooltipUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Tooltip Usage — Halstack Design System</title>
      </Head>
      <TooltipUsagePage></TooltipUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <TooltipPageLayout>{page}</TooltipPageLayout>;
};

export default Usage;
