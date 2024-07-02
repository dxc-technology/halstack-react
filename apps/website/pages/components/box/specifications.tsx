import Head from "next/head";
import type { ReactElement } from "react";
import BoxPageLayout from "../../../screens/components/box/BoxPageLayout";
import BoxSpecsPage from "../../../screens/components/box/specs/BoxSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Box Specs — Halstack Design System</title>
      </Head>
      <BoxSpecsPage></BoxSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <BoxPageLayout>{page}</BoxPageLayout>;
};

export default Specifications;
