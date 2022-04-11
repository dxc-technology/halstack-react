import Head from "next/head";
import type { ReactElement } from "react";
import NumberInputSpecsPage from "../../../screens/components/number-input/specs/NumberInputSpecsPage";
import NumberInputPageLayout from "../../../screens/components/number-input/NumberInputPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Number Input Specs — Halstack Design System</title>
      </Head>
      <NumberInputSpecsPage></NumberInputSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <NumberInputPageLayout>{page}</NumberInputPageLayout>;
};

export default Specifications;
