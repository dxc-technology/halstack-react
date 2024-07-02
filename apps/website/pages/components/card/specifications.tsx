import Head from "next/head";
import type { ReactElement } from "react";
import CardSpecsPage from "../../../screens/components/card/specs/CardSpecsPage";
import CardPageLayout from "../../../screens/components/card/CardPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Card Specs — Halstack Design System</title>
      </Head>
      <CardSpecsPage></CardSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <CardPageLayout>{page}</CardPageLayout>;
};

export default Specifications;
