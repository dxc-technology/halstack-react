import Head from "next/head";
import type { ReactElement } from "react";
import DividerPageLayout from "screens/components/divider/DividerPageLayout";
import DividerSpecsPage from "screens/components/divider/specs/DividerSpecsPage";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Divider Specs — Halstack Design System</title>
      </Head>
      <DividerSpecsPage></DividerSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <DividerPageLayout>{page}</DividerPageLayout>;
};

export default Specifications;
