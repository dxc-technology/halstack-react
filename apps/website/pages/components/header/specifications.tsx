import Head from "next/head";
import type { ReactElement } from "react";
import HeaderPageLayout from "../../../screens/components/header/HeaderPageLayout";
import HeaderSpecsPage from "../../../screens/components/header/specs/HeaderSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Header Specs — Halstack Design System</title>
      </Head>
      <HeaderSpecsPage></HeaderSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <HeaderPageLayout>{page}</HeaderPageLayout>;
};

export default Specifications;
