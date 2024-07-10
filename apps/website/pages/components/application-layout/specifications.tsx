import Head from "next/head";
import type { ReactElement } from "react";
import ApplicationLayoutPageLayout from "../../../screens/components/application-layout/ApplicationLayoutPageLayout";
import ApplicationLayoutSpecsPage from "../../../screens/components/application-layout/specs/ApplicationLayoutSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Application layout Specs — Halstack Design System</title>
      </Head>
      <ApplicationLayoutSpecsPage></ApplicationLayoutSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <ApplicationLayoutPageLayout>{page}</ApplicationLayoutPageLayout>;
};

export default Specifications;
