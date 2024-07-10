import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightPageLayout from "../../../screens/components/status-light/StatusLightPageLayout";
import StatusLightSpecsPage from "../../../screens/components/status-light/specs/StatusLightSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Status Light Specs — Halstack Design System</title>
      </Head>
      <StatusLightSpecsPage></StatusLightSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <StatusLightPageLayout>{page}</StatusLightPageLayout>;
};

export default Specifications;
