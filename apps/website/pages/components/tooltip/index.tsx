import Head from "next/head";
import type { ReactElement } from "react";
import TooltipPageLayout from "screens/components/tooltip/TooltipPageLayout";
import TooltipCodePage from "screens/components/tooltip/code/TooltipCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Tooltip — Halstack Design System</title>
      </Head>
      <TooltipCodePage></TooltipCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <TooltipPageLayout>{page}</TooltipPageLayout>;
};

export default Index;
