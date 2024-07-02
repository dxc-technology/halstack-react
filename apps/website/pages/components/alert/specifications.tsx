import Head from "next/head";
import type { ReactElement } from "react";
import AlertPageLayout from "../../../screens/components/alert/AlertPageLayout";
import AlertSpecsPage from "../../../screens/components/alert/specs/AlertSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Alert Specs — Halstack Design System</title>
      </Head>
      <AlertSpecsPage></AlertSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <AlertPageLayout>{page}</AlertPageLayout>;
};

export default Specifications;
