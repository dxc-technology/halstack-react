import Head from "next/head";
import type { ReactElement } from "react";
import TooltipPageLayout from "screens/components/tooltip/TooltipPageLayout";
import TooltipCodePage from "screens/components/tooltip/code/TooltipCodePage";

const Code = () => (
  <>
    <Head>
      <title>Tooltip code — Halstack Design System</title>
    </Head>
    <TooltipCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TooltipPageLayout>{page}</TooltipPageLayout>;

export default Code;
