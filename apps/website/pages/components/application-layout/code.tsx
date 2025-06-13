import Head from "next/head";
import type { ReactElement } from "react";
import ApplicationLayoutPageLayout from "screens/components/application-layout/ApplicationLayoutPageLayout";
import ApplicationLayoutCodePage from "screens/components/application-layout/code/ApplicationLayoutCodePage";

const Code = () => (
  <>
    <Head>
      <title>Application layout code — Halstack Design System</title>
    </Head>
    <ApplicationLayoutCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ApplicationLayoutPageLayout>{page}</ApplicationLayoutPageLayout>;

export default Code;
