import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavCodePage from "screens/components/quick-nav/code/QuickNavCodePage";
import QuickNavPageLayout from "screens/components/quick-nav/QuickNavPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Quick nav code — Halstack Design System</title>
    </Head>
    <QuickNavCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <QuickNavPageLayout>{page}</QuickNavPageLayout>;

export default Code;
