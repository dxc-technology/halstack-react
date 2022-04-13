import Head from "next/head";
import type { ReactElement } from "react";
import SpinnerSpecsPage from "../../../screens/components/spinner/specs/SpinnerSpecsPage";
import SpinnerPageLayout from "../../../screens/components/spinner/SpinnerPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Spinner Specs — Halstack Design System</title>
      </Head>
      <SpinnerSpecsPage></SpinnerSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <SpinnerPageLayout>{page}</SpinnerPageLayout>;
};

export default Specifications;
