import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightPageLayout from "../../../screens/components/status-light/StatusLightPageLayout";
import StatusLightUsagePage from "../../../screens/components/status-light/usage/StatusLightUsagePage";

const Usage = () => {
  return (
    <>
      <Head>
        <title>Status Light Usage — Halstack Design System</title>
      </Head>
      <StatusLightUsagePage></StatusLightUsagePage>
    </>
  );
};

Usage.getLayout = function getLayout(page: ReactElement) {
  return <StatusLightPageLayout>{page}</StatusLightPageLayout>;
};

export default Usage;
