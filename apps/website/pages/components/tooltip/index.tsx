import Head from "next/head";
import type { ReactElement } from "react";
import TooltipPageLayout from "screens/components/tooltip/TooltipPageLayout";
import TooltipOverviewPage from "screens/components/tooltip/overview/TooltipOverviewPage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Tooltip — Halstack Design System</title>
      </Head>
      <TooltipOverviewPage />
    </>
  );
};

Index.getLayout = (page: ReactElement) => <TooltipPageLayout>{page}</TooltipPageLayout>;

export default Index;
