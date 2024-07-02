import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightCodePage from "../../../screens/components/status-light/code/StatusLightCodePage";
import StatusLightPageLayout from "../../../screens/components/status-light/StatusLightPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Status Light — Halstack Design System</title>
      </Head>
      <StatusLightCodePage></StatusLightCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <StatusLightPageLayout>{page}</StatusLightPageLayout>;
};

export default Index;
