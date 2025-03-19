import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightPageLayout from "screens/components/status-light/StatusLightPageLayout";
import StatusLightCodePage from "screens/components/status-light/code/StatusLightCodePage";

const Code = () => (
  <>
    <Head>
      <title>Status light code — Halstack Design System</title>
    </Head>
    <StatusLightCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <StatusLightPageLayout>{page}</StatusLightPageLayout>;

export default Code;
