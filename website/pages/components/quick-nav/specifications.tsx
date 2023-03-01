import Head from "next/head";
import type { ReactElement } from "react";
import QuickNavPageLayout from "../../../screens/components/quick-nav/QuickNavPageLayout";
import QuickNavSpecsPage from "../../../screens/components/quick-nav/specs/QuickNavSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>QuickNav Specs — Halstack Design System</title>
      </Head>
      <QuickNavSpecsPage></QuickNavSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <QuickNavPageLayout>{page}</QuickNavPageLayout>;
};

export default Specifications;
